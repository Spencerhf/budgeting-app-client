import "../App.css";
import React from "react";
import * as Services from "../Services/custom";
import Trash from "../Assets/icons8-trash-24.png";

function ActivityList({
  list,
  getList,
  totalFunction,
  listName,
  seeAllBtn,
  getMoneyIn,
  getMoneyOut,
}) {
  const deleteLineItem = async (id) => {
    // Update activity list
    await Services.removeItem(id);
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

  return (
    <div className="activity-list__segment">
      <h2>{listName}</h2>
      {list.map((listItem) => (
        <div key={listItem.id} className="activity-list__container">
          <p>{listItem.name}</p>
          <div className="list-item__price">
            <p>${listItem.amount}</p>
            <img
              onClick={() => deleteLineItem(listItem.id)}
              alt="black and white trash can icon"
              src={Trash}
            />
          </div>
        </div>
      ))}
      {seeAllBtn && <a href="/">{seeAllBtn}</a>}
    </div>
  );
}

export default ActivityList;
