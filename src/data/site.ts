export const site = {
  name: "K-Tech Solutions",
  founder: "Tarfa Elijah KWEMBE",
  tagline: "Helping Businesses Build a Strong Digital Presence",
  phone: "+2348163387101",
  phoneDisplay: "+234 816 338 7101",
  whatsapp: "2348163387101",
  email: "kwembetarfaelijah@gmail.com",
  location: "Jos, Plateau State, Nigeria",
  socials: {
    github: "https://github.com/Kushy12345",
    linkedin: "https://www.linkedin.com/in/tarfa-elijah-kwembe/",
    x: "https://x.com/DrSLIM5",
  },
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/skills", label: "Skills" },
  { to: "/process", label: "Process" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  benefits: string[];
  idealFor: string;
  cta: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "websites",
    title: "Websites & Landing Pages",
    blurb:
      "Clean, responsive websites built from scratch — designed around what your customers actually need to do when they land on your page.",
    items: [
      "Website design",
      "Responsive websites",
      "Landing pages",
      "Portfolio websites",
      "Business websites",
      "Website redesign",
      "WordPress websites",
    ],
    benefits: [
      "Looks right on phones, tablets and desktops",
      "Fast-loading pages with sensible, readable structure",
      "Copy and layout organised around one clear action",
    ],
    idealFor: "Suitable for startups, small businesses and personal brands with no site yet, or one that feels dated.",
    cta: "Discuss your website",
  },
  {
    id: "development",
    title: "Web Development",
    blurb:
      "Hand-written frontend work in React and TypeScript, plus full stack features when a site needs to store data or talk to an API.",
    items: [
      "Frontend development",
      "Full stack development",
      "Web applications",
      "Website maintenance",
    ],
    benefits: [
      "Component-based code that is easy to extend later",
      "Forms, dashboards and simple app features",
      "Ongoing maintenance so nothing quietly breaks",
    ],
    idealFor: "Best for businesses that need more than brochure pages — bookings, enquiries, internal tools.",
    cta: "Talk through your idea",
  },
  {
    id: "marketing",
    title: "Digital Marketing & Branding",
    blurb:
      "The work that happens after launch: getting found, staying visible and keeping your brand consistent everywhere.",
    items: [
      "Basic SEO",
      "Digital marketing",
      "Social media management",
      "Branding support",
      "Canva designs",
      "Figma UI design",
    ],
    benefits: [
      "On-page SEO basics done properly from day one",
      "Consistent visuals across web and social",
      "Content and posting help if your team is stretched",
    ],
    idealFor: "Suitable for startups and small businesses building an audience from a standing start.",
    cta: "Plan your launch",
  },
  {
    id: "data",
    title: "Data, Visuals & Technical Support",
    blurb:
      "Practical technology help — reporting you can act on, aerial visuals for promotion, and someone to call when things break.",
    items: [
      "Excel dashboards",
      "Power BI dashboards",
      "Drone photography",
      "Technical support",
      "IT consulting",
      "Business technology advice",
    ],
    benefits: [
      "Reports that answer real business questions",
      "Aerial photography for property, events and promotion",
      "Straight advice on tools before you spend money",
    ],
    idealFor: "Useful for small teams without an in-house technical person.",
    cta: "Ask a technical question",
  },
];

export type SkillLevel = "Learning" | "Growing experience" | "Comfortable" | "Confident";

export const skillGroups: { title: string; skills: { name: string; level: SkillLevel }[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", level: "Confident" },
      { name: "CSS3", level: "Confident" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "TypeScript", level: "Growing experience" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Confident" },
      { name: "Bootstrap", level: "Comfortable" },
      { name: "Next.js", level: "Growing experience" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", level: "Growing experience" },
      { name: "Express", level: "Growing experience" },
      { name: "MongoDB", level: "Learning" },
      { name: "SQL", level: "Growing experience" },
    ],
  },
  {
    title: "Tools & Other Skills",
    skills: [
      { name: "Git & GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Confident" },
      { name: "Figma", level: "Comfortable" },
      { name: "Canva", level: "Confident" },
      { name: "WordPress", level: "Comfortable" },
      { name: "Power BI", level: "Growing experience" },
      { name: "Excel", level: "Confident" },
      { name: "Digital marketing", level: "Comfortable" },
      { name: "Drone photography", level: "Comfortable" },
    ],
  },
];

export const levelWidth: Record<SkillLevel, string> = {
  Learning: "35%",
  "Growing experience": "55%",
  Comfortable: "75%",
  Confident: "90%",
};

export const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Bootstrap",
  "Tailwind",
  "WordPress",
  "Power BI",
  "Excel",
  "Canva",
  "Figma",
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  overview: string;
  problem: string;
  tech: string[];
  challenge: string;
  learned: string;
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "k-tech-website",
    title: "K-Tech Solutions Website",
    kind: "Personal brand site",
    overview:
      "The site you are reading now — my own brand, portfolio and enquiry funnel, designed and built end to end.",
    problem:
      "I needed one honest place to show what I can do, so potential clients could judge my work instead of taking my word for it.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    challenge:
      "Making a dark, gold-accented design stay readable and accessible, while keeping animation subtle enough not to hurt performance.",
    learned:
      "Design systems pay off. Once colours, spacing and card styles lived in one place, building new pages took minutes instead of hours.",
    github: site.socials.github,
    demo: "/",
  },
  {
    slug: "training-inquiry-desk",
    title: "Training Inquiry Desk",
    kind: "Enquiry & intake tool",
    overview:
      "A simple intake page for capturing training enquiries — structured fields instead of scattered WhatsApp messages.",
    problem:
      "Enquiries arrived in several places with details missing, so following up meant asking the same questions twice.",
    tech: ["HTML", "CSS", "JavaScript", "Forms & validation"],
    challenge:
      "Keeping the form short enough that people finish it, while still collecting everything needed to reply usefully.",
    learned:
      "Validation and clear error messages are part of the design, not an afterthought. Good forms are mostly good copywriting.",
    github: site.socials.github,
  },
  {
    slug: "landing-pages",
    title: "Landing Page Collection",
    kind: "Practice landing pages",
    overview:
      "A set of single-purpose landing pages built to practise conversion layout: one message, one action, no clutter.",
    problem:
      "Small businesses often send ad traffic to a homepage that asks visitors to do ten things at once.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    challenge:
      "Resisting the urge to add sections. Every block had to justify itself against the single goal of the page.",
    learned:
      "Hierarchy beats decoration. Strong headline, honest proof, one button — that structure works across industries.",
    github: site.socials.github,
  },
  {
    slug: "practice-business-websites",
    title: "Practice Business Websites",
    kind: "Self-directed practice builds",
    overview:
      "Multi-page business sites I built for practice, covering services, about, gallery and contact patterns from scratch.",
    problem:
      "I wanted to rehearse real client scenarios — content that keeps changing, and pages that must stay consistent.",
    tech: ["React", "Tailwind CSS", "WordPress", "Responsive layout"],
    challenge:
      "Building reusable components and content structures instead of copy-pasting markup between pages.",
    learned:
      "Planning content before layout saves rework, and reusable components make late changes cheap.",
    github: site.socials.github,
  },
];

export const journey = [
  {
    period: "The start",
    title: "Started learning web development",
    body: "Curiosity turned into evenings of HTML and CSS, then JavaScript. I stopped consuming tutorials and started rebuilding pages I admired.",
  },
  {
    period: "Training",
    title: "Completed professional training",
    body: "Formal training in web development, digital marketing and drone photography gave structure to what I had been teaching myself.",
  },
  {
    period: "First builds",
    title: "Built my first responsive website",
    body: "The first site that held together on a phone, a tablet and a laptop. That is where responsive design stopped being theory.",
  },
  {
    period: "Portfolio",
    title: "Created portfolio projects",
    body: "Landing pages, an enquiry desk and practice business sites — each one built to answer a real question, not to fill a grid.",
  },
  {
    period: "Now",
    title: "Learning full stack development",
    body: "Node.js, Express and databases, so I can build features that store and serve data rather than only front-end screens.",
  },
  {
    period: "Now",
    title: "Working with real clients",
    body: "Taking on small business projects, handling scope and feedback properly, and shipping work I am happy to put my name on.",
  },
  {
    period: "Next",
    title: "Growing K-Tech Solutions",
    body: "Building a dependable studio for small businesses in Jos and beyond — one well-finished project at a time.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Dedicated attention to every project",
    body: "I take on a small number of projects so yours is never sitting in a queue behind twenty others.",
  },
  {
    title: "Modern development practices",
    body: "Component-based code, version control, and a design system so the site stays maintainable after launch.",
  },
  {
    title: "Clear communication",
    body: "Plain language, honest timelines, and regular updates. You will always know what stage your project is at.",
  },
  {
    title: "Affordable, honest pricing",
    body: "Scoped to your budget, with the trade-offs explained up front instead of hidden in a surprise invoice.",
  },
  {
    title: "Clean code & responsive design",
    body: "Readable code and layouts tested across screen sizes, not just the one on my desk.",
  },
  {
    title: "SEO-conscious development",
    body: "Semantic HTML, proper metadata and fast pages built in from the start rather than bolted on later.",
  },
  {
    title: "Continuous improvement",
    body: "I am actively learning and every project makes the next one better. You benefit from that momentum.",
  },
  {
    title: "Ongoing support after launch",
    body: "Handover notes, a walkthrough, and someone to call when you need a change or something looks off.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    body: "A relaxed conversation about your business, your customers and what the site actually needs to achieve. No jargon, no pressure.",
    output: "Shared understanding of goals",
  },
  {
    step: "02",
    title: "Scope & quote",
    body: "I write down the pages, features and timeline, then quote against it. If something is outside budget, I say so and suggest a phase two.",
    output: "Written scope and fixed quote",
  },
  {
    step: "03",
    title: "Content & structure",
    body: "We gather text, images and logos, then agree the page structure before any design work begins. This is the step that saves the most time.",
    output: "Sitemap and content checklist",
  },
  {
    step: "04",
    title: "Design",
    body: "Layouts in Figma covering desktop and mobile, using your brand colours and type. You review and comment before a line of code is written.",
    output: "Approved design direction",
  },
  {
    step: "05",
    title: "Build",
    body: "Clean, component-based development with responsive behaviour, accessible markup and on-page SEO handled as I go.",
    output: "Working site on a preview link",
  },
  {
    step: "06",
    title: "Review & testing",
    body: "We check it together on real devices. I test forms, links, contrast, keyboard navigation and loading speed, then fix what needs fixing.",
    output: "Tested, corrected build",
  },
  {
    step: "07",
    title: "Launch",
    body: "Domain, hosting and analytics set up properly, plus a short walkthrough so you know how to update your own content.",
    output: "Live site and handover notes",
  },
  {
    step: "08",
    title: "Support & improve",
    body: "Post-launch support for changes and small additions, and honest suggestions about what to improve next.",
    output: "Ongoing partnership",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "my-journey-into-web-development",
    title: "My Journey into Web Development",
    excerpt:
      "How curiosity about how websites work turned into professional training, real projects and a small technology brand.",
    category: "Personal",
    readingTime: "5 min read",
    date: "2026-06-14",
    body: [
      "I did not start with a grand plan. I started with a question: how does a website actually get onto a screen? That question cost me a lot of late nights, and I would spend them again.",
      "The first few weeks were HTML and CSS, and everything I built looked slightly broken. Then something clicked — I stopped copying tutorials line by line and started rebuilding pages I admired, guessing at the structure first and checking myself afterwards.",
      "Formal training gave that habit a backbone. Web development, digital marketing and drone photography, all in a period where I was already building small things for practice. Training answered the questions I did not know to ask.",
      "What I have learned is that consistency beats intensity. A focused hour every day teaches you more than a frantic weekend. And shipping something imperfect teaches you more than planning something perfect.",
      "K-Tech Solutions grew out of that. Not an agency, not a team of twenty — one developer who cares about finishing things properly and is honest about where he is on the road.",
    ],
  },
  {
    slug: "how-every-business-can-benefit-from-a-website",
    title: "How Every Business Can Benefit from a Website",
    excerpt:
      "Social media rents you an audience. A website is the one piece of your online presence you actually own.",
    category: "Business",
    readingTime: "6 min read",
    date: "2026-05-30",
    body: [
      "Plenty of businesses run entirely on WhatsApp and Instagram, and they do fine. But there is a ceiling, and it usually shows up as the same three questions being answered fifty times a week.",
      "A website does the repetitive work for you. Opening hours, pricing bands, location, what you actually sell, how to book — all answered before anyone messages you.",
      "It also settles trust. When someone gets your name from a friend, the first thing they do is search it. Finding a clear, working, well-written site changes the conversation before it begins.",
      "Then there is ownership. Algorithms change, accounts get restricted, platforms rise and fade. Your domain and your content stay yours.",
      "You do not need twenty pages. One honest page that loads fast, works on a phone and tells people how to reach you already outperforms most of what is online.",
    ],
  },
  {
    slug: "beginners-guide-to-digital-marketing",
    title: "A Beginner's Guide to Digital Marketing",
    excerpt:
      "The basics that matter for a small business, without the acronyms and without buying ads before you are ready.",
    category: "Marketing",
    readingTime: "7 min read",
    date: "2026-05-12",
    body: [
      "Digital marketing sounds like a large subject because it is described with large words. Underneath, it is three plain questions: who are you talking to, where do they already spend time, and what do you want them to do?",
      "Start with the destination, not the traffic. If your site or page cannot explain what you do in ten seconds, paid ads only buy you faster disappointment.",
      "Next, pick one or two channels and do them properly. A consistently updated single platform beats five neglected accounts every time.",
      "Measure something simple. Enquiries per month is a better metric than follower count, because it maps to money.",
      "Finally, be patient with search. Basic SEO — clear titles, useful headings, real content, fast pages — compounds quietly for months before it looks impressive.",
    ],
  },
  {
    slug: "why-responsive-design-matters",
    title: "Why Responsive Design Matters",
    excerpt:
      "Most of your visitors are on a phone with one hand busy. Design for that person first.",
    category: "Development",
    readingTime: "5 min read",
    date: "2026-04-27",
    body: [
      "Responsive design is not a feature you add at the end. It is a decision about who the layout serves first, and in most markets that is a mobile user on an imperfect connection.",
      "The failures are always the same: text too small to read, buttons too close together, tables that scroll sideways off the screen, images that push the layout out of shape.",
      "The fixes are unglamorous. Flexible widths instead of fixed ones. Tap targets big enough for a thumb. Content ordered so the important thing appears first on a narrow screen.",
      "Test on a real device, not just a browser window you dragged narrow. Battery, connection and touch behaviour all reveal problems the desktop hides.",
      "Done well, nobody notices responsive design. That is the point — the site simply works, whatever it is opened on.",
    ],
  },
  {
    slug: "power-bi-for-small-businesses",
    title: "Power BI for Small Businesses",
    excerpt:
      "You do not need a data team to see what is happening in your business. You need one honest dashboard.",
    category: "Data",
    readingTime: "6 min read",
    date: "2026-04-08",
    body: [
      "Most small businesses already have the data — in a spreadsheet, a sales book, or a payment app export. The problem is not collection, it is visibility.",
      "Power BI is useful because it connects to what you already have and turns it into something you can read in one glance. Sales this month against last. Best-selling items. Quiet days worth staffing differently.",
      "Start with three questions you would genuinely act on. A dashboard with three answers gets opened weekly; one with thirty charts gets opened once.",
      "Keep the data tidy. Consistent dates, consistent product names, no merged cells. Most reporting problems are really data-entry problems.",
      "If Power BI is too much for now, a well-built Excel dashboard covers a surprising amount of ground and costs nothing extra.",
    ],
  },
  {
    slug: "drone-photography-for-business-promotion",
    title: "Drone Photography for Business Promotion",
    excerpt:
      "Aerial footage makes property, events and venues look their best — and it makes your marketing hard to scroll past.",
    category: "Media",
    readingTime: "4 min read",
    date: "2026-03-21",
    body: [
      "An aerial shot gives context that ground-level photos cannot. Where a property sits, how big a venue is, how a crowd filled an event space.",
      "For property and hospitality especially, it answers the questions people actually have: what is around it, how do I get in, how much space is there?",
      "The practical work is mostly planning — light, weather, permissions and a shot list. Ten minutes of flying goes further when you know exactly what you need.",
      "Aerial images also last. One good session gives you material for your website, social posts, brochures and listings for a long time.",
      "Paired with a well-built website, strong visuals do a lot of the persuading before anyone reads a word.",
    ],
  },
  {
    slug: "preparing-for-my-first-client-projects",
    title: "Preparing for My First Client Projects",
    excerpt:
      "What I put in place before taking on paid work — scope, communication, and a process I can actually repeat.",
    category: "Personal",
    readingTime: "5 min read",
    date: "2026-03-02",
    body: [
      "Skill was only half of getting ready. The other half was process: how I scope work, how I quote it, how I keep a client informed without burying them in detail.",
      "I write scope down. Pages, features, revision rounds, timeline. Not to be rigid, but so both of us are talking about the same project a month in.",
      "I over-communicate early. A short update with a preview link beats silence followed by a big reveal that misses the mark.",
      "I built a checklist for launch — responsive checks, contrast, keyboard navigation, metadata, form testing, page speed. Checklists make quality repeatable instead of accidental.",
      "And I am honest about what I am still learning. Clients respond well to a developer who says 'I will find out and come back to you today' rather than bluffing.",
    ],
  },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages and whether you need features like bookings or a blog. A single well-built landing page sits at the affordable end; a multi-page business site with SEO setup costs more. I quote a fixed price after our first conversation, and I tell you honestly what can wait for a phase two if budget is tight.",
  },
  {
    q: "How long does a project take?",
    a: "A landing page is usually a few days once content is ready. A small business site typically runs one to three weeks. The biggest variable is content — text, images and logos. Projects that stall almost always stall there, so I help you get it together early.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes, and it is one of my favourite kinds of work. I review what you have, keep whatever is working, and rebuild the parts that are slow, dated or hard to use on a phone. Where possible I keep your existing URLs so you do not lose search visibility.",
  },
  {
    q: "Can you help after launch?",
    a: "Yes. Every project ends with a walkthrough and handover notes so you can update basic content yourself. Beyond that I offer ongoing maintenance — updates, small changes, fixes and check-ins — either as needed or on a simple monthly arrangement.",
  },
  {
    q: "Can you build mobile-friendly websites?",
    a: "Every site I build is responsive by default, designed for a phone first and then scaled up. I test on real devices and check tap targets, readability and loading speed before anything goes live.",
  },
  {
    q: "Do you offer digital marketing?",
    a: "I handle the practical basics: on-page SEO, Google Business setup, social media management and content design in Canva. For large paid advertising campaigns I will tell you plainly if a specialist is a better fit than me.",
  },
  {
    q: "What is your experience level?",
    a: "I completed professional training in web development, digital marketing and drone photography, and I am actively building projects and working with small businesses. I am early in my professional journey and open about it — what I offer is careful work, clear communication and full attention on your project.",
  },
  {
    q: "How do we get started?",
    a: "Send a message through the contact form, WhatsApp or email with a sentence or two about your business. We will have a short call, I will write up the scope and a quote, and you decide from there. No obligation and no sales pressure.",
  },
];
