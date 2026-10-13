import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import ImageCarousel from "../components/ImageCarousel.jsx";
import Footer from "../components/Footer.jsx";
import ProjectLinks from "../components/ProjectLinks.jsx";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id?.toLowerCase()];

    if (!project) {
        return (
            <div className={"project-details"}>
                <title>Project not found | Andrew Fenn</title>
                <h1 className={"line-break"}>Project not found</h1>
                <p>There is no project called "{id}".</p>
                <Link to="/" className="view-full-btn">← Back to all projects</Link>
            </div>
        )
    }

    return (
        <div>
            <div className={"project-details"}>
                {/* React 19 hoists this into <head> while the page is shown; it wins over index.html's title */}
                <title>{`${project.title} | Andrew Fenn`}</title>
                <Link to="/" className="back-link">← All projects</Link>
                <h1 className={"line-break"}>{project.title}</h1>
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
                <ImageCarousel key={project.id} images={project.images} title={project.title} />
                <p className={"project-description"}>{project.description}</p>
                <ProjectLinks links={project.links} />
            </div>
            <Footer />
        </div>
    )
}
export default ProjectDetails
