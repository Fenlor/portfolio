import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { projects, projectTypes } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import About from "../components/About.jsx";

const allProjects = Object.values(projects);
const countFor = type => type === "all" ? allProjects.length : allProjects.filter(p => p.type === type).length;

const Home = () => {
    const { hash } = useLocation();
    const [filter, setFilter] = useState("all");
    const shown = filter === "all" ? allProjects : allProjects.filter(p => p.type === filter);

    // header links are /#projects and /#about; scroll there after the page renders
    useEffect(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    }, [hash]);

    return (
        <>
            <section className="hero container">
                <p className="eyebrow">&gt; software engineer · interactivity creator · xr enthusiast</p>
                <h1 className="hero-title">Andrew Fenn</h1>
                <p className="hero-lead">
                    I build interactive experiences: VR applications for Meta Quest, games in Unity,
                    and web apps in React. Here are a few of my projects, commercial and hobby.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View projects</a>
                    <a href="mailto:afenn.dev@gmail.com" className="btn btn-ghost">Get in touch</a>
                </div>
            </section>

            <section id="projects" className="section container" aria-labelledby="projects-heading">
                <div className="projects-header">
                    <h2 id="projects-heading" className="section-title">projects</h2>
                    <div className="filter-buttons" role="group" aria-label="Filter projects by type">
                        {[{ id: "all", label: "all" }, ...projectTypes].map(t => (
                            <button
                                key={t.id}
                                type="button"
                                className="filter-btn"
                                aria-pressed={filter === t.id}
                                onClick={() => setFilter(t.id)}
                            >
                                {t.label}
                                <span className="filter-count">{countFor(t.id)}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="project-grid">
                    {shown.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <About />
        </>
    )
}

export default Home
