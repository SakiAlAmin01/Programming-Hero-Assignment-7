import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? timeline
      : timeline.filter(
          (item) => item.type.toLowerCase() === filter
        );

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* Title + Filter */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl font-bold">Timeline</h1>

        <select
          className="border px-3 py-2 rounded-md text-sm w-full md:w-auto"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20 text-gray-500">
          
          <div className="text-6xl mb-4">📭</div>

          <h2 className="text-lg font-semibold">
            No interactions yet
          </h2>

          <p className="text-sm mt-2 max-w-sm">
            Start connecting with your friends. Your calls, texts, and
            video chats will appear here.
          </p>

        </div>
      ) : (
        /* TIMELINE LIST */
        <div className="mt-8 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow rounded-lg p-4 hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="text-xl">
                {item.type === "Call" && "📞"}
                {item.type === "Text" && "💬"}
                {item.type === "Video" && "🎥"}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <small className="text-gray-500">
                  {item.date}
                </small>
              </div>

              {/* TAG */}
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}