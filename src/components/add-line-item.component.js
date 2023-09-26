import React from "react";
import { addItem, listData, getTotal } from "../Services/custom";

export default function AddLineItem({ getList, totalFunction }) {
  let isPurchase;
  const addItemSubmit = async (e) => {
    e.preventDefault();
    const itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";
    let itemAmount = document.getElementById("item-amount").value;
    document.getElementById("item-amount").value = "";
    if (isPurchase) itemAmount = "-" + itemAmount;

    await addItem(itemName, itemAmount);
    const data = await listData();

    // Update total for the month
    const totalData = await getTotal();
    totalFunction(await totalData);
    getList(await data.data);
  };

  const transactionTypeSelect = (e) => {
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
    document.getElementById("add-item__form").style.display = "block";
  };

  const closeTypeSelect = () => {
    document.getElementById("add-item__form").style.display = "none";
    document.getElementById("income-selection").style.backgroundColor =
      "#c2af84";
    document.getElementById("purchase-selection").style.backgroundColor =
      "#c2af84";
  };

  return (
    <div className="add-item__container container__width">
      <div className="input-type__container">
        <button
          id="purchase-selection"
          onClick={(e) => transactionTypeSelect(e)}
          className="secondary-button"
          type="button"
        >
          Purchase
        </button>
        <button
          id="income-selection"
          onClick={(e) => transactionTypeSelect(e)}
          className="secondary-button"
          type="button"
        >
          Income
        </button>
      </div>
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
