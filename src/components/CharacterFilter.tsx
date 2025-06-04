import React from "react";
import "./CharacterFilter.css";

interface AffiliationOption {
  id: string;
  name: string;
}

interface CharacterFilterProps {
  affiliations: AffiliationOption[];
  tags: string[];
  selectedAffiliation: string;
  selectedTag: string;
  searchText: string;
  onAffiliationChange: (val: string) => void;
  onTagChange: (val: string) => void;
  onSearchTextChange: (val: string) => void;
}

export default function CharacterFilter({
  affiliations,
  tags,
  selectedAffiliation,
  selectedTag,
  searchText,
  onAffiliationChange,
  onTagChange,
  onSearchTextChange,
}: CharacterFilterProps) {
  return (
    <div className="char-filter-container">
      <label>
        勢力：
        <select
          value={selectedAffiliation}
          onChange={(e) => onAffiliationChange(e.target.value)}
        >
          <option value="all">全部</option>
          {affiliations.map((a) => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
      </label>      
      <label>
        標籤：
        <select
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
        >
          <option value="all">全部</option>
          {tags.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        搜尋：
        <input
          type="text"
          placeholder="輸入姓名搜尋"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
        />
      </label>
    </div>
  );
}
