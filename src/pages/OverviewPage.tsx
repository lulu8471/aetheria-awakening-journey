import React from "react";
import { contentData } from "../ContentData";
import "./OverviewPage.css";

export default function OverviewPage() {
  return (
    <div className="overview-page-container">
      <section className="overview-intro">
        <h1>世界觀與國度</h1>
        <p>艾瑟利亞大陸因魔法、科技與古老傳說交錯而充滿戲劇性與想像。請點擊各國名稱，以展開或收起其詳細介紹。</p>
      </section>

      <div className="countries-accordion">
        {contentData.countries.map((country) => (
          <details key={country.id} className="country-details">
            <summary>{country.name_tc} ({country.name_en})</summary>
            <div className="country-content">
              <h3>地理環境</h3>
              <p>{country.summary}</p>
              <h3>主要城市與地標</h3>
              <ul>
                {country.keyCities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
              <h3>節慶</h3>
              <ul>
                {country.festivals.map((fest) => (
                  <li key={fest}>{fest}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
}