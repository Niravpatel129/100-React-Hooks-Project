import React, { useState, useEffect } from "react";

function Clock() {
  const [time, updateTime] = useState(0);

  setInterval(() => {
    updateTime(new Date().getSeconds());
  }, 1000);
  return <div>{time}</div>;
}

export default Clock;
