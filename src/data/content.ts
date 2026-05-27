/**
 * Edit all placeholder copy here — pages import from this file.
 */

export const site = {
  name: "RCF KWASU",
  eventTitle: "Media Week",
  year: "2026",
  fullTitle: "RCF KWASU Media Week 2026",

  // UPDATED DATE RANGE
  date: "11th–14th June 2026",
  dateISO: "2026-06-11",

  location: "Redeemed Christian Fellowship, KWASU Main Campus",
  locationShort: "KWASU Campus",
  contactEmail: "mediaweek@rcfkwasu.org",
  contactPhone: "+234 800 000 0000",

  // THEME ADDITIONS
  theme: "AMPLIFY. 26’",
  tagline: "Projecting the Gospel to Nations through Digital Tools.",
  scripture: "Acts 1:8 — But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
  { href: "/testimonials", label: "Testimonials" },
];

export const hero = {
  eyebrow: "ON AIR · MEDIA WEEK 2026",
  headline: "Amplify the Gospel Through Media",
  subheadline:
    "AMPLIFY. 26’ — Projecting the Gospel to Nations through Digital Tools.",

  ctaPrimary: { label: "Register Now", href: "/register" },
  ctaSecondary: { label: "View Schedule", href: "/schedule" },

  stats: [
    { value: "4 Days", label: "Immersive Experience" },
    { value: "6+", label: "Media Tracks" },
    { value: "∞", label: "Kingdom Impact" },
  ],
};

export const homeSections = {
  mediaPillars: {
    title: "The Media Mandate",
    subtitle:
      "From the pulpit to the pixel - we steward every channel for Christ.",
    items: [
      {
        icon: "broadcast",
        title: "Broadcast & Audio",
        description:
          "Live sound engineering, podcasting, and worship broadcasting excellence.",
      },
      {
        icon: "camera",
        title: "Visual Storytelling",
        description:
          "Photography and videography that captures worship, revival, and testimony.",
      },
      {
        icon: "design",
        title: "Design & Branding",
        description:
          "Creative visuals, posters, and branding for gospel communication.",
      },
      {
        icon: "digital",
        title: "Digital Ministry",
        description:
          "Social media strategy, online evangelism, and content distribution.",
      },
      {
        icon: "visuals",
        title: "Videography & Editing",
        description:
          "Cinematic storytelling, editing, and motion graphics for ministry impact.",
      },
    ],
  },

  highlight: {
    title: "Why Media Week?",
    body:
      "Media Week 2026 is RCF KWASU's flagship creative gathering under the theme AMPLIFY. 26’ — where worship meets workflow and digital tools become vessels for the Gospel.",
    bullets: [
      "Hands-on workshops with industry-minded facilitators",
      "Team-building across sound, visuals, and communications",
      "Exposure to tools and workflows used in modern church media",
      "A renewed vision for media as ministry, not just maintenance",
    ],
  },

  cta: {
    title: "Ready to Go Live?",
    body:
      "Secure your spot for 11th–14th June 2026. Spaces are limited — come prepared to create and be equipped.",
    buttonLabel: "Register for Media Week",
    buttonHref: "/register",
  },
};

export const about = {
  title: "About Media Week",
  intro:
    "RCF KWASU Media Week is an annual convergence of creatives, technicians, and ministers who believe the Gospel deserves world-class presentation.",

  mission: {
    title: "Our Mission",
    text:
      "To raise a generation of media ministers who combine technical skill, creative excellence, and spiritual depth for global impact.",
  },

  vision: {
    title: "Our Vision",
    text:
      "A campus fellowship where media becomes a frontline ministry supporting revival, discipleship, and global evangelism.",
  },

  values: [
    {
      title: "Excellence",
      description: "We pursue quality because we serve a King who deserves it.",
    },
    {
      title: "Integrity",
      description: "Truthful storytelling and ethical media practice.",
    },
    {
      title: "Unity",
      description: "One crew working as one body across all media units.",
    },
    {
      title: "Anointing",
      description: "Technology powered by the Holy Spirit for lasting impact.",
    },
  ],

  teamNote:
    "Edit this section to introduce your Media Team leads, pastors, and guest facilitators.",
};

export const schedule = {
  title: "Event Schedule",

  subtitle:
    "11th–14th June 2026 · AMPLIFY. 26’ — Projecting the Gospel to Nations through Digital Tools.",

  tracks: [
    {
      time: "Day 1 - 08:00 AM",
      title: "Registration & Commissioning",
      location: "Main Auditorium Lobby",
      type: "General",
      description:
        "Opening registration, orientation, and spiritual commissioning.",
    },
    {
      time: "Day 1 - 09:00 AM",
      title: "Opening Session: The Gospel in High Definition",
      location: "Main Auditorium",
      type: "Plenary",
      description:
        "Worship, vision casting, and introduction to AMPLIFY. 26’",
    },
    {
      time: "Day 1 - 10:30 AM",
      title: "Workshop: Sound Engineering for Worship",
      location: "Media Room A",
      type: "Workshop",
      description:
        "Live mixing, audio clarity, and worship sound reinforcement.",
    },
    {
      time: "Day 2 - 10:30 AM",
      title: "Workshop: Photography & Visual Storytelling",
      location: "Media Room B",
      type: "Workshop",
      description:
        "Capturing worship moments, lighting, and creative composition.",
    },
    {
      time: "Day 2 - 02:00 PM",
      title: "Panel: Media as Ministry",
      location: "Main Auditorium",
      type: "Panel",
      description:
        "Understanding calling, consistency, and excellence in media service.",
    },
    {
      time: "Day 3 - 03:30 PM",
      title: "Live Production Challenge",
      location: "Main Auditorium",
      type: "Experience",
      description:
        "Hands-on live service production with full media team setup.",
    },
    {
      time: "Day 4 - 05:00 PM",
      title: "Closing & Commissioning",
      location: "Main Auditorium",
      type: "Plenary",
      description:
        "Final commissioning, awards, and release into ministry impact.",
    },
  ],
};

export const register = {
  title: "Register for Media Week",
  subtitle:
    "Fill in your details below — connect this to a backend or form service when ready.",

  departments: [
    "Web Development",
    "Photography/Editing",
    "Videography/Editing",
    "Graphics/Design",
    "Social Media Management/Communications",
    "Copy writing",
  ],

  successMessage:
    "Thank you! You are registered for AMPLIFY. 26’ — Media Week 2026.",
};

export const testimonials = {
  title: "Stories from the Crew",
  subtitle:
    "Real experiences from past Media Week participants.",

  items: [
    {
      quote:
        "Media Week helped me see media as ministry, not just technical work.",
      name: "Sarah A.",
      role: "Photography Team · 2024",
      rating: 5,
    },
    {
      quote:
        "We applied what we learned immediately in our fellowship livestreams.",
      name: "David O.",
      role: "Live Stream Volunteer · 2024",
      rating: 5,
    },
    {
      quote:
        "My design skills finally found kingdom purpose and direction.",
      name: "Grace E.",
      role: "Design Lead · 2023",
      rating: 5,
    },
    {
      quote:
        "Hands-on training made me confident in sound engineering.",
      name: "Michael T.",
      role: "Audio Trainee · 2024",
      rating: 5,
    },
    {
      quote:
        "Our online reach grew after applying Media Week strategies.",
      name: "Blessing K.",
      role: "Comms Coordinator · 2023",
      rating: 5,
    },
    {
      quote:
        "It felt like a professional studio powered by faith and excellence.",
      name: "Emmanuel R.",
      role: "Video Editor · 2024",
      rating: 5,
    },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} RCF KWASU Media Team. All rights reserved.`,

  verse:
    "Acts 1:8 — You shall receive power… and you shall be witnesses unto the uttermost part of the earth.",
};

export const visuals = {
  hero: {
    main:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1800&auto=format&fit=crop",
    alt: "Church media production and worship atmosphere",
  },

  gallery: [
    {
      src:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      label: "Live Worship Production",
      span: "col-span-2 row-span-2",
    },
    {
      src:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      label: "Studio Sound Engineering",
      span: "col-span-1 row-span-1",
    },
    {
      src:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
      label: "Creative Team Collaboration",
      span: "col-span-1 row-span-1",
    },
    {
      src:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      label: "Digital Media Operations",
      span: "col-span-1 row-span-2",
    },
    {
      src:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
      label: "Videography Production",
      span: "col-span-2 row-span-1",
    },
  ],

  marquee: [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
  ],

  about:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop",

  schedule:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1800&auto=format&fit=crop",

  register:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop",

  testimonials:
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1800&auto=format&fit=crop",

  pillars: {
    broadcast:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    camera:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    design:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    digital:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    visuals:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
};

export const experienceMoments = [
  { title: "Worship & Word", desc: "Spirit-filled opening", icon: "✦" },
  { title: "Live Workshops", desc: "Hands-on skill building", icon: "◎" },
  { title: "Studio Challenge", desc: "Mock service production", icon: "▶" },
  { title: "Network & Pray", desc: "Connect with the crew", icon: "♡" },
];