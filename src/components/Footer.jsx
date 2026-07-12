import { languages } from '../data/languages'

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div>
                    <div className="footer-brand">
                        English <em>&amp;</em> Portuguese With Trevor
                    </div>
                    <p>
                        English and Portuguese lessons, flashcards and resources — built
                        and taught by one person in two languages.
                    </p>
                </div>
                {languages.map((l) => (
                    <div className="footer-col" key={l.key}>
                        <h4>{l.navLabel}</h4>
                        <ul>
                            {l.links.slice(0, 3).map((link) => (
                                <li key={link.title}>
                                    <a href={link.href}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}