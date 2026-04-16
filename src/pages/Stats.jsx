import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

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

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Friendship Analytics</h1>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={index} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}