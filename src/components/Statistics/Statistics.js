import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const data = useLoaderData().data;
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
      <h3 style={{ textAlign: "center" }}>Quiz Statistics</h3>
    </div>
  );
};

export default Statistics;
