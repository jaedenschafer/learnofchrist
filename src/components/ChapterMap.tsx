'use client';

import type { ChapterMap as ChapterMapData, MapPreset } from '@/data/study-chapters/types';
import './ChapterMap.css';

/**
 * Lightweight inline SVG map for narrative chapters. No GIS dependency,
 * no tile fetching — just a fixed silhouette plus markers in normalized
 * 0–1 coordinates. Five presets cover most of the Bible's geography:
 * holy-land, mediterranean (Roman world), sinai (Exodus), mesopotamia,
 * judea (tighter zoom).
 *
 * Coordinates are author-friendly: x increases left→right, y increases
 * top→bottom, so a place at (0.5, 0.5) sits in the middle of the frame.
 *
 * Renders below the chapter opener; intentionally small (≈300px tall)
 * so it doesn't crowd the page. Hover/tap a marker to surface its note
 * via the native title attribute.
 */
export default function ChapterMap({ map }: { map: ChapterMapData }) {
  const W = 600;
  const H = 320;
  const VB = `0 0 ${W} ${H}`;
  const px = (x: number) => x * W;
  const py = (y: number) => y * H;
  const Silhouette = SILHOUETTES[map.preset];

  // Build the route polyline if the author specified one.
  const routePoints =
    map.route && map.route.length >= 2
      ? map.route
          .map((i) => map.places[i])
          .filter(Boolean)
          .map((p) => `${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`)
          .join(' ')
      : null;

  return (
    <figure className="chapter-map" aria-label={map.caption || 'Map of the chapter'}>
      <svg
        className="chapter-map__svg"
        viewBox={VB}
        role="img"
        aria-hidden={!map.caption}
      >
        <defs>
          <linearGradient id="cm-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dde8f0" />
            <stop offset="1" stopColor="#c6d6e1" />
          </linearGradient>
          <pattern id="cm-grain" width="3" height="3" patternUnits="userSpaceOnUse">
            <rect width="3" height="3" fill="transparent" />
            <circle cx="1" cy="1" r="0.4" fill="rgba(120,98,60,0.05)" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#cm-sea)" />
        <rect width={W} height={H} fill="url(#cm-grain)" />
        <Silhouette />
        {routePoints && (
          <polyline
            className="chapter-map__route"
            points={routePoints}
            fill="none"
            stroke="rgba(140, 95, 50, 0.55)"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
        )}
        {map.places.map((p, i) => {
          const cx = px(p.x);
          const cy = py(p.y);
          const radius = p.kind === 'origin' ? 6.5 : p.kind === 'travel-to' ? 6 : 4.5;
          const fill =
            p.kind === 'origin'
              ? '#8c5f3a'
              : p.kind === 'travel-to'
                ? '#b08858'
                : '#5a4a36';
          return (
            <g key={`${p.name}-${i}`} className="chapter-map__marker">
              <title>{p.note ? `${p.name} — ${p.note}` : p.name}</title>
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill={fill}
                stroke="#fff"
                strokeWidth="1.4"
              />
              <text
                x={cx + radius + 5}
                y={cy + 4}
                className="chapter-map__label"
              >
                {p.name}
              </text>
            </g>
          );
        })}
      </svg>
      {map.caption && <figcaption className="chapter-map__caption">{map.caption}</figcaption>}
    </figure>
  );
}

/* ─── Silhouettes ───────────────────────────────────────────────────
 *  Hand-traced low-poly land masses. These aren't survey-accurate; they're
 *  shaped to read instantly as "the Holy Land" / "the Roman world" / etc.
 *  Coordinates are in viewBox space (0–600 × 0–320). */

const SILHOUETTES: Record<MapPreset, () => React.JSX.Element> = {
  'holy-land': () => (
    <g fill="#e8dec4" stroke="#a89060" strokeWidth="1">
      {/* Mediterranean coast on the left, Jordan rift down the middle. */}
      <path d="M 90,30 L 140,40 L 175,55 L 200,75 L 215,100 L 220,140 L 235,180 L 245,225 L 250,275 L 240,305 L 220,310 L 215,260 L 195,220 L 175,180 L 165,150 L 150,120 L 140,95 L 125,70 L 110,55 L 95,45 Z" />
      {/* Trans-Jordan plateau */}
      <path d="M 280,40 L 360,50 L 420,75 L 460,110 L 470,160 L 460,210 L 440,260 L 410,300 L 380,310 L 365,275 L 360,230 L 355,185 L 340,150 L 320,120 L 300,90 L 285,65 Z" />
      {/* Inner sea (Sea of Galilee) */}
      <ellipse cx="245" cy="125" rx="11" ry="14" fill="url(#cm-sea)" stroke="#7e9bb0" strokeWidth="0.7" />
      {/* Dead Sea */}
      <ellipse cx="240" cy="220" rx="10" ry="22" fill="url(#cm-sea)" stroke="#7e9bb0" strokeWidth="0.7" />
    </g>
  ),
  judea: () => (
    <g fill="#e8dec4" stroke="#a89060" strokeWidth="1">
      <path d="M 70,40 L 140,50 L 200,70 L 250,100 L 290,140 L 320,200 L 330,260 L 310,300 L 250,310 L 190,295 L 130,275 L 90,240 L 70,180 L 60,110 Z" />
      {/* Dead Sea — large */}
      <ellipse cx="380" cy="200" rx="20" ry="55" fill="url(#cm-sea)" stroke="#7e9bb0" strokeWidth="0.7" />
      {/* Mediterranean strip on the left */}
      <rect x="0" y="0" width="35" height={320} fill="url(#cm-sea)" />
    </g>
  ),
  sinai: () => (
    <g fill="#e8dec4" stroke="#a89060" strokeWidth="1">
      {/* Egypt on the left */}
      <path d="M 0,40 L 80,40 L 110,55 L 130,75 L 145,110 L 145,170 L 135,220 L 120,260 L 100,295 L 70,310 L 30,310 L 0,300 Z" />
      {/* Sinai peninsula triangle */}
      <path d="M 165,90 L 245,95 L 270,135 L 280,180 L 260,235 L 220,275 L 190,250 L 175,210 L 170,160 Z" />
      {/* Promised land far right */}
      <path d="M 305,55 L 380,55 L 440,75 L 480,110 L 500,155 L 500,210 L 480,250 L 440,275 L 390,275 L 355,250 L 330,210 L 315,160 L 308,110 Z" />
      {/* Red Sea (between Egypt and Sinai) */}
      <path
        d="M 145,170 L 168,170 L 175,210 L 175,260 L 145,255 Z"
        fill="url(#cm-sea)"
        stroke="#7e9bb0"
        strokeWidth="0.7"
      />
    </g>
  ),
  mediterranean: () => (
    <g fill="#e8dec4" stroke="#a89060" strokeWidth="1">
      {/* Italy boot */}
      <path d="M 175,90 L 195,90 L 210,120 L 220,165 L 235,210 L 240,240 L 220,250 L 200,235 L 195,205 L 188,170 L 178,135 Z" />
      {/* Sicily */}
      <path d="M 200,255 L 218,255 L 220,265 L 200,265 Z" />
      {/* North Africa strip */}
      <path d="M 70,260 L 360,260 L 400,275 L 380,310 L 80,310 Z" />
      {/* Greece + Aegean */}
      <path d="M 260,110 L 290,115 L 305,135 L 300,160 L 310,180 L 295,200 L 275,200 L 260,175 L 255,140 Z" />
      {/* Asia Minor (Turkey) */}
      <path d="M 320,90 L 460,95 L 510,115 L 525,140 L 510,175 L 470,185 L 420,180 L 370,170 L 330,150 L 320,120 Z" />
      {/* Levant */}
      <path d="M 510,170 L 540,180 L 555,210 L 550,255 L 540,290 L 525,295 L 515,265 L 510,225 Z" />
      {/* Iberia top-left */}
      <path d="M 0,140 L 70,140 L 95,160 L 95,210 L 70,225 L 25,225 L 0,205 Z" />
      {/* Crete */}
      <ellipse cx="345" cy="225" rx="20" ry="5" />
      {/* Cyprus */}
      <ellipse cx="500" cy="210" rx="14" ry="6" />
    </g>
  ),
  mesopotamia: () => (
    <g fill="#e8dec4" stroke="#a89060" strokeWidth="1">
      {/* The Fertile Crescent — broad arc from Levant to the Persian Gulf */}
      <path d="M 60,100 L 200,80 L 340,90 L 460,130 L 540,200 L 555,265 L 530,300 L 460,300 L 380,280 L 305,255 L 230,240 L 165,225 L 110,205 L 75,170 Z" />
      {/* Tigris */}
      <path
        d="M 220,100 Q 290,170 380,260"
        fill="none"
        stroke="#7e9bb0"
        strokeWidth="1.5"
      />
      {/* Euphrates */}
      <path
        d="M 100,130 Q 220,200 360,275"
        fill="none"
        stroke="#7e9bb0"
        strokeWidth="1.5"
      />
      {/* Persian Gulf */}
      <path
        d="M 460,290 L 540,280 L 555,300 L 555,318 L 470,318 Z"
        fill="url(#cm-sea)"
        stroke="#7e9bb0"
        strokeWidth="0.7"
      />
    </g>
  ),
};
