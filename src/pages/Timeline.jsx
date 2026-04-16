import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? timeline
      : timeline.filter(item => item.type.toLowerCase() === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Timeline</h1>

      <select
        className="mt-4 border p-2"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="mt-6 space-y-3">
        {filtered.map(item => (
          <div key={item.id} className="shadow p-3 flex gap-3">
            <span>
              {item.type === "Call" && "📞"}
              {item.type === "Text" && "💬"}
              {item.type === "Video" && "🎥"}
            </span>

            <div>
              <p>{item.title}</p>
              <small>{item.date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
