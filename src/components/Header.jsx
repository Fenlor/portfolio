import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header">
            <a href="#main" className="skip-link">Skip to content</a>
            <div className="container header-inner">
                <Link to="/" className="brand" aria-label="Andrew Fenn, home">
                    <span className="brand-mark" aria-hidden="true">AF</span>
                    <span className="brand-name">andrew_fenn</span>
                </Link>
                <nav aria-label="Main">
                    <ul className="nav-links">
                        <li><Link to="/#projects">projects</Link></li>
                        <li><Link to="/#about">about</Link></li>
                        <li><a href="mailto:afenn.dev@gmail.com">contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
