import React, { useState, useMemo } from "react";
import { contentData, CharacterInfo } from "../ContentData";
import CharacterFilter from "../components/CharacterFilter";
import CharacterCard from "../components/CharacterCard";
import "./CharactersPage.css";

export default function CharactersPage() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredCharacters: CharacterInfo[] = useMemo(() => {
    return contentData.characters.filter((char) => {
      const matchAff =
        selectedAffiliation === "all" || char.affiliation === selectedAffiliation;
      const matchTag =
        selectedTag === "all" || char.tags.includes(selectedTag);
      const lower = searchText.trim().toLowerCase();
      const matchSearch =
        lower === "" ||
        char.name_tc.toLowerCase().includes(lower) ||
        char.name_en.toLowerCase().includes(lower);

      return matchAff && matchTag && matchSearch;
    });
  }, [searchText, selectedAffiliation, selectedTag]);

  return (
    <div className="characters-page-container">
      <section className="characters-intro">
        <h1>角色資料庫</h1>
        <p>這裡收錄《覺醒之旅》世界所有角色，支援依勢力、標籤篩選，並可搜尋姓名。點擊任一角色卡片可查看詳細背景介紹。</p>
      </section>

      <div className="characters-content">
        <div className="filter-area">
          <CharacterFilter
            affiliations={contentData.countries.map((c) => ({
              id: c.id,
              name: c.name_tc,
            }))}
            tags={["主角", "配角", "寵物/夥伴", "先知"]}
            selectedAffiliation={selectedAffiliation}
            selectedTag={selectedTag}
            searchText={searchText}
            onAffiliationChange={(val) => setSelectedAffiliation(val)}
            onTagChange={(val) => setSelectedTag(val)}
            onSearchTextChange={(val) => setSearchText(val)}
          />
        </div>
        <div className="cards-area">
          {filteredCharacters.length > 0 ? (
            <div className="card-grid">
              {filteredCharacters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>
          ) : (
            <p>沒有符合條件的角色。</p>
          )}
        </div>
      </div>
    </div>
}