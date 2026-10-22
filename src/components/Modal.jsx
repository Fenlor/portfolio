import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

const Modal = ({ isOpen, onClose, label, children }) => {
    const dialogRef = useRef(null);
    // parents pass a new onClose each render; read it through a ref so the effect below runs once per open
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!isOpen) return;

        const opener = document.activeElement;
        const dialog = dialogRef.current;
        dialog.querySelector(FOCUSABLE)?.focus();

        // Escape closes; Tab and Shift+Tab wrap around inside the dialog
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onCloseRef.current();
                return;
            }
            if (e.key !== "Tab") return;

            const items = [...dialog.querySelectorAll(FOCUSABLE)];
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (!dialog.contains(document.activeElement)) {
                e.preventDefault();
                first.focus();
            } else if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        const bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = bodyOverflow;
            // hand focus back to whatever opened the dialog (the thumbnail), if it is still on the page
            // preventScroll: a half-visible opener would otherwise jump the page on close
            if (opener?.isConnected) opener.focus({ preventScroll: true });
        };
    }, [isOpen]);

    if(!isOpen) return null;

    // portal to <body>: inside a card, the card's hover transform would make position: fixed relative to the
    // card, so the dialog was clipped by it, and on touch it flickered between card-sized and full-screen
    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div
                ref={dialogRef}
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-label={label}
                onClick={e => e.stopPropagation()}
            >
                <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
