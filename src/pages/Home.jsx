import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import About from "../components/About.jsx";

const Home = () => {
    const { hash } = useLocation();

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
                    and web apps in React. Here are a few of my projects, commercial and hobby, including
                    the early frontend of a recipe finder app I designed.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View projects</a>
                    <a href="mailto:afenn.dev@gmail.com" className="btn btn-ghost">Get in touch</a>
                </div>
            </section>

            <section id="projects" className="section container" aria-labelledby="projects-heading">
                <h2 id="projects-heading" className="section-title">projects</h2>
                <div className="project-grid">
                    {Object.values(projects).map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <About />
        </>
    )
}

export default Home
