import React from "react";

export default function TotalMoney({total}) {
  return (
    <div className="monthly-total__container container__width">
      <h1>This months total</h1>
      <p>${total}</p>
    </div>
  );
}
