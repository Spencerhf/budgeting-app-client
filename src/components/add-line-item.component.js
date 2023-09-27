import React from "react";
import * as Services from "../Services/custom";

export default function AddLineItem({
  getList,
  getMoneyIn,
  getMoneyOut,
  totalFunction,
}) {
  let isPurchase;
  const addItemSubmit = async (e) => {
    e.preventDefault();
    const itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";
    let itemAmount = document.getElementById("item-amount").value;
    document.getElementById("item-amount").value = "";
    if (isPurchase) itemAmount = "-" + itemAmount;

    await Services.addItem(itemName, itemAmount);
    const data = await Services.getRecentActivity();
    const moneyInData = await Services.getMoneyInActivity();
    const moneyOutData = await Services.getMoneyOutActivity();

    // Update total for the month
    const totalData = await Services.getTotal();
    totalFunction(await totalData);
    getList(await data.data);
    getMoneyIn(await moneyInData.data);
    getMoneyOut(await moneyOutData.data);
  };

  const transactionTypeSelect = (e) => {
    document.getElementsByClassName("activity-list__section")[0].style.top =
      "0";
    document.getElementById("add-item__form").style.visibility = "visible";

    if (e.target.innerText === "Purchase") {
      isPurchase = true;
      document.getElementById("purchase-selection").style.backgroundColor =
        "transparent";
      document.getElementById("income-selection").style.backgroundColor =
        "#c2af84";
    } else {
      isPurchase = false;
      document.getElementById("income-selection").style.backgroundColor =
        "transparent";
      document.getElementById("purchase-selection").style.backgroundColor =
        "#c2af84";
    }
  };

  const closeTypeSelect = () => {
    document.getElementsByClassName("activity-list__section")[0].style.top =
      "-130px";
    document.getElementById("income-selection").style.backgroundColor =
      "#c2af84";
    document.getElementById("purchase-selection").style.backgroundColor =
      "#c2af84";
    document.getElementById("add-item__form").style.visibility = "hidden";
  };

  return (
    <div>
      <form id="add-item__form" onSubmit={addItemSubmit}>
        <div className="form-input__container">
          <div>
            <label htmlFor="name">Name</label>
            <input required id="item-name" type="text" name="name"></input>
          </div>
          <div>
            <label htmlFor="amount">How much was it?</label>
            <input required id="item-amount" type="text" name="amount"></input>
          </div>
        </div>
        <div className="input-type__container">
          <button
            onClick={() => closeTypeSelect()}
            type="button"
            className="secondary-button"
          >
            Nevermind
          </button>
          <button className="primary-button" type="submit">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}
