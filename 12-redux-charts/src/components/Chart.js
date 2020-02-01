import React, { useState } from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import InputField from "./InputField";

import { useSelector } from "react-redux";

function Chart() {
  const [viewMode, setMode] = useState("key");
  const data = useSelector(state => state.chartDataReducer);

  const handleMouseOver = () => {
    console.log("mouse over");
    setMode(viewMode === "key" ? "value" : "key");
  };

  return (
    <div>
      <InputField />

      <ReactMinimalPieChart
        animate={false}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={data}
        label={e => {
          if (viewMode === "key") return e.data[e.dataIndex].key;
          return e.data[e.dataIndex].value;
        }}
        labelPosition={112}
        labelStyle={{
          fontFamily: "sans-serif",
          fontSize: "5px"
        }}
        lengthAngle={360}
        lineWidth={100}
        onClick={handleMouseOver}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={42}
        rounded={false}
        startAngle={0}
        viewBoxSize={[100, 100]}
        style={{
          height: "500px"
        }}
      />
    </div>
  );
}

export default Chart;
