const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <span>© {new Date().getFullYear()} Andrew Fenn</span>
                <ul className="footer-links">
                    <li><a href="mailto:afenn.dev@gmail.com">afenn.dev@gmail.com</a></li>
                    <li><a href="https://github.com/Fenlor" target="_blank" rel="noopener noreferrer">github ↗</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
