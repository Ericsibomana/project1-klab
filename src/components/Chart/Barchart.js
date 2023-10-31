import React from "react";
// import { BarChart } from "recharts";
// import chart libraries
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Barchart() {
  const data = [
    {
      name: "Users",
      uv: 10,
      value: 13,
      amt: 2400,
    },
    {
      name: "Posts",
      uv: 10,
      value: 7,
      amt: 2210,
    },
    {
      name: "Views",
      value: 464,
    },
    {
      name: "Comments",
      uv: 10,
      value: 16,
      amt: 2000,
    },
  ];

  return (
    <div style={{ width: "400px", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <div className="graphic-chart">
          <BarChart
            width={400}
            height={330}
            data={data}
            margin={{
              top: 10,
              right: 30,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#7F0101" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
