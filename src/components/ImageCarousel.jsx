import { useState } from "react";
import ThumbnailCarousel from "./ThumbnailCarousel.jsx";

const ImageCarousel = ({ images, title, startIndex = 0 }) => {
    const [index, setIndex] = useState(startIndex);

    return (
        <div className="image-carousel">
            <img
                src={images[index]}
                alt={`${title} screenshot ${index + 1} of ${images.length}`}
                className="big-preview"
            />

            <ThumbnailCarousel
                images={images}
                title={title}
                onSelect={setIndex}
            />
        </div>
    );
};


export default ImageCarousel;
