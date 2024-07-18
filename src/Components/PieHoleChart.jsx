import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Utillsateurs payants", 50],
  ["Utillsateurs gratults", 50],// CSS-style declaration
];

export const options = {
  pieHole: 0.5,
  is3D: false,
};

export function PieHole() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
