import React from "react";

export default function TotalMoney({ total }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let monthName = month[d.getMonth()];

  return (
    <div className="monthly-total__container container__width">
      <h1>{monthName} Total</h1>
      <p>${total}</p>
    </div>
  );
}
