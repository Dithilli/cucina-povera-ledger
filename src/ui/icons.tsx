// Small inlined icons — keeps the dependency tree at react + react-dom only.
// Each takes an optional size; stroke inherits currentColor.
import type { CSSProperties } from "react";

type P = { size?: number; style?: CSSProperties };
const base = (size: number): CSSProperties => ({ width: size, height: size, display: "block" });

const svg = (size: number, children: React.ReactNode, style?: CSSProperties) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ ...base(size), ...style }}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const Gear = ({ size = 18, style }: P) =>
  svg(
    size,
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>,
    style
  );

export const Check = ({ size = 16, style }: P) => svg(size, <path d="M20 6 9 17l-5-5" />, style);

export const Trash = ({ size = 14, style }: P) =>
  svg(
    size,
    <>
      <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    </>,
    style
  );

export const Pencil = ({ size = 14, style }: P) =>
  svg(size, <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />, style);

export const Flame = ({ size = 14, style }: P) =>
  svg(
    size,
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.4 0 2.5-1.1 2.5-2.5 0-1.2-.7-2-1.5-3 0 0-.5 1-1.5 1 .5-2-1.5-3.5-1.5-3.5C7 8 5.5 10 5.5 13a6.5 6.5 0 1 0 13 0c0-3-2-6-4.5-8 .5 3-1.5 4.5-3 5.5Z" />,
    style
  );

export const Plus = ({ size = 15, style }: P) => svg(size, <path d="M12 5v14M5 12h14" />, style);

export const Close = ({ size = 15, style }: P) => svg(size, <path d="M18 6 6 18M6 6l12 12" />, style);
