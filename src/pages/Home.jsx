import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";

// ✅ BASE_URL যোগ করুন
const BASE_URL = import.meta.env.BASE_URL || '/';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}friends.json`)
    .then((res) => res.json())
    .then((data) => {
      setFriends(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
}, []);

  if (loading) return <Loader />;

  // ✅ Dynamic counts
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(
    f => f.status === "overdue" || f.status === "almost due"
  ).length;

  const interactions = friends.reduce((acc, f) => acc + f.days_since_contact, 0);

  return (
    <div className="p-6 text-center">
      
      {/* Title */}
      <h1 className="text-3xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mt-2">
        Your personal shelf of meaningful connections.
      </p>

      {/* Button */}
      <button className="bg-green-700 text-white px-4 py-2 rounded mt-4">
        + Add a Friend
      </button>

      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-2xl font-bold">{totalFriends}</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-2xl font-bold">{onTrack}</h2>
          <p className="text-gray-500">On Track</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-2xl font-bold">{needAttention}</h2>
          <p className="text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-2xl font-bold">{interactions}</h2>
          <p className="text-gray-500">Interactions</p>
        </div>
      </div>

      {/* Friend List Title */}
      <h2 className="text-xl font-semibold mt-10 mb-4 text-left">
        Your Friends
      </h2>

      {/* Friend Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}