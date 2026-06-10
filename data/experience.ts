import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "exp-hexagon",
    company: "Hexagon Studio",
    role: "Frontend Engineer",
    dateRange: "Mar 2022 — Mar 2026",
    location: "Remote",
    achievements: [
      "Developed the web game client for Honeyland using Phaser and React, ensuring a highly responsive and smooth web gameplay experience.",
      "Built Hivemind (Ecosystem Explorer) using Next.js and GraphQL; engineered a custom data-table grid that improved rendering and reduced page loading time by 35% when browsing massive sets of NFT data.",
      "Integrated dynamic Rive and Spine animations across multiple projects, including a fluctuating HXD treasury tank that updated visually based on real-time asset balances.",
      "Built a central Admin Panel to manage the entire game ecosystem — user profiles, in-game rewards, transaction history, and system-wide maintenance states.",
      "Developed the frontend for LastMint, maintaining strict real-time sync with the blockchain backend to display active bidding events instantly without latency.",
      "Engineered the Predict6 Telegram Mini App with a real-time Bitcoin price chart fetching data every 100ms over WebSockets, ensuring lag-free rendering and smooth transition animations.",
      "Built Tons of Dungeons, a Telegram-based grid game with distinct animated reactions for every grid interaction and tile event.",
    ],
  },
  {
    id: "exp-signal-lead",
    company: "Signal Group",
    role: "Frontend Team Lead",
    dateRange: "Mar 2020 — Feb 2022",
    location: "Qom, Iran",
    achievements: [
      "Led a team of 5+ frontend developers, managing task distributions, conducting code reviews, and maintaining a 95% on-time feature delivery rate.",
      "Architected a real-time IoT dashboard via WebSockets to monitor live streams of hardware units, optimizing rendering cycles to eliminate UI freezes under heavy data loads.",
      "Rewrote the core frontend of the enterprise SMS Panel (panel.signalads.com), improving Core Web Vitals and securing UI stability during high-traffic spikes.",
      "Engineered ViraTracker, a logistics tracking app using Mapbox/Leaflet to render live vehicle routes, temperature alerts, and instantaneous status logs.",
      "Introduced automated end-to-end testing with Cypress, cutting manual regression testing time for the QA department by 45%.",
      "Developed a multi-tenant Cafe Management Software featuring an integrated customer checkout process, dashboard analytics, and custom menu builders.",
    ],
  },
  {
    id: "exp-behandam",
    company: "BEHANDAM Group",
    role: "Frontend Developer",
    dateRange: "Sep 2020 — Feb 2021",
    location: "Qom, Iran · Contract",
    achievements: [
      "Developed dashboard interfaces for a health and wellness platform, focusing on rendering complex daily statistics graphs clearly.",
    ],
  },
  {
    id: "exp-didanist",
    company: "Didanist",
    role: "Frontend Developer",
    dateRange: "Mar 2020 — Aug 2020",
    location: "Remote · Contract",
    achievements: [
      "Developed an AI-powered visual search platform using Nuxt.js, where users uploaded images to find and compare identical products.",
      "Implemented e-commerce feature flows allowing users to purchase discovered items directly from third-party online stores.",
    ],
  },
  {
    id: "exp-signal-dev",
    company: "Signal Group",
    role: "Frontend Developer",
    dateRange: "Mar 2016 — Feb 2020",
    location: "Qom, Iran",
    achievements: [
      "Built responsive, lightweight corporate sites and digital marketing platforms (signalads.com) using Vue.js and Nuxt.js.",
      "Created a shared company-wide UI component library, reducing feature development setup times by 20%.",
    ],
  },
  {
    id: "exp-freelance",
    company: "Freelance",
    role: "Full Stack Developer",
    dateRange: "Jan 2012 — Feb 2016",
    location: "Qom, Iran",
    achievements: [
      "Built custom full-stack web platforms and CMS configurations for local businesses, establishing a strong foundation in core web standards.",
    ],
  },
];
