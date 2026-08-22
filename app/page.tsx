"use client";

import { useState } from "react";
import { getContentNote, getContentNotes, text } from "./content";

const header = getContentNote("site/header");
const hero = getContentNote("site/hero");
const idea = getContentNote("site/why-cellosophy");
const vision = getContentNote("site/vision");
const about = getContentNote("site/about");
const subscribe = getContentNote("site/subscribe");
const footer = getContentNote("site/footer");
const navItems = getContentNotes("navigation");
const organisms = getContentNotes("organism");
const aboutCards = getContentNotes("about-card");

export default function Home() {
  const [activeKey, setActiveKey] = useState("stentor");
  const activeOrganism = organisms.find((organism) => text(organism, "key") === activeKey) ?? organisms[0];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={text(header, "homeLabel")}>
          <img
            className="brand-logo"
            src="/cellosophy-logo.png"
            alt=""
            width="860"
            height="860"
          />
          <span className="wordmark-text"><strong>{text(header, "wordmark").slice(0, 4)}</strong>{text(header, "wordmark").slice(4)}</span>
        </a>
        <nav aria-label={text(header, "navigationLabel")}>
          {navItems.map((item) => (
            <a key={item.id} className={item.data.cta === true ? "nav-cta" : undefined} href={text(item, "href")}>
              {text(item, "label")}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{text(hero, "eyebrow")}</p>
          <h1>{text(hero, "headline")}</h1>
          <p className="dek">{hero.paragraphs[0]}</p>
          <p className="hero-context">{text(hero, "context")}</p>
          <div className="hero-actions">
            <a className="button primary" href={text(hero, "primaryHref")}>{text(hero, "primaryLabel")} <span>{text(hero, "primaryArrow")}</span></a>
            <a className="button secondary" href={text(hero, "secondaryHref")}>{text(hero, "secondaryLabel")} <span>{text(hero, "secondaryArrow")}</span></a>
          </div>
          <p className="micro-manifesto">{text(hero, "manifesto")}</p>
        </div>

        <div className="hero-field" aria-label={text(hero, "fieldLabel")}>
          <img src="/cellosophy-organisms.png" alt={text(hero, "imageAlt")} />
          {organisms.map((organism) => (
            <button
              key={organism.id}
              className={`specimen specimen-${text(organism, "key")}`}
              onClick={() => setActiveKey(text(organism, "key"))}
              aria-pressed={activeKey === text(organism, "key")}
            >
              {text(organism, "label")}
            </button>
          ))}
          <aside className="fact-card" aria-live="polite">
            <span>{text(activeOrganism, "kicker")}</span>
            <strong>{text(activeOrganism, "name")}</strong>
            <p>{activeOrganism.paragraphs[0]}</p>
          </aside>
          <p className="field-prompt">Choose a specimen ↑</p>
        </div>
      </section>

      <section className="idea-section" id="idea">
        <p className="section-number">{text(idea, "number").padStart(2, "0")} / {text(idea, "label")}</p>
        <div>
          <h2>{text(idea, "heading")}</h2>
          <p>{idea.paragraphs[0]}</p>
        </div>
        <blockquote>{text(idea, "quote")}</blockquote>
      </section>

      <section className="notes-section" id="vision">
        <div className="notes-heading">
          <p className="section-number">{text(vision, "number").padStart(2, "0")} / {text(vision, "label")}</p>
          <div>
            <h2>{text(vision, "heading")}</h2>
            <div className="essence-statement">
              {vision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading">
          <p className="section-number">{text(about, "number").padStart(2, "0")} / {text(about, "label")}</p>
          <div>
            <h2>{text(about, "heading")}</h2>
            <p className="about-intro">{about.paragraphs[0]}</p>
          </div>
        </div>
        <div className="about-grid">
          {aboutCards.map((card) => (
            <article key={card.id}>
              <span>{text(card, "number").padStart(2, "0")}</span>
              <h3>{text(card, "heading")}</h3>
              <p>{card.paragraphs[0]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="subscribe-section" id="subscribe">
        <div>
          <p className="section-number">{text(subscribe, "number").padStart(2, "0")} / {text(subscribe, "label")}</p>
          <h2>{text(subscribe, "heading")}</h2>
          <p>{subscribe.paragraphs[0]}</p>
        </div>
        <div className="substack-signup">
          <iframe
            src="https://cellosophy.substack.com/embed"
            width="480"
            height="320"
            title={text(subscribe, "embedTitle")}
            frameBorder="0"
            scrolling="no"
          />
          <p>{text(subscribe, "embedNote")}</p>
        </div>
      </section>

      <footer><span>{text(footer, "wordmark")}</span><p>{text(footer, "tagline")}</p><a href="#top">{text(footer, "backLabel")}</a></footer>
    </main>
  );
}
