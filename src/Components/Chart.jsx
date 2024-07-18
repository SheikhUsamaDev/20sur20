import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Nombre d'utilisateur inscrit", ""],
  ["Jan", 1000],
  ["Fev", 1170],
  ["Mar", 660],
  ["Avr", 1030],
  ["Mai", 1030],
  ["Jui", 1030],
  ["Juil", 1030],
  ["Aou", 1030],
  ["Sep", 1030],
  ["Oct", 1030],
  ["Nov", 1030],
  ["Dec", 1030],
];

export const options = {
  chart: {
  },
};

export function Charts() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={{}}
      className="chart-container"
    />
  );
}
