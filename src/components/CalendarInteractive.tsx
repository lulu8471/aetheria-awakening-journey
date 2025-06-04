import React from "react";
import { MonthFest } from "../ContentData";
import "./CalendarInteractive.css";

interface CalendarInteractiveProps {
  months: MonthFest[];
  onSelect: (monthId: string) => void;
}

export default function CalendarInteractive({ months, onSelect }: CalendarInteractiveProps) {
  const centerX = 300;
  const centerY = 300;
  const radiusOuter = 250;
  const radiusInner = 150;

  const createSectorPath = (index: number, total: number): string => {
    const startAngle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((index + 1) / total) * 2 * Math.PI - Math.PI / 2;
    const x1 = centerX + radiusOuter * Math.cos(startAngle);
    const y1 = centerY + radiusOuter * Math.sin(startAngle);
    const x2 = centerX + radiusOuter * Math.cos(endAngle);
    const y2 = centerY + radiusOuter * Math.sin(endAngle);
    const x3 = centerX + radiusInner * Math.cos(endAngle);
    const y3 = centerY + radiusInner * Math.sin(endAngle);
    const x4 = centerX + radiusInner * Math.cos(startAngle);
    const y4 = centerY + radiusInner * Math.sin(startAngle);

    return `
      M ${x1} ${y1}
      A ${radiusOuter} ${radiusOuter} 0 0 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${radiusInner} ${radiusInner} 0 0 0 ${x4} ${y4}
      Z
    `;
  };

  return (
    <div className="calendar-interactive">
      <svg viewBox="0 0 600 600" className="calendar-svg">
        {months.map((month, idx) => (
          <path
            key={month.id}
            d={createSectorPath(idx, months.length)}
            className="calendar-sector"
            onClick={() => onSelect(month.id)}
            onMouseEnter={(e) => {
              (e.target as SVGPathElement).classList.add("sector-hovered");
            }}
            onMouseLeave={(e) => {
              (e.target as SVGPathElement).classList.remove("sector-hovered");
            }}
          />
        ))}
        <circle
          cx={centerX}
          cy={centerY}
          r={radiusInner - 20}
          fill="rgba(30, 30, 80, 0.8)"
      />
    </svg>
  </div>
  );
}
