import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
import ProjectLinks from "./ProjectLinks.jsx";

const ProjectCard = ({ project }) => {
    const { id, title, type, role, description, images, links } = project;
    const [open, setOpen] = useState(false);
    // the card shows the first paragraph; the details page has the rest
    const summary = description.split("\n")[0];

    return (
        <article className="project-card">
            {images.length ? (
                <button
                    type="button"
                    className="card-media"
                    aria-label={`View ${title} screenshots`}
                    onClick={() => setOpen(true)}
                >
                    <img src={images[0]} alt="" loading="lazy" />
                    <span className="card-media-hint" aria-hidden="true">{images.length} {images.length === 1 ? "screenshot" : "screenshots"}</span>
                </button>
            ) : (
                <div className="card-media card-media-empty" aria-hidden="true">screenshots coming soon</div>
            )}

            <div className="card-body">
                <span className="type-tag">{type}</span>
                <div>
                    <h3 className="card-title">
                        <Link to={`/project/${id}`}>{title}</Link>
                    </h3>
                    <p className="card-role">{role}</p>
                </div>
                <p className="card-summary">{summary}</p>
                <ProjectLinks links={links} />
                <Link to={`/project/${id}`} className="card-cta" aria-hidden="true" tabIndex={-1}>
                    view project →
                </Link>
            </div>

            <Modal isOpen={open} onClose={() => setOpen(false)} label={`${title} images`}>
                <ImageCarousel images={images} title={title} />
                <Link to={`/project/${id}`} className="btn btn-primary view-full-btn">
                    View full project →
                </Link>
            </Modal>
        </article>
    );
};

export default ProjectCard;
