import Footer from "../components/Footer.jsx";
import {projects} from "../data/projects.js";
import ProjectSummary from "../components/ProjectSummmary.jsx";

const Home = () => {
    return (
        <div>
            <Footer />
            <div className={"title-content"}>
                <h1 className={"line-break"}>Andrew Fenn</h1>
                <h2 className={"line-break"}>Software Engineer, Interactivity Creator, XR Enthusiast</h2>
                <p>Hello, and thanks for stopping by. I built this site as a portfolio and
                    to show what a good web experience can be.
                    Here is some info and links to a few projects I have worked on.
                    Alongside commercial and hobby work is the early frontend
                    of a recipe finder app that I designed.
                </p>
                <h2 className={"line-break"}>Some cool stuff that I have done</h2>

                <div>
                    <ProjectSummary
                        id = {projects.asdvr.id}
                        title = {projects.asdvr.title}
                        description = {projects.asdvr.description}
                        images = {projects.asdvr.images}
                        links = {projects.asdvr.links}
                    />
                </div>
                <div>
                    <ProjectSummary
                        id = {projects.spacegame.id}
                        title = {projects.spacegame.title}
                        description = {projects.spacegame.description}
                        images = {projects.spacegame.images}
                        links = {projects.spacegame.links}
                    />
                </div>
                <div>
                    <ProjectSummary
                        id = {projects.recipeme.id}
                        title = {projects.recipeme.title}
                        description = {projects.recipeme.description}
                        images = {projects.recipeme.images}
                        links = {projects.recipeme.links}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home