const ProjectLinks = ({ links }) => {
    if (!links?.length) return null;

    return (
        <ul className="project-links">
            {links.map(link => (
                <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} ↗
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ProjectLinks;
