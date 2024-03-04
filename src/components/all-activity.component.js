import { useState, useEffect } from "react";
import TotalMoney from "./total-money.component";
import ActivityList from "./activity-list.component";
import AddItemModal from "./add-item-modal.component";
import * as Services from "../Services/custom";

export default function Homepage() {
  const [total, totalFunction] = useState([]);
  const [list, getList] = useState([]);

  useEffect(() => {
    moneyData();
    getListData();
  }, []);

  const getListData = async () => {
    const data = await Services.getAllActivity();
    getList(await data.data);
  };

  const moneyData = async () => {
    const data = await Services.getTotal();
    totalFunction(await data);
  };

  return (
    <div>
      <TotalMoney total={total} />
      <AddItemModal/>
      <div className="activity-list__section container__width">
        <ActivityList
          listName="All Activity"
          list={list}
        />
      </div>
    </div>
  );
}