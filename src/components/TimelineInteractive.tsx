import React from "react";
import { EventInfo } from "../ContentData";
import "./TimelineInteractive.css";

interface TimelineInteractiveProps {
  events: EventInfo[];
  onSelect: (eventId: string) => void;
}

export default function TimelineInteractive({ events, onSelect }: TimelineInteractiveProps) {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className="timeline-interactive-container">
      <div className="timeline-line" />
      {sortedEvents.map((evt) => (
        <div
          key={evt.id}
          className="timeline-node"
          style={{
            left: `${((evt.year - sortedEvents[0].year) /
              (sortedEvents[sortedEvents.length - 1].year - sortedEvents[0].year)) * 100}%`,
          }}
          onClick={() => onSelect(evt.id)}
          title={`${evt.year} 年：${evt.title}`}
        >
          <div className="node-circle" />
        </div>
      ))}
    </div>
  );
}
