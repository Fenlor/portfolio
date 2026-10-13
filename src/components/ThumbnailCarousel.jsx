import { useState } from "react";

const ThumbnailCarousel = ({ images, title, onSelect }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex(i => Math.min(i + 1, images.length - 1));
    const prev = () => setIndex(i => Math.max(i - 1, 0));

    return (
        <div className="thumb-carousel">
            <button className="nav-btn" onClick={prev} aria-label="Previous image">‹</button>

            <div className="thumb-track">
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        className="thumb-btn"
                        aria-label={`View ${title} screenshot ${i + 1} of ${images.length}`}
                        aria-pressed={i === index}
                        onClick={() => {
                            setIndex(i);
                            onSelect?.(i);
                        }}
                    >
                        <img
                            src={img}
                            alt=""
                            className={`thumb ${i === index ? "active" : ""}`}
                        />
                    </button>
                ))}
            </div>

            <button className="nav-btn" onClick={next} aria-label="Next image">›</button>
        </div>
    );
};

export default ThumbnailCarousel;
