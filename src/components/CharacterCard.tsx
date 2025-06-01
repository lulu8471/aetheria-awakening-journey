import React from "react";
import { CharacterInfo } from "../ContentData";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: CharacterInfo;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="character-card" id={character.id}>
      <img src={character.profileImage} alt={character.name_tc} className="char-avatar" />
      <div className="char-info">
        <h3>{character.name_tc} ({character.name_en})</h3>
        <p><strong>所屬：</strong>{character.affiliation}</p>
        <p><strong>標籤：</strong>{character.tags.join("、")}</p>
        <p className="char-appearance">{character.appearance}</p>
      </div>
    </div>
}