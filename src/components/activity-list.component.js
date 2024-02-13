import "../App.css";
import { useState } from "react";
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

  const TimeStamp = ({ oldDate, newDate }) => {
    if (oldDate == newDate) {
      return null;
    }
    return <h3>{ newDate }</h3>;
  };

  return (
    <div className="activity-list__segment">
      <h2>{listName}</h2>
      {list.map((listItem, index) => (
        <div>
          <TimeStamp newDate={listItem.createdAt} oldDate={list[index - 1]} />
          <div key={listItem.id} onClick={() => handleShow(listItem)}>
            <div className="activity-list__container">
              <p>{listItem.name}</p>
              <div className="list-item__price">
                <p>${listItem.amount}</p>
                <img alt="black and white edit icon" src={EditIcon} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {seeAllBtn && <a href="/all-activity">{seeAllBtn}</a>}
      <EditListItemModal
        itemId={itemId}
        showModal={showModal}
        modalToggle={modalToggle}
        lineItem={lineItem}
      />
    </div>
  );
}

export default ActivityList;
