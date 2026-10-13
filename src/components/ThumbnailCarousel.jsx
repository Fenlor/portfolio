import { useState } from "react";

const ThumbnailCarousel = ({ images, onSelect }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex(i => Math.min(i + 1, images.length - 1));
    const prev = () => setIndex(i => Math.max(i - 1, 0));

    return (
        <div className="thumb-carousel">
            <button className="nav-btn" onClick={prev}>‹</button>

            <div className="thumb-track">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className={`thumb ${i === index ? "active" : ""}`}
                        onClick={() => {
                            setIndex(i);
                            onSelect?.(i);
                        }}
                    />
                ))}
            </div>

            <button className="nav-btn" onClick={next}>›</button>
        </div>
    );
};

export default ThumbnailCarousel;
