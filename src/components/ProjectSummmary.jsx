import { useState } from "react";
import Modal from "./Modal";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";
import ThumbnailCarousel from "./ThumbnailCarousel.jsx";
import ProjectLinks from "./ProjectLinks.jsx";

const ProjectSummary = ({id, title, description, images, links}) => {
    const [open, setOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const openAt = (i) => {
        setStartIndex(i);
        setOpen(true);
    };

    return (
        <>
            <div className="project-summary">
                <div className={"project-title"}>
                    <h3 className={"line-break"}>{title}</h3>
                </div>
                <div className="content">
                    <p>{description}</p>
                    <ProjectLinks links={links} />
                    <div className={"carousel"}>
                        <ThumbnailCarousel images={images} title={title} onSelect={openAt} />
                    </div>
                </div>
            </div>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <ImageCarousel images={images} title={title} startIndex={startIndex} />

                <Link to={`/project/${id}`} className="view-full-btn">
                    View full project →
                </Link>
            </Modal>
        </>
    );
}

export default ProjectSummary