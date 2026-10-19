import { useEffect, useRef } from "react";

// controlled: the parent owns the selected index, so the arrows and thumbnails both change the large image
const ThumbnailCarousel = ({ images, title, index, onSelect }) => {
    const trackRef = useRef(null);
    const count = images.length;

    // the arrows wrap around at either end
    const next = () => onSelect((index + 1) % count);
    const prev = () => onSelect((index - 1 + count) % count);

    // keep the selected thumbnail in view; set scrollLeft directly so the page itself never scrolls
    useEffect(() => {
        const track = trackRef.current;
        const thumb = track?.children[index];
        if (!thumb) return;
        const left = thumb.offsetLeft - track.offsetLeft;
        if (left < track.scrollLeft) {
            track.scrollLeft = left;
        } else if (left + thumb.offsetWidth > track.scrollLeft + track.clientWidth) {
            track.scrollLeft = left + thumb.offsetWidth - track.clientWidth;
        }
    }, [index]);

    return (
        <div className="thumb-carousel">
            {count > 1 && (
                <button type="button" className="nav-btn" onClick={prev} aria-label="Previous image">‹</button>
            )}

            <div className="thumb-track" ref={trackRef}>
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        className="thumb-btn"
                        aria-label={`View ${title} screenshot ${i + 1} of ${count}`}
                        aria-pressed={i === index}
                        onClick={() => onSelect(i)}
                    >
                        <img
                            src={img}
                            alt=""
                            className={`thumb ${i === index ? "active" : ""}`}
                        />
                    </button>
                ))}
            </div>

            {count > 1 && (
                <button type="button" className="nav-btn" onClick={next} aria-label="Next image">›</button>
            )}
        </div>
    );
};

export default ThumbnailCarousel;
