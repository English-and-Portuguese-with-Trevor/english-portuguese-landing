import { useEffect, useState } from 'react'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <a className="nav-logo" href="#">
                English <em>&amp;</em> Portuguese With Trevor
            </a>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#english">English</a></li>
                <li><a href="#portuguese">Português</a></li>
            </ul>
        </nav>
    )
}