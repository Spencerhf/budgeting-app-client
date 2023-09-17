import "../App.css";
import React from "react";
import axios from "axios";
import { getTotal } from "../Services/custom";
import Trash from "../Assets/icons8-trash-24.png";

function ActivityList({list, getList, totalFunction }) {
  const deleteLineItem = async (id) => {
    // Update activity list
    await axios.post(`http://localhost:8080/remove-list/${id}`);
    const data = await axios.get(`http://localhost:8080/activity-list`);

    // Update total for the month
    const totalData = await getTotal();
    totalFunction(await totalData);
    getList(await data.data);

  }

  return (
    <>
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
    </>
  );
}

export default ActivityList;
