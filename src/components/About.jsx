export default function About() {
    return(
        <section className="about" id="about">
            <div>
                <p className="about-label">What this page is for</p>
                <h2>
                    A home base for <em>both</em> sides of what I teach
                </h2>
                <p>
                    Welcome to your language hub. I teach English and Portuguese 
                    with a focus on clear progression. Whether we are tackling 
                    advanced concepts or refining your everyday conversational 
                    skills, this space is built to make your learning seamless. 
                    Every custom lesson, practice prompt and vocabulary guide 
                    you need branches out directly from here.
                </p>
                <p>
                    Below you'll find two sections - one for English, one for Português 
                    - each with quick links to the tools and resources for that language. 
                    Including a custom built flashcard app, reading and listening exercises
                    and more. 
                </p>
            </div>
            <div className="about-visual">
                <div className="bubble bubble-en">Hello!</div>
                <div className="bubble bubble-pt">Oi, tudo bem?</div>
            </div>
        </section>
    )
}