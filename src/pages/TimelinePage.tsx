import React, { useState } from "react";
import { contentData } from "../ContentData";
import TimelineInteractive from "../components/TimelineInteractive";
import "./TimelinePage.css";

export default function TimelinePage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const selectedEvent = selectedEventId
    ? contentData.events.find((e) => e.id === selectedEventId)
    : null;

  return (
    <div className="timeline-page-container">
      <section className="timeline-intro">
        <h1>重大事件年表</h1>
        <p>滑動下方時間軸，點擊節點查看該年份的事件詳情與關聯角色。</p>
      </section>

      <div className="timeline-content">
        <TimelineInteractive
          events={contentData.events}
          onSelect={(eventId) => setSelectedEventId(eventId)}
        />

        <div className="event-detail-area">
          {selectedEvent ? (
            <div className="event-card">
              <h2>{selectedEvent.year} 年：{selectedEvent.title}</h2>
              <p>{selectedEvent.summary}</p>
              <p>{selectedEvent.description}</p>
              <p><strong>發生地：</strong>{selectedEvent.location}</p>
              {selectedEvent.relatedCharacters.length > 0 && (
                <>
                  <h3>關聯角色</h3>
                  <ul>
                    {selectedEvent.relatedCharacters.map((charId) => (
                      <li key={charId}><a href={`/characters#${charId}`}>{charId}</a></li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <div className="placeholder-event">點擊時間軸上的節點，查看該事件詳細內容。</div>
          )}
        </div>
      </div>
    </div>
  );
}
