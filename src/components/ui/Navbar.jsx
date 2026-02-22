import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-inner">
                    <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
                        &lt;<span>Dev</span>/&gt;
                    </a>

                    <div className="navbar-links">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        className="navbar-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                        <span style={menuOpen ? { opacity: 0 } : {}} />
                        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}
