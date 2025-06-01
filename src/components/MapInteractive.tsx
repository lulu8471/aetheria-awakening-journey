import React, { useRef, useEffect } from "react";
import { CountryInfo } from "../ContentData";
import "./MapInteractive.css";

interface MapInteractiveProps {
  countries: CountryInfo[];
  onSelect: (countryId: string) => void;
}

export default function MapInteractive({ countries, onSelect }: MapInteractiveProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // 初始化或產生動態效果（如需）
  }, []);

  return (
    <div className="map-interactive-container">
      <svg ref={svgRef} viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" className="map-svg">
        {countries.map((country) => (
          <path
            key={country.id}
            id={country.id}
            d={getPathById(country.id)}
            className="map-region"
            onClick={() => onSelect(country.id)}
            onMouseEnter={(e) => {
              (e.target as SVGPathElement).classList.add("hovered");
            }}
            onMouseLeave={(e) => {
              (e.target as SVGPathElement).classList.remove("hovered");
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function getPathById(id: string): string {
  switch (id) {
    case "starlight":
      return "M100,100 L300,100 L300,300 L100,300 Z";
    case "moonshadow":
      return "M350,50 L550,50 L550,250 L350,250 Z";
    case "celestial":
      return "M100,350 L300,350 L300,550 L100,550 Z";
    case "arcane":
      return "M350,300 L550,300 L550,500 L350,500 Z";
    case "frostpeak":
      return "M600,100 L800,100 L800,300 L600,300 Z";
    case "desert":
      return "M600,350 L800,350 L800,550 L600,550 Z";
    case "shadowrealm":
      return "M850,200 L950,200 L950,400 L850,400 Z";
    default:
      return "";
  }
}
