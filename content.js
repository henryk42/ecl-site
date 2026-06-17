// ───────────────────────────────────────────────────────────────
//  ECL SITE CONTENT
//  This is the file you edit most. Change text here, `git push`,
//  and the live site updates. No WordPress pasting required.
//
//  Each key in `pages` matches a York menu item. The WordPress page
//  decides which one to show via  <div id="ecl-app" data-page="..."> .
//  Page keys → York menu:
//    home                  → Home
//    scientific-activities → Scientific Activities
//    people                → People
//    news                  → News
//    contact               → Contact Us
//
//  `headline` is OPTIONAL. Leave it off on inner pages so York's own
//  page title isn't duplicated; the Home page uses one as a hero line.
// ───────────────────────────────────────────────────────────────

export const site = {
  pages: {
    home: {
      headline: "Studying how emerging technologies reshape commerce.",
      paragraphs: [
        "The Emergent Commerce Lab (ECL) at Schulich School of Business, York University investigates how emerging technologies are reshaping the way commerce, organizations, and markets work. Our research spans applied AI, blockchain and DLT, digital assets and tokenization, and payment systems.",
        "We work with students, industry partners, funders, and academic collaborators to produce research that organizations can put to use.",
      ],
      themes: [
        { title: "Applied AI", body: "AI systems applied to real commercial problems." },
        { title: "Blockchain & DLT", body: "Distributed ledgers, digital assets, tokenization." },
        { title: "Payment Systems", body: "How value moves, and the rails it moves on." },
      ],
    },

    "scientific-activities": {
      paragraphs: [
        "Placeholder — tell Claude what to put here. A good structure is a short framing paragraph followed by a list of active projects, research streams, or events.",
      ],
    },

    people: {
      paragraphs: [
        "Placeholder — add lab members here. Send Claude a list of names, roles, and photos and it becomes a clean people grid.",
      ],
    },

    news: {
      paragraphs: [
        "Placeholder — lab news, grants, talks, and events will appear here.",
      ],
    },

    contact: {
      paragraphs: [
        "Emergent Commerce Lab, Schulich School of Business, York University.",
        "Replace this with the real contact details, address, and any inquiry email.",
      ],
    },
  },
};
