import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry } = useTimeline();

  useEffect(() => {
    fetch("/src/data/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id == id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added!`);
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">

      {/* LEFT SIDE */}
      <div className="shadow p-4 rounded">
        <img src={friend.picture} className="w-20 rounded-full" />
        <h2 className="text-xl font-bold mt-2">{friend.name}</h2>

        <p className="text-sm mt-1">{friend.email}</p>
        <p className="mt-2">{friend.bio}</p>

        <div className="flex gap-2 mt-2">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-gray-200 px-2 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button className="bg-gray-200 p-2 rounded">⏰ Snooze 2 Weeks</button>
          <button className="bg-gray-200 p-2 rounded">📦 Archive</button>
          <button className="bg-red-400 text-white p-2 rounded">🗑 Delete</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-4">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="shadow p-3 text-center">
            <p>{friend.days_since_contact}</p>
            <small>Days</small>
          </div>

          <div className="shadow p-3 text-center">
            <p>{friend.goal}</p>
            <small>Goal</small>
          </div>

          <div className="shadow p-3 text-center">
            <p>{friend.next_due_date}</p>
            <small>Next Due</small>
          </div>
        </div>

        {/* Goal */}
        <div className="shadow p-4">
          <h3 className="font-semibold">Relationship Goal</h3>
          <p>Connect every {friend.goal} days</p>
          <button className="text-sm text-blue-500 mt-2">Edit</button>
        </div>

        {/* Quick Check-in */}
        <div className="shadow p-4">
          <h3 className="font-semibold mb-3">Quick Check-in</h3>

          <div className="flex gap-4">
            <button onClick={() => handleAction("Call")} className="bg-gray-200 p-2 rounded">
              📞 Call
            </button>

            <button onClick={() => handleAction("Text")} className="bg-gray-200 p-2 rounded">
              💬 Text
            </button>

            <button onClick={() => handleAction("Video")} className="bg-gray-200 p-2 rounded">
              🎥 Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;