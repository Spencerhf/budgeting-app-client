import { useState, useEffect } from "react";
import TotalMoney from "./total-money.component";
import ActivityList from "./activity-list.component";
import { getTotal, listData } from "../Services/custom";

export default function Homepage() {
  const [total, totalFunction] = useState([]);
  const [list, getList] = useState([]);

  useEffect(() => {
    moneyData();
    getListData();
  }, []);

  const getListData = async () => {
    const data = await listData();
    getList(await data.data);
  };

  const moneyData = async () => {
    const data = await getTotal();
    totalFunction(await data);
  };

  return (
    <div>
      <TotalMoney total={ total }/>
      <ActivityList list={ list } getList={ getList } total={ total } totalFunction={ totalFunction } />
    </div>
  );
}
