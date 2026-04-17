import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry } = useTimeline();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id == id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p className="p-6">Loading...</p>;

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added!`);
  };

  const statusColor = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white shadow rounded-xl p-6 text-center">

          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="text-lg font-semibold mt-3">{friend.name}</h2>

          <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusColor[friend.status]}`}>
            {friend.status}
          </span>

          <div className="flex justify-center gap-2 mt-2 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3 italic">
            "{friend.bio}"
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {friend.email}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">
                {friend.days_since_contact}
              </p>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">
                {friend.goal}
              </p>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-4 text-center">
              <p className="text-lg font-semibold text-green-700">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          {/* GOAL */}
          <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-600">
                Connect every <b>{friend.goal} days</b>
              </p>
            </div>

            <button className="text-sm border px-3 py-1 rounded hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white shadow rounded-xl p-4">
            <h3 className="font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleAction("Call")}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                📞
                <span className="text-sm mt-1">Call</span>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                💬
                <span className="text-sm mt-1">Text</span>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                🎥
                <span className="text-sm mt-1">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-gray-100 py-3 rounded-lg hover:bg-gray-200">
          ⏰ Snooze 2 Weeks
        </button>

        <button className="w-full bg-gray-100 py-3 rounded-lg hover:bg-gray-200">
          📦 Archive
        </button>

        <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default FriendDetails;