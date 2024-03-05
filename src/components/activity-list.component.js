import { useState } from "react";
import EditIcon from "../Assets/edit-icon.png";
import EditListItemModal from "./edit-list-item.component";
const moment = require('moment');

function ActivityList({
  list,
  listName,
  seeAllBtn
}) {
  const [showModal, modalToggle] = useState(false);
  const [lineItem, itemClicked] = useState({});
  const [itemId, setItemId] = useState();

  const handleShow = (listItem) => {
    setItemId(listItem.id);
    itemClicked(listItem);
    modalToggle(true);
  };

  const TimeStamp = ({ index }) => {
    var currentItemDate = new Date(list[index].createdAt);
    if (index === 0) {
      return <h3>{ moment(currentItemDate).format("MMM Do, YYYY") }</h3>;
    }
    index--;
    var prevItemDate = new Date(list[index].createdAt);
    if (prevItemDate.getDate() !== currentItemDate.getDate()) {
      return <h3>{ moment(currentItemDate).format("MMM Do, YYYY") }</h3>;
    } else {
      return null;
    }
  };

  return (
    <div className="activity-list__segment">
      <h2>{listName}</h2>
      {list.map((listItem, index) => (
        <div key={ "list-item__" + index }>
          <TimeStamp index={ index } />
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
