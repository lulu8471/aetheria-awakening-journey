import React from "react";
import { CountryInfo } from "../ContentData";
import "./SidebarInfo.css";

interface SidebarInfoProps {
  country: CountryInfo;
}

export default function SidebarInfo({ country }: SidebarInfoProps) {
  return (
    <div className="sidebar-info">
      <h2>{country.name_tc} ({country.name_en})</h2>
      <p>{country.summary}</p>

      <h3>代表地標</h3>
      <ul>
        {country.landmarks.map((lm) => (
          <li key={lm}>{lm}</li>
        ))}
      </ul>

      <h3>主要城市</h3>
      <ul>
        {country.keyCities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>

      <h3>特產與種族</h3>
      <p>特產：{country.products.join("、")}</p>
      <p>種族：{country.races.join("、")}</p>

      <h3>節慶</h3>
      <ul>
        {country.festivals.map((fest) => (
          <li key={fest}>{fest}</li>
        ))}
      </ul>

      {country.relatedCharacters.length > 0 && (
        <>
          <h3>關聯角色</h3>
          <ul>
            {country.relatedCharacters.map((charId) => (
              <li key={charId}>
                <a href={`/characters#${charId}`}>{charId}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
}