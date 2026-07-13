"use client";

import { useState } from "react";

const organisms = {
  bacteria: {
    name: "Bacteria",
    kicker: "Sense",
    fact: "A bacterium can read chemical gradients and continually revise where it swims—without a neuron in sight.",
  },
  stentor: {
    name: "Stentor roeseli",
    kicker: "Choose",
    fact: "This single cell tries different responses to irritation, changing tactics when the first one fails.",
  },
  physarum: {
    name: "Physarum",
    kicker: "Remember",
    fact: "A brainless slime mold can solve spatial problems and retain traces of where it has already been.",
  },
} as const;

type Organism = keyof typeof organisms;

export default function Home() {
  const [active, setActive] = useState<Organism>("stentor");

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cellosophy home">
          <img
            className="brand-logo"
            src="/cellosophy-logo.png"
            alt=""
            width="860"
            height="860"
          />
          <span className="wordmark-text"><strong>CELL</strong>osophy</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#idea">Why Cellosophy</a>
          <a href="#about">Who we are</a>
          <a className="nav-cta" href="#subscribe">Follow or join</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">An inquiry into minds without brains</p>
          <h1>Do minds really need brains?</h1>
          <p className="dek">
            Explore how living cells sense, decide, remember, and act—and what
            their intelligence might teach us about building better AI.
          </p>
          <p className="hero-context">A collaboration among cognitive scientists, computer scientists, microbiologists, and mathematicians.</p>
          <div className="hero-actions">
            <a className="button primary" href="#idea">Why CELLosophy <span>→</span></a>
            <a className="button secondary" href="#subscribe">Follow or join <span>↘</span></a>
          </div>
          <p className="micro-manifesto">Cells sense <i>·</i> choose <i>·</i> adapt</p>
        </div>

        <div className="hero-field" aria-label="A field notebook of cellular intelligence">
          <img src="/cellosophy-organisms.png" alt="Hand-drawn bacteria, Stentor roeseli, and Physarum" />
          <button className="specimen specimen-bacteria" onClick={() => setActive("bacteria")} aria-pressed={active === "bacteria"}>Bacteria</button>
          <button className="specimen specimen-stentor" onClick={() => setActive("stentor")} aria-pressed={active === "stentor"}>Stentor roeseli</button>
          <button className="specimen specimen-physarum" onClick={() => setActive("physarum")} aria-pressed={active === "physarum"}>Physarum</button>
          <aside className="fact-card" aria-live="polite">
            <span>{organisms[active].kicker}</span>
            <strong>{organisms[active].name}</strong>
            <p>{organisms[active].fact}</p>
          </aside>
          <p className="field-prompt">Choose a specimen ↑</p>
        </div>
      </section>

      <section className="idea-section" id="idea">
        <p className="section-number">01 / Why Cellosophy</p>
        <div>
          <h2>Mind may not begin with the brain.</h2>
          <p>
            We tend to treat brains as the birthplace of perception, memory,
            and action. But living cells were sensing their surroundings,
            evaluating possibilities, and changing course eons before neurons
            appeared. Cellosophy asks whether these capacities are merely the
            machinery beneath mind, or its earliest forms.
          </p>
        </div>
        <blockquote>“Not little humans in little cells—but life solving the problem of what to do next.”</blockquote>
      </section>

      <section className="notes-section" id="field-notes">
        <div className="notes-heading">
          <p className="section-number">02 / Field notes</p>
          <h2>Three ways cells make sense of their world</h2>
        </div>
        <div className="notes-grid">
          <article><span>Sense</span><h3>Notice what matters</h3><p>Cells distinguish nutrients from toxins, light from darkness, safety from danger, and self from other.</p></article>
          <article><span>Decide</span><h3>Choose what happens next</h3><p>Faced with competing signals, cells integrate information, change strategies, and commit to a course of action.</p></article>
          <article><span>Remember</span><h3>Let the past shape the future</h3><p>Through habituation and biological memory, earlier encounters alter how a cell responds the next time.</p></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading">
          <p className="section-number">03 / Who we are</p>
          <div>
            <h2>Different disciplines. One living question.</h2>
            <p className="about-intro">
              CELLosophy brings together cognitive scientists, computer
              scientists, microbiologists, and mathematicians to think across
              the usual boundaries between life, mind, and intelligence.
            </p>
          </div>
        </div>
        <div className="about-grid">
          <article>
            <span>01</span>
            <h3>Origins of mind</h3>
            <p>We want to understand how sensing, memory, choice, and agency could arise before brains and nervous systems.</p>
          </article>
          <article>
            <span>02</span>
            <h3>The lives of cells</h3>
            <p>Unicellular creatures are not merely machinery. They are active beings navigating uncertain worlds—and they may hold clues to the beginnings of mind and life.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Better artificial intelligence</h3>
            <p>By learning how living systems adapt and solve problems without brains, we hope to imagine AI that is more flexible, resourceful, and responsive to its world.</p>
          </article>
        </div>
      </section>

      <section className="subscribe-section" id="subscribe">
        <div>
          <p className="section-number">04 / Follow or join</p>
          <h2>Come along for the inquiry.</h2>
          <p>
            Subscribe to our Substack for essays, field notes, experiments,
            and conversations as CELLosophy takes shape. If these questions
            meet your own work, reply to a note and introduce yourself—we
            would be delighted to hear from potential collaborators.
          </p>
        </div>
        <div className="substack-signup">
          <iframe
            src="https://cellosophy.substack.com/embed"
            width="480"
            height="320"
            title="Subscribe to Cellosophy on Substack"
            frameBorder="0"
            scrolling="no"
          />
          <p>Follow the journey. Join the conversation. Perhaps help shape what comes next.</p>
        </div>
      </section>

      <footer><span>CELLosophy</span><p>Cognitive science · Computer science · Microbiology · Mathematics</p><a href="#top">Back to the cell ↑</a></footer>
    </main>
  );
}
