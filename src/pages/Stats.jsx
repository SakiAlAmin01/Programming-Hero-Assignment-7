import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats() {
  const { timeline } = useTimeline();

  // count interactions
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((t) => {
    if (counts[t.type] !== undefined) {
      counts[t.type]++;
    }
  });

  // original data
  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ];

  // check if any real data exists
  const hasData = data.some((d) => d.value > 0);

  // fallback data (to show chart)
  const chartData = hasData
    ? data
    : [
        { name: "Call", value: 1 },
        { name: "Text", value: 1 },
        { name: "Video", value: 1 },
      ];

  const COLORS = ["#22c55e", "#8b5cf6", "#14b8a6"];

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      {/* No data message */}
      {!hasData && (
        <p className="text-gray-500 mb-4">
          No data yet. Add interactions!
        </p>
      )}

      {/* Chart */}
      <div className="flex justify-center items-center">
        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={100}
            innerRadius={60} // donut effect
          >
            {chartData.map((entry, index) => (
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