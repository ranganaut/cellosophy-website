// Generated from the Obsidian-compatible content vault by scripts/generate-content.mjs.
export type ContentValue = string | number | boolean;
export type ContentNote = { id: string; path: string; data: Record<string, ContentValue>; body: string; paragraphs: string[] };
export const contentNotes: ContentNote[] = [
  {
    "id": "about/better-ai",
    "path": "site/about/better-ai.md",
    "data": {
      "id": "about/better-ai",
      "type": "about-card",
      "publish": true,
      "number": 3,
      "heading": "Better artificial intelligence"
    },
    "body": "By learning how living systems adapt and solve problems without brains, we hope to imagine AI that is more flexible, resourceful, and responsive to its world.",
    "paragraphs": [
      "By learning how living systems adapt and solve problems without brains, we hope to imagine AI that is more flexible, resourceful, and responsive to its world."
    ]
  },
  {
    "id": "about/lives-of-cells",
    "path": "site/about/lives-of-cells.md",
    "data": {
      "id": "about/lives-of-cells",
      "type": "about-card",
      "publish": true,
      "number": 2,
      "heading": "The lives of cells"
    },
    "body": "Unicellular creatures are not merely machinery. They are active beings navigating uncertain worlds—and they may hold clues to the beginnings of mind and life.",
    "paragraphs": [
      "Unicellular creatures are not merely machinery. They are active beings navigating uncertain worlds—and they may hold clues to the beginnings of mind and life."
    ]
  },
  {
    "id": "about/origins-of-mind",
    "path": "site/about/origins-of-mind.md",
    "data": {
      "id": "about/origins-of-mind",
      "type": "about-card",
      "publish": true,
      "number": 1,
      "heading": "Origins of mind"
    },
    "body": "We want to understand how sensing, memory, choice, and agency could arise before brains and nervous systems.",
    "paragraphs": [
      "We want to understand how sensing, memory, choice, and agency could arise before brains and nervous systems."
    ]
  },
  {
    "id": "navigation/follow-or-join",
    "path": "site/navigation/follow-or-join.md",
    "data": {
      "id": "navigation/follow-or-join",
      "type": "navigation",
      "publish": true,
      "label": "Follow or join",
      "href": "#subscribe",
      "order": 4,
      "cta": true
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/vision",
    "path": "site/navigation/vision.md",
    "data": {
      "id": "navigation/vision",
      "type": "navigation",
      "publish": true,
      "label": "Vision",
      "href": "#vision",
      "order": 2
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/who-we-are",
    "path": "site/navigation/who-we-are.md",
    "data": {
      "id": "navigation/who-we-are",
      "type": "navigation",
      "publish": true,
      "label": "Who we are",
      "href": "#about",
      "order": 3
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/why-cellosophy",
    "path": "site/navigation/why-cellosophy.md",
    "data": {
      "id": "navigation/why-cellosophy",
      "type": "navigation",
      "publish": true,
      "label": "Why Cellosophy",
      "href": "#idea",
      "order": 1
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "organism/bacteria",
    "path": "organisms/bacteria.md",
    "data": {
      "id": "organism/bacteria",
      "type": "organism",
      "publish": true,
      "key": "bacteria",
      "name": "Bacteria",
      "kicker": "Sense",
      "label": "Bacteria",
      "order": 1
    },
    "body": "A bacterium can read chemical gradients and continually revise where it swims—without a neuron in sight.",
    "paragraphs": [
      "A bacterium can read chemical gradients and continually revise where it swims—without a neuron in sight."
    ]
  },
  {
    "id": "organism/physarum",
    "path": "organisms/physarum.md",
    "data": {
      "id": "organism/physarum",
      "type": "organism",
      "publish": true,
      "key": "physarum",
      "name": "Physarum",
      "kicker": "Remember",
      "label": "Physarum",
      "order": 3
    },
    "body": "A brainless slime mold can solve spatial problems and retain traces of where it has already been.",
    "paragraphs": [
      "A brainless slime mold can solve spatial problems and retain traces of where it has already been."
    ]
  },
  {
    "id": "organism/stentor-roeseli",
    "path": "organisms/stentor-roeseli.md",
    "data": {
      "id": "organism/stentor-roeseli",
      "type": "organism",
      "publish": true,
      "key": "stentor",
      "name": "Stentor roeseli",
      "kicker": "Choose",
      "label": "Stentor roeseli",
      "order": 2
    },
    "body": "This single cell tries different responses to irritation, changing tactics when the first one fails.",
    "paragraphs": [
      "This single cell tries different responses to irritation, changing tactics when the first one fails."
    ]
  },
  {
    "id": "README",
    "path": "README.md",
    "data": {
      "publish": false
    },
    "body": "# CELLosophy content vault\n\nThis folder is the editorial source for the CELLosophy website. Open `content/` as an Obsidian vault.\n\nThe site build reads published Markdown notes from this vault. Site layout, styling, and interaction remain in the application code outside this folder.\n\n## Publishing\n\nNotes are private by default. A note is published only when its frontmatter explicitly contains `publish: true`.\n\n```yaml\n---\npublish: true\n---\n```\n\nLeaving out `publish` has the same effect as `publish: false`.\n\nEdit the notes, commit the changes to GitHub, and the Cloudflare build will regenerate the site content.",
    "paragraphs": [
      "# CELLosophy content vault",
      "This folder is the editorial source for the CELLosophy website. Open `content/` as an Obsidian vault.",
      "The site build reads published Markdown notes from this vault. Site layout, styling, and interaction remain in the application code outside this folder.",
      "## Publishing",
      "Notes are private by default. A note is published only when its frontmatter explicitly contains `publish: true`.",
      "```yaml\n---\npublish: true\n---\n```",
      "Leaving out `publish` has the same effect as `publish: false`.",
      "Edit the notes, commit the changes to GitHub, and the Cloudflare build will regenerate the site content."
    ]
  },
  {
    "id": "site/about",
    "path": "site/about.md",
    "data": {
      "id": "site/about",
      "type": "section",
      "publish": true,
      "number": 3,
      "label": "Who we are",
      "heading": "Different disciplines. One pursuit."
    },
    "body": "CELLosophy brings together cognitive scientists, computer scientists, microbiologists, and mathematicians to think across the usual boundaries between life, mind, and intelligence.",
    "paragraphs": [
      "CELLosophy brings together cognitive scientists, computer scientists, microbiologists, and mathematicians to think across the usual boundaries between life, mind, and intelligence."
    ]
  },
  {
    "id": "site/footer",
    "path": "site/footer.md",
    "data": {
      "id": "site/footer",
      "type": "footer",
      "publish": true,
      "wordmark": "CELLosophy",
      "tagline": "Cognitive science · Computer science · Microbiology · Mathematics",
      "backLabel": "Back to the cell ↑"
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "site/header",
    "path": "site/header.md",
    "data": {
      "id": "site/header",
      "type": "site",
      "publish": true,
      "wordmark": "CELLosophy",
      "homeLabel": "CELLosophy home",
      "navigationLabel": "Main navigation"
    },
    "body": "The site header contains the wordmark and the primary navigation. Navigation items live in `site/navigation/` so they can be reordered independently.",
    "paragraphs": [
      "The site header contains the wordmark and the primary navigation. Navigation items live in `site/navigation/` so they can be reordered independently."
    ]
  },
  {
    "id": "site/hero",
    "path": "site/hero.md",
    "data": {
      "id": "site/hero",
      "type": "hero",
      "publish": true,
      "eyebrow": "An inquiry into microbial cognition",
      "headline": "Do minds really need brains?",
      "primaryLabel": "Why CELLosophy",
      "primaryHref": "#idea",
      "primaryArrow": "→",
      "secondaryLabel": "Follow or join",
      "secondaryHref": "#subscribe",
      "secondaryArrow": "↘",
      "manifesto": "Cells sense · choose · adapt",
      "context": "A collaboration among cognitive scientists, computer scientists, microbiologists, and mathematicians.",
      "imageAlt": "Hand-drawn bacteria, Stentor roeseli, and Physarum",
      "fieldLabel": "A field notebook of cellular intelligence"
    },
    "body": "We are exploring how living cells sense, decide, remember, and act - and what their intelligence might teach us about building better AI.",
    "paragraphs": [
      "We are exploring how living cells sense, decide, remember, and act - and what their intelligence might teach us about building better AI."
    ]
  },
  {
    "id": "site/metadata",
    "path": "site/metadata.md",
    "data": {
      "id": "site/metadata",
      "type": "metadata",
      "publish": true,
      "title": "Cellosophy",
      "description": "A cross-disciplinary inquiry into minds without brains—and what cellular intelligence can teach us about better AI.",
      "socialTitle": "Cellosophy — Minds Without Brains",
      "socialDescription": "A cross-disciplinary inquiry into minds without brains—and what cellular intelligence can teach us about better AI.",
      "socialAlt": "Cellosophy — Do minds really need brains?"
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "site/subscribe",
    "path": "site/subscribe.md",
    "data": {
      "id": "site/subscribe",
      "type": "section",
      "publish": true,
      "number": 4,
      "label": "Follow or join",
      "heading": "Come along for the inquiry.",
      "embedTitle": "Subscribe to Cellosophy on Substack",
      "embedNote": "Follow the journey. Join the conversation. Perhaps help shape what comes next."
    },
    "body": "Subscribe to our Substack for essays, observations, experiments, and conversations as CELLosophy takes shape. If these questions meet your own work, reply to a note and introduce yourself—we would be delighted to hear from potential collaborators.",
    "paragraphs": [
      "Subscribe to our Substack for essays, observations, experiments, and conversations as CELLosophy takes shape. If these questions meet your own work, reply to a note and introduce yourself—we would be delighted to hear from potential collaborators."
    ]
  },
  {
    "id": "site/vision",
    "path": "site/vision.md",
    "data": {
      "id": "site/vision",
      "type": "section",
      "publish": true,
      "number": 2,
      "label": "Vision",
      "heading": "The Essence of CELLosophy"
    },
    "body": "CELLosophy is an inquiry into cognition that begins with the living cell. Its central question - do you need a brain to have a mind?-opens a bottom-up investigation of how autonomous organisms sense, evaluate, remember, regulate, and act in changing environments.\n\nWe treat cognition broadly and carefully. Neither do we claim that bacteria think like humans, nor that every biological process is intelligent. Instead, we ask what kinds of problem-solving, agency, and meaning-making are already present in the basic work of staying alive.\n\nBacterial chemotaxis, especially in E. coli, offers a flagship example: receptors detect change, signaling networks integrate information, methylation provides a memory-like baseline, and flagellar motors turn valuation into movement.\n\nWe are exploring the connection between these concrete biochemical mechanisms and larger debates on basal cognition, enactivism, cybernetics, biosemiotics, and embodied intelligence. By its very nature, CELLosophy is both a research program and a public commons for curious minds; one that brings rigorous science, imaginative questions, and collaborative discovery together.",
    "paragraphs": [
      "CELLosophy is an inquiry into cognition that begins with the living cell. Its central question - do you need a brain to have a mind?-opens a bottom-up investigation of how autonomous organisms sense, evaluate, remember, regulate, and act in changing environments.",
      "We treat cognition broadly and carefully. Neither do we claim that bacteria think like humans, nor that every biological process is intelligent. Instead, we ask what kinds of problem-solving, agency, and meaning-making are already present in the basic work of staying alive.",
      "Bacterial chemotaxis, especially in E. coli, offers a flagship example: receptors detect change, signaling networks integrate information, methylation provides a memory-like baseline, and flagellar motors turn valuation into movement.",
      "We are exploring the connection between these concrete biochemical mechanisms and larger debates on basal cognition, enactivism, cybernetics, biosemiotics, and embodied intelligence. By its very nature, CELLosophy is both a research program and a public commons for curious minds; one that brings rigorous science, imaginative questions, and collaborative discovery together."
    ]
  },
  {
    "id": "site/why-cellosophy",
    "path": "site/why-cellosophy.md",
    "data": {
      "id": "site/why-cellosophy",
      "type": "section",
      "publish": true,
      "number": 1,
      "label": "Why Cellosophy",
      "heading": "Mind may not begin with the brain.",
      "quote": "“Not little humans in little cells—but life solving the problem of what to do next.”"
    },
    "body": "We tend to treat brains as the birthplace of perception, memory, and action. But living cells were sensing their surroundings, evaluating possibilities, and changing course eons before neurons appeared. Cellosophy asks whether these capacities are merely the machinery beneath mind, or its earliest forms.",
    "paragraphs": [
      "We tend to treat brains as the birthplace of perception, memory, and action. But living cells were sensing their surroundings, evaluating possibilities, and changing course eons before neurons appeared. Cellosophy asks whether these capacities are merely the machinery beneath mind, or its earliest forms."
    ]
  }
];
