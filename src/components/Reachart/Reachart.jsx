import { Container } from "@mantine/core";
import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    marks: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    marks: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    marks: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    marks: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    marks: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    marks: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Reachart = () => {
  return (
    <Container className="mx-auto my-4">
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Reachart;
