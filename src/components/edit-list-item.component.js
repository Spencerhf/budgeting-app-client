import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import * as Services from "../Services/custom";
const moment = require('moment');

export default function EditListItemModal({
  itemId,
  showModal,
  modalToggle,
  lineItem,
}) {
  const handleClose = () => modalToggle(false);

  const updateItem = async (e) => {
    e.preventDefault();
    let updateObj = {};
    if (e.target.name.value) updateObj.name = e.target.name.value;
    if (e.target.amount.value) updateObj.amount = e.target.amount.value;
    if (e.target.notes.value) updateObj.notes = e.target.notes.value;

    if (updateObj.length === 0) {
      return;
    } else {
      await Services.updateLineItem(updateObj, itemId);
      window.location.reload();
    }
  };

  const deleteLineItem = async (e) => {
    e.preventDefault();
    e.target.innerHTML = "deleting...";
    // Update activity list
    await Services.removeItem(itemId);
    window.location.reload();
  };

  return (
    <div className="add-item__container container__width edit-item__container">
      <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2 id="add-item__modal-title">{moment(lineItem.createdAt).format("MMM Do, YYYY")}</h2>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateItem}>
            <Form.Group className="mb-3">
              <Form.Label>Item amount</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  id="item-amount"
                  type="text"
                  name="amount"
                  placeholder={lineItem.amount}
                  aria-label="Amount (to the nearest dollar)"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item name</Form.Label>
              <Form.Control
                id="item-name"
                type="text"
                name="name"
                placeholder={lineItem.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                id="item-notes"
                as="textarea"
                name="notes"
                placeholder={lineItem.notes}
              />
            </Form.Group>
            <div className="buttons__align-right">
              <button
                type="button"
                className="tertiary-button"
                onClick={deleteLineItem}
              >
                Delete
              </button>
              <button type="submit" className="primary-button">
                Update
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
