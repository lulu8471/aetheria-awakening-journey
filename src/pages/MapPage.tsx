import { useState } from "react";
import { contentData } from "../ContentData";
import MapInteractive from "../components/MapInteractive";
import SidebarInfo from "../components/SidebarInfo";
import "./MapPage.css";

export default function MapPage() {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const selectedCountry = selectedCountryId
    ? contentData.countries.find((c) => c.id === selectedCountryId)
    : null;

  return (
    <div className="map-page-container">
      <section className="map-intro">
        <h1>艾瑟利亞大陸地圖</h1>
        <p>艾瑟利亞大陸——七國與神秘地域的疆界、城市與傳說地標盡收眼底。點擊地圖上的任何區域，即可查看該地的詳細簡介。</p>
      </section>

      <div className="map-content">
        <div className="map-area">
          <MapInteractive
            countries={contentData.countries}
            onSelect={(countryId) => setSelectedCountryId(countryId)}
          />
        </div>
        <div className="sidebar-area">
          {selectedCountry ? (
            <SidebarInfo country={selectedCountry} />
          ) : (
            <div className="placeholder">請在地圖上點擊一個地區，以查看該地詳細資訊。</div>
          )}
        </div>
      </div>
    </div>
  );
}