import { useState } from "react";
import ThumbnailCarousel from "./ThumbnailCarousel.jsx";

const ImageCarousel = ({ images, startIndex = 0 }) => {
    const [index, setIndex] = useState(startIndex);

    return (
        <div>
            <img
                src={images[index]}
                className="big-preview"
            />

            <ThumbnailCarousel
                images={images}
                onSelect={setIndex}
            />
        </div>
    );
};


export default ImageCarousel;
