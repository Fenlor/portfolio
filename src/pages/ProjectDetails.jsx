import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import ImageCarousel from "../components/ImageCarousel.jsx";
import ProjectLinks from "../components/ProjectLinks.jsx";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id?.toLowerCase()];

    if (!project) {
        return (
            <article className="project-details container">
                <title>Project not found | Andrew Fenn</title>
                <h1 className="page-title">Project not found</h1>
                <p>There is no project called "{id}".</p>
                <Link to="/" className="btn btn-primary">← Back to all projects</Link>
            </article>
        )
    }

    return (
        <article className="project-details container">
            {/* React 19 hoists this into <head> while the page is shown; it wins over index.html's title */}
            <title>{`${project.title} | Andrew Fenn`}</title>
            <Link to="/#projects" className="back-link">← all projects</Link>
            <h1 className="page-title">{project.title}</h1>
            {project.youtubeId && (
                <div className="video-embed">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                        title={`${project.title} video`}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            )}
            <p className="project-description">{project.description}</p>
            <ProjectLinks links={project.links} />
            <h2 className="section-title">screenshots</h2>
            <ImageCarousel key={project.id} images={project.images} title={project.title} />
        </article>
    )
}
export default ProjectDetails
