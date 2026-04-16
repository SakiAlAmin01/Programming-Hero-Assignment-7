import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  const color =
    status === "overdue"
      ? "bg-red-500"
      : status === "almost due"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <Link to={`/friend/${id}`}>
      <div className="shadow p-4 rounded text-center">
        <img
          src={picture}
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h3 className="font-semibold mt-2">{name}</h3>
        <p>{days_since_contact} days ago</p>

        <div className="flex justify-center gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>

        <span className={`text-white px-2 py-1 text-xs rounded mt-2 inline-block ${color}`}>
          {status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;