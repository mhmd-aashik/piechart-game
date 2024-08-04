"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartTS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartTS.register(ArcElement);

const Chart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const [chartAnimate, setChartAnimate] = useState<boolean>(true);

  setTimeout(() => {
    setChartAnimate(false);
  }, 3000);

  const [time, setTime] = useState(300);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className={`h-[420px] w-[420px] rounded-full border-8 border-pink-600 p-5 ${chartAnimate ? "animate-spin" : ""}`}
      >
        <Doughnut
          data={data}
          width={420}
          height={420}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="absolute">
        <h2 className="text-4xl font-bold">
          {`${Math.floor(time / 60)}`.padStart(2, "0")}:
          {`${String(time % 60)}`.padStart(2, "0")}
        </h2>
        <p className="font-bold">Drawing Timer</p>
      </div>
    </div>
  );
};

export default Chart;
