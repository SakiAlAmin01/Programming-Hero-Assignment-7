import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // debug check
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">
        Friends to keep close in your life
      </h1>

      <button className="bg-green-700 text-white px-4 py-2 rounded mt-4">
        + Add a Friend
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {Array.isArray(friends) &&
          friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
      </div>
    </div>
  );
}