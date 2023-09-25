import React from "react";
import { addItem, listData, getTotal } from "../Services/custom";

export default function AddLineItem({getList, totalFunction }) {
  const addItemSubmit = async (e) => {
    e.preventDefault();
    const itemName = document.getElementById("item-name").value;
    const itemAmount = document.getElementById("item-amount").value;

    await addItem(itemName, itemAmount);
    const data = await listData();

    // Update total for the month
    const totalData = await getTotal();
    totalFunction(await totalData);
    getList(await data.data);
  }

  return (
    <div className="add-item__container container__width">
      <form onSubmit={addItemSubmit}>
        <div className="form-input__container">
          <div>
            <label htmlFor="name">Name of transaction</label>
            <input required id="item-name" type="text" name="name"></input>
          </div>
          <div>
            <label htmlFor="amount">How much was it?</label>
            <input required id="item-amount" type="text" name="amount"></input>
          </div>
        </div>
        <button class="primary-button" type="submit">Add item</button>
      </form>
    </div>
  );
}
