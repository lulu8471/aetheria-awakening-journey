import React, { useState } from "react";
import { contentData } from "../ContentData";
import CalendarInteractive from "../components/CalendarInteractive";
import "./CalendarPage.css";

export default function CalendarPage() {
  const [selectedMonthId, setSelectedMonthId] = useState<string | null>(null);
  const selectedMonth = selectedMonthId
    ? contentData.months.find((m) => m.id === selectedMonthId)
    : null;

  return (
    <div className="calendar-page-container">
      <section className="calendar-intro">
        <h1>星曆與節慶</h1>
        <p>艾瑟利亞大陸的十月星曆，融合天文觀測與魔法儀式。點擊下方的星盤圓環，探索每個月份的獨特節慶與民俗故事。</p>
      </section>

      <div className="calendar-content">
        <div className="calendar-interactive-area">
          <CalendarInteractive
            months={contentData.months}
            onSelect={(monthId) => setSelectedMonthId(monthId)}
          />
        </div>
        <div className="month-info-area">
          {selectedMonth ? (
            <div className="month-detail-card">
              <h2>{selectedMonth.name_tc} ({selectedMonth.name_en})</h2>
              <p><strong>象徵：</strong>{selectedMonth.symbol}</p>
              <p>{selectedMonth.description}</p>
            </div>
          ) : (
            <div className="placeholder-month">請點擊星盤圓環上的月份，以查看該月節慶與介紹。</div>
          )}
        </div>
      </div>
    </div>
  );
}
