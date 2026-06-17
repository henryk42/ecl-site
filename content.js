// ───────────────────────────────────────────────────────────────
//  ECL SITE CONTENT
//  This is the file you edit most. Change text here, `git push`,
//  and the live site updates. No WordPress pasting required.
// ───────────────────────────────────────────────────────────────

export const site = {
  name: "Emergent Commerce Lab",
  shortName: "ECL",
  affiliation: "Schulich School of Business · York University",

  // Top navigation — add/remove items here; each must have a matching
  // key in `pages` below (except external links).
  nav: [
    { id: "home",         label: "Home" },
    { id: "research",     label: "Research" },
    { id: "people",       label: "People" },
    { id: "publications", label: "Publications" },
    { id: "news",         label: "News" },
    { id: "contact",      label: "Contact" },
  ],

  pages: {
    home: {
      headline: "Studying how emerging technologies reshape commerce.",
      paragraphs: [
        "The Emergent Commerce Lab (ECL) at Schulich School of Business, York University investigates how emerging technologies are reshaping the way commerce, organizations, and markets work. Our research spans applied AI, blockchain and DLT, digital assets and tokenization, and payment systems.",
        "We work with students, industry partners, funders, and academic collaborators to produce research that organizations can put to use.",
      ],
      // Small highlight cards under the intro. Edit/remove freely.
      themes: [
        { title: "Applied AI", body: "AI systems applied to real commercial problems." },
        { title: "Blockchain & DLT", body: "Distributed ledgers, digital assets, tokenization." },
        { title: "Payment Systems", body: "How value moves, and the rails it moves on." },
      ],
    },

    research: {
      headline: "Research",
      paragraphs: [
        "Placeholder — tell Claude what to put here. A good structure is a short framing paragraph followed by a list of active projects or research streams.",
      ],
    },

    people: {
      headline: "People",
      paragraphs: [
        "Placeholder — add lab members here. Claude can turn a list of names, roles, and photos into a clean people grid.",
      ],
    },

    publications: {
      headline: "Publications",
      paragraphs: [
        "Placeholder — paste a list of citations and Claude will format them. These can also be loaded from a structured list so they're easy to keep current.",
      ],
    },

    news: {
      headline: "News",
      paragraphs: [
        "Placeholder — lab news, grants, talks, and events will appear here.",
      ],
    },

    contact: {
      headline: "Contact",
      paragraphs: [
        "Emergent Commerce Lab, Schulich School of Business, York University.",
        "Replace this with the real contact details, address, and any inquiry email.",
      ],
    },
  },

  footer: {
    text: "Emergent Commerce Lab · Schulich School of Business · York University",
  },
};
