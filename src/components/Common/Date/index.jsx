import React from "react";

function DateComponent({ data: { date } }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // const stringDate = dateToString();
  return <div className="">{formattedDate}</div>;
}

export default DateComponent;
