import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "honeyland",
    title: "Honeyland",
    description:
      "A play-to-earn blockchain game on Solana where players own Bee and Land NFTs, complete missions, and earn rewards.",
    longDescription:
      "Honeyland is a blockchain game built on the Solana network where users purchase Bee and Land NFTs and engage in play-to-earn gameplay by completing missions to generate income. I developed the web game client using Phaser and React, integrating Spine and Rive animations for fluid character motion and UI interactions across the entire gameplay experience.",
    images: [
      "/images/projects/honeyland-1.jpg",
      "/images/projects/honeyland-2.jpg",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Phaser 3",
      "Spine 2D",
      "Rive",
      "Solana",
    ],
    role: "Frontend Engineer — web game client, animations, gameplay UI",
    features: [
      "Play-to-earn mission system with Bee and Land NFT ownership",
      "Phaser + React hybrid game architecture on Solana",
      "Spine skeletal animations for characters and creatures",
      "Rive animations for dynamic UI and treasury visualizations",
      "Smooth, responsive browser gameplay experience",
    ],
    featured: false,
  },
  {
    id: "hivemind",
    title: "Hivemind",
    description:
      "The strategic brain of Honeyland — an NFT explorer for browsing, comparing, trading, staking, and analyzing game data.",
    longDescription:
      "Hivemind is the ecosystem explorer and strategic core of the Honeyland universe. Users can browse NFT lists, compare and trade NFTs, view detailed NFT information, stake and unstake assets, and access statistics, charts, and analytics for game analysis. Built with Next.js and GraphQL, featuring Highcharts for data visualization and a custom data-table grid optimized for massive NFT datasets.",
    images: [
      "/images/projects/hive-mind-1.png",
      "/images/projects/hive-mind-2.png",
      "/images/projects/hive-mind-3.png",
      "/images/projects/hive-mind-4.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Highcharts",
    ],
    role: "Frontend Engineer — NFT explorer, data grid, analytics charts",
    features: [
      "NFT browsing, comparison, and trading interface",
      "Stake and unstake flows for in-game assets",
      "Statistics, metrics, and Highcharts analytics dashboards",
      "Custom data-table grid for large NFT dataset navigation",
      "Detailed NFT inspection and ecosystem analysis tools",
    ],
    featured: true,
  },
  {
    id: "hxd-staking",
    title: "HXD Staking",
    description:
      "A staking platform for the HXD in-game currency — stake tokens and earn rewards based on staking duration.",
    longDescription:
      "HXD Staking allows players to stake the Honeyland in-game digital currency (HXD) and receive rewards proportional to their staking duration. The interface features dynamic Spine animations, including a fluctuating treasury tank that updates visually based on real-time asset balances.",
    images: ["/images/projects/hxd-staking-1.png"],
    techStack: ["Next.js", "TypeScript", "Spine 2D"],
    role: "Frontend Engineer — staking UI, Spine animations",
    features: [
      "HXD token staking with duration-based reward calculation",
      "Dynamic Spine-animated treasury tank reflecting live balances",
      "Real-time reward tracking and staking status display",
    ],
    featured: false,
  },
  {
    id: "predict6",
    title: "Predict6",
    description:
      "A Telegram-based prediction game with weekly forecasts and a real-time Bitcoin price chart mode.",
    longDescription:
      "Predict6 is a guess-and-win game on Telegram where users earn prizes for correct predictions. It has two core modes: Weekly Prediction for long-term forecasts, and Instant Prediction featuring a real-time Bitcoin price chart powered by WebSocket data updates every 100ms, with smooth Highcharts rendering and Spine/Rive transition animations.",
    images: [
      "/images/projects/p6-1.png",
      "/images/projects/p6-2.png",
      "/images/projects/p6-3.png",
      "/images/projects/p6-4.png",
      "/images/projects/p6-5.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Telegram Mini Apps",
      "Spine 2D",
      "Rive",
      "Highcharts",
      "WebSockets",
    ],
    role: "Frontend Engineer — Telegram Mini App, real-time charting",
    features: [
      "Weekly prediction mode with prize rewards",
      "Instant Bitcoin price prediction on a live chart",
      "100ms WebSocket price feed with lag-free rendering",
      "Spine and Rive animations for mode transitions",
      "Telegram Mini App platform integration",
    ],
    featured: false,
  },
  {
    id: "tons-of-dungeons",
    title: "Tons of Dungeons",
    description:
      "A Telegram grid game where players find doors, advance through dungeons, and dodge bombs to earn rewards.",
    longDescription:
      "Tons of Dungeons is a grid-based game on Telegram where players navigate maps to find exit doors and progress to the next dungeon to earn points and prizes. The grid contains bombs, special rewards, and other tile events — each with distinct animated reactions programmed for every grid interaction.",
    images: [
      "/images/projects/tod-1.png",
      "/images/projects/tod-2.png",
      "/images/projects/tod-3.png",
      "/images/projects/tod-4.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Telegram Mini Apps",
      "WebSockets",
    ],
    role: "Frontend Engineer — grid game logic, tile animations",
    features: [
      "Grid navigation with door-finding and dungeon progression",
      "Hidden bombs, special rewards, and varied tile events",
      "Distinct animated reactions for every grid interaction",
      "Real-time game state sync via WebSockets",
      "Telegram Mini App integration",
    ],
    featured: false,
  },
  {
    id: "alobit",
    title: "Alobit",
    description:
      "A daily crypto investment system where users connect Stripe and schedule automatic Bitcoin or altcoin purchases.",
    longDescription:
      "Alobit is a daily investment platform built with Nuxt.js that lets users connect their account via Stripe and set up recurring automatic purchases of Bitcoin or any other supported cryptocurrency. Features real-time portfolio tracking with WebSocket updates and Highcharts visualizations for investment analytics.",
    images: [
      "/images/projects/alobit-1.png",
      "/images/projects/alobit-2.png",
      "/images/projects/alobit-3.png",
      "/images/projects/alobit-4.png",
      "/images/projects/alobit-5.png",
    ],
    techStack: [
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "WebSockets",
      "Highcharts",
      "Stripe",
    ],
    role: "Frontend Engineer — investment UI, payment flows, charts",
    features: [
      "Stripe-connected recurring crypto purchase scheduling",
      "Daily automatic Bitcoin and altcoin buying",
      "Real-time portfolio tracking via WebSockets",
      "Highcharts investment analytics and performance charts",
      "Online payment integration and transaction history",
    ],
    featured: true,
  },
  {
    id: "junkyard",
    title: "Junkyard",
    description:
      "Burn NFTs to earn tickets for a grid game competition where players win SOL prizes.",
    longDescription:
      "Junkyard is a Nuxt.js application where users burn their NFTs to receive tickets that grant entry into a grid-based game competition. Players compete on the grid for a chance to win SOL rewards, with real-time game state delivered over WebSockets.",
    images: [
      "/images/projects/junk-yard-1.png",
      "/images/projects/junk-yard-2.png",
      "/images/projects/junk-yard-3.png",
    ],
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "WebSockets", "Solana"],
    role: "Frontend Engineer — NFT burn flow, grid game UI",
    features: [
      "NFT burn mechanism converting assets to game tickets",
      "Grid-based competition for SOL prize rewards",
      "Real-time game state sync via WebSockets",
      "Ticket management and burn history tracking",
    ],
    featured: false,
  },
  {
    id: "lastmint",
    title: "LastMint",
    description:
      "An online bidding platform where the last person to mint in a timed collection wins the prize.",
    longDescription:
      "LastMint is an online minting competition built with Nuxt.js where users create collections and compete to be the last minter. Each collection has a countdown timer — if no one mints within the time window, the collection closes and the last minter is declared the winner. Strict real-time WebSocket sync ensures instant bidding and minting event display.",
    images: [
      "/images/projects/last-mint-1.png",
      "/images/projects/last-mint-2.png",
      "/images/projects/last-mint-3.png",
      "/images/projects/last-mint-4.png",
    ],
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "WebSockets", "Solana"],
    role: "Frontend Engineer — real-time minting UI, collection management",
    features: [
      "User-created minting collections with countdown timers",
      "Last-minter-wins competition mechanics",
      "Real-time bidding and minting events via WebSockets",
      "Collection lifecycle management and winner selection",
    ],
    featured: true,
  },
  {
    id: "didanist",
    title: "Didanist",
    description:
      "An AI-powered visual search platform — upload a photo to find products and buy from available stores.",
    longDescription:
      "Didanist is an AI-based image search system built with Nuxt.js where users upload photos to find matching products. Once a product is identified, users can purchase it directly from stores that have it in stock, with real-time search results and availability updates over WebSockets.",
    images: [
      "/images/projects/didanist-1.png",
      "/images/projects/didanist-2.png",
      "/images/projects/didanist-3.png",
      "/images/projects/didanist-4.png",
    ],
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "WebSockets"],
    role: "Frontend Developer — visual search UI, e-commerce flows",
    features: [
      "AI-powered image upload and product matching",
      "Product discovery with visual similarity search",
      "Direct purchase flows to third-party stores with stock",
      "Real-time search results via WebSockets",
    ],
    featured: false,
  },
  {
    id: "viratracker",
    title: "ViraTracker",
    description:
      "A cargo tracking app — enter a tracking code to view route details, temperature, humidity, and shipment status.",
    longDescription:
      "ViraTracker is a logistics tracking application built with Nuxt.js for cargo shipments. Users install a hardware device inside their cargo container and track shipments by entering a tracking code. The interface displays route details on a Leaflet map, showing temperature, humidity, and cargo condition metrics at each checkpoint in real time via WebSockets.",
    images: [
      "/images/projects/vira-tracker-1.png",
      "/images/projects/vira-tracker-2.png",
      "/images/projects/vira-tracker-3.png",
      "/images/projects/vira-tracker-4.png",
    ],
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "Leaflet", "WebSockets"],
    role: "Frontend Team Lead — map rendering, real-time tracking UI",
    features: [
      "Tracking code lookup for live shipment monitoring",
      "Leaflet map with route and checkpoint visualization",
      "Real-time temperature, humidity, and status per checkpoint",
      "Hardware device integration for in-cargo telemetry",
      "WebSocket-powered live data updates",
    ],
    featured: false,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
