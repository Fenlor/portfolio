// DRAFT bio: written from what the site already says; edit it to your own voice
const BIO = [
    "I'm a software engineer who builds interactive experiences: VR applications for the Meta Quest " +
    "headsets, games in Unity and C#, and web apps in React.",
    "I like owning a project end to end. On the ASDVR application, built with a psychology PhD student, " +
    "I did the software design, interactions and code, sourced the assets, and made some of the " +
    "animation and the voice-over myself.",
];

// set to the CV's path once the PDF is in public/, e.g. "/Andrew_Fenn_CV.pdf"
const CV_URL = null;

const About = () => {
    return (
        <section id="about" className="section container" aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">about</h2>
            <div className="about">
                <img
                    src="/andrew.webp"
                    alt="Andrew Fenn"
                    className="about-photo"
                    width="240"
                    height="240"
                />
                <div className="about-text">
                    {BIO.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    <div className="about-actions">
                        <a href="mailto:afenn.dev@gmail.com" className="btn btn-primary">Email me</a>
                        <a href="https://github.com/Fenlor" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        {CV_URL && <a href={CV_URL} className="btn btn-ghost" download>Download CV</a>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
