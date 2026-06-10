import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const themes = {
  honeyland: [
    { from: "#1a0a2e", to: "#3b0764", accent: "#fbbf24", label: "Gameplay" },
    { from: "#1a0a2e", to: "#4a044e", accent: "#f59e0b", label: "HUD" },
    { from: "#1a0a2e", to: "#312e81", accent: "#c084fc", label: "World" },
  ],
  hivemind: [
    { from: "#0f172a", to: "#1e3a5f", accent: "#38bdf8", label: "Explorer" },
    { from: "#0f172a", to: "#164e63", accent: "#22d3ee", label: "NFT Grid" },
    { from: "#0f172a", to: "#1e1b4b", accent: "#818cf8", label: "Details" },
  ],
  predict6: [
    { from: "#042f2e", to: "#134e4a", accent: "#f97316", label: "Chart" },
    { from: "#042f2e", to: "#1c1917", accent: "#fb923c", label: "Predict" },
    { from: "#042f2e", to: "#292524", accent: "#fbbf24", label: "Results" },
  ],
  lastmint: [
    { from: "#0c1222", to: "#1e293b", accent: "#a78bfa", label: "Auction" },
    { from: "#0c1222", to: "#334155", accent: "#c084fc", label: "Bidding" },
  ],
  "game-admin-panel": [
    { from: "#0f0f0f", to: "#262626", accent: "#22d3ee", label: "Dashboard" },
    { from: "#0f0f0f", to: "#1c1917", accent: "#38bdf8", label: "Users" },
  ],
  "tons-of-dungeons": [
    { from: "#1c1917", to: "#44403c", accent: "#ef4444", label: "Grid" },
    { from: "#1c1917", to: "#292524", accent: "#f59e0b", label: "Tiles" },
  ],
  "iot-dashboard": [
    { from: "#0f172a", to: "#1e3a5f", accent: "#4ade80", label: "Devices" },
    { from: "#0f172a", to: "#14532d", accent: "#22c55e", label: "Streams" },
  ],
  "sms-panel": [
    { from: "#0c1222", to: "#1e293b", accent: "#f472b6", label: "Campaigns" },
    { from: "#0c1222", to: "#334155", accent: "#fb7185", label: "Analytics" },
  ],
  viratracker: [
    { from: "#042f2e", to: "#134e4a", accent: "#2dd4bf", label: "Map" },
    { from: "#042f2e", to: "#1e3a2f", accent: "#34d399", label: "Fleet" },
  ],
  didanist: [
    { from: "#1a0a2e", to: "#3b0764", accent: "#e879f9", label: "Search" },
    { from: "#1a0a2e", to: "#4a044e", accent: "#c084fc", label: "Results" },
  ],
};

const titles = {
  honeyland: "Honeyland Web Game Client",
  hivemind: "Hivemind Ecosystem Explorer",
  predict6: "Predict6 Telegram Mini App",
  lastmint: "LastMint",
  "game-admin-panel": "Game Ecosystem Admin Panel",
  "tons-of-dungeons": "Tons of Dungeons",
  "iot-dashboard": "Real-time IoT Dashboard",
  "sms-panel": "Enterprise SMS Panel",
  viratracker: "ViraTracker",
  didanist: "Didanist Visual Search",
};

function buildSvg(theme, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.from}"/>
      <stop offset="100%" style="stop-color:${theme.to}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <circle cx="200" cy="150" r="120" fill="${theme.accent}" opacity="0.08" filter="url(#glow)"/>
  <circle cx="1000" cy="500" r="180" fill="${theme.accent}" opacity="0.06" filter="url(#glow)"/>
  <rect x="80" y="80" width="1040" height="515" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <rect x="120" y="140" width="320" height="200" rx="8" fill="rgba(255,255,255,0.05)"/>
  <rect x="460" y="140" width="600" height="90" rx="8" fill="rgba(255,255,255,0.04)"/>
  <rect x="460" y="250" width="280" height="200" rx="8" fill="rgba(255,255,255,0.04)"/>
  <rect x="760" y="250" width="300" height="200" rx="8" fill="rgba(255,255,255,0.04)"/>
  <rect x="120" y="360" width="320" height="90" rx="8" fill="${theme.accent}" opacity="0.15"/>
  <text x="120" y="115" fill="rgba(255,255,255,0.5)" font-family="system-ui,sans-serif" font-size="14" letter-spacing="2">${theme.label.toUpperCase()}</text>
  <text x="120" y="640" fill="rgba(255,255,255,0.7)" font-family="system-ui,sans-serif" font-size="22" font-weight="600">${title}</text>
</svg>`;
}

const outDir = join(process.cwd(), "public", "images", "projects");
mkdirSync(outDir, { recursive: true });

for (const [slug, items] of Object.entries(themes)) {
  items.forEach((theme, i) => {
    const filename = `${slug}-${i + 1}.svg`;
    writeFileSync(join(outDir, filename), buildSvg(theme, titles[slug]));
  });
}

console.log("Generated project placeholder images.");
