import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
//
const Chart = (props) => {
  //
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //The values taken for each months object that was passed from props. It is now an array of month values
  const totalMax = Math.max(...dataPointValues); //Find the max value for that filtered year
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
