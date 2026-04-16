import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats() {
  const { timeline } = useTimeline();

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((t) => counts[t.type]++);

  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ];

  const COLORS = ["#22c55e", "#8b5cf6", "#14b8a6"]; // green, purple, teal

  if (timeline.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Friendship Analytics</h1>
        <p className="mt-6 text-gray-500">No data yet. Add interactions!</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Friendship Analytics</h1>

      <div className="flex justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            innerRadius={60}   // donut effect 🔥
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}