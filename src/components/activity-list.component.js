import "../App.css";
import { useState } from "react";
// import React from "react";
import * as Services from "../Services/custom";
import EditIcon from "../Assets/edit-icon.png";
import EditListItemModal from "./edit-list-item.component";

function ActivityList({
  list,
  getList,
  totalFunction,
  listName,
  seeAllBtn,
  getMoneyIn,
  getMoneyOut,
}) {
  const [showModal, modalToggle] = useState(false);
  const [lineItem, itemClicked] = useState({});
  const [itemId, setItemId] = useState();

  const handleShow = (listItem) => {
    setItemId(listItem.id);
    itemClicked(listItem);
    modalToggle(true);
  };

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
        <div key={listItem.id} onClick={() => handleShow(listItem)}>
          <div className="activity-list__container">
            <p>{listItem.name}</p>
            <div className="list-item__price">
              <p>${listItem.amount}</p>
              <img alt="black and white edit icon" src={EditIcon} />
            </div>
          </div>
        </div>
      ))}
      {seeAllBtn && <a href="/">{seeAllBtn}</a>}
      <EditListItemModal
        itemId={itemId}
        lineItem={lineItem}
        showModal={showModal}
        modalToggle={modalToggle}
        getMoneyIn={getMoneyIn}
        getMoneyOut={getMoneyOut}
        getList={getList}
        totalFunction={totalFunction}
      />
    </div>
  );
}

export default ActivityList;
