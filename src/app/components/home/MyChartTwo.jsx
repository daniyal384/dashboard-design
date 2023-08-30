"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 10,
    pv: 30,
  },
  {
    name: "B",
    uv: 20,
    pv: 10,
  },
  {
    name: "C",
    uv: 20,
    pv: 30,
  },
  {
    name: "D",
    uv: 28,
    pv: 25,
  },
];

export default function MyChartTwo() {
  const [chartWidth, setChartWidth] = useState(550);

  useEffect(() => {
    const handleResize = () => {
      //const newWidth = window.innerWidth > 768 ? 550 : 270; // You can adjust the breakpoint and widths
      if (window.innerWidth > 768) {
        setChartWidth(550);
      } else if (window.innerWidth > 1200) {
        setChartWidth(750);
      } else {
        setChartWidth(270);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="mt-5">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={400}
          height={200}
          data={data}
          syncId="anyId"
          className="-ml-5"
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          {/* position={{ y: 165, x: 1 }} */}
          <Tooltip />
          <Line
            // type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={3}
            dot={false}
            style={{
              filter: `drop-shadow(1px 2px 5px #8884d8)`,
            }}
          /><Line
            // type="monotone"
            dataKey="pv"
            stroke="#DF81FD"
            fill="#DF81FD"
            strokeWidth={3}
            dot={false}
            style={{
              filter: `drop-shadow(1px 2px 5px #8884d8)`,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
