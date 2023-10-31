import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "Users",
    uv: 13,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Posts",
    uv: 7,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Views",
    uv: 464,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Comments",
    uv: 13,
    pv: 3908,
    amt: 2000,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class CardinalChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/area-chart-different-shapes-z94k6";

  render() {
    return (
      <div style={{ width: "400px", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={400}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Area
              type={cardinal}
              dataKey="uv"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
