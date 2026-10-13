import { useEffect, useRef } from "react";

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
            if (opener?.isConnected) opener.focus();
        };
    }, [isOpen]);

    if(!isOpen) return null;

    return(
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
        </div>
    );
};

export default Modal;
