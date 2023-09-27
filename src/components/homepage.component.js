import { useState, useEffect } from "react";
import TotalMoney from "./total-money.component";
import ActivityList from "./activity-list.component";
import AddItemModal from "./add-item-modal.component";
import * as Services from "../Services/custom";

export default function Homepage() {
  const [total, totalFunction] = useState([]);
  const [list, getList] = useState([]);
  const [moneyIn, getMoneyIn] = useState([]);
  const [moneyOut, getMoneyOut] = useState([]);

  useEffect(() => {
    moneyData();
    getListData();
  }, []);

  const getListData = async () => {
    const data = await Services.getRecentActivity();
    getList(await data.data);

    const moneyInData = await Services.getMoneyInActivity();
    getMoneyIn(await moneyInData.data);

    const moneyOutData = await Services.getMoneyOutActivity();
    getMoneyOut(await moneyOutData.data);
  };

  const moneyData = async () => {
    const data = await Services.getTotal();
    totalFunction(await data);
  };

  return (
    <div>
      <TotalMoney total={total} />
      <AddItemModal
        getMoneyIn={getMoneyIn}
        getMoneyOut={getMoneyOut}
        getList={getList}
        totalFunction={totalFunction}
      />
      <div className="activity-list__section container__width">
        <ActivityList
          listName="Recent Activity"
          seeAllBtn="See all activity"
          list={list}
          getList={getList}
          getMoneyIn={getMoneyIn}
          getMoneyOut={getMoneyOut}
          totalFunction={totalFunction}
        />
        <ActivityList
          listName="Recent Money Out"
          list={moneyOut}
          getList={getList}
          getMoneyIn={getMoneyIn}
          getMoneyOut={getMoneyOut}
          totalFunction={totalFunction}
        />
        <ActivityList
          listName="Recent Money In"
          list={moneyIn}
          getList={getList}
          getMoneyIn={getMoneyIn}
          getMoneyOut={getMoneyOut}
          totalFunction={totalFunction}
        />
      </div>
    </div>
  );
}
