import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import * as Services from "../Services/custom";

export default function AddItemModal() {
  const [show, setShow] = useState(false);
  const [isPurchase, setIsPurchase] = useState();
  const [formText, setFormText] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    if (e.target.innerText === "Add Purchase") {
      const updatedText = {
        header: "Create Purchase",
        nameLabel: "Purchase Name",
        namePlaceholder: "Grocery store",
        amountLabel: "Purchase Amount",
        amountPlaceholder: "25",
      };
      setFormText(updatedText);
      setIsPurchase(true);
    } else {
      const updatedText = {
        header: "Add Income",
        nameLabel: "Where did you get this money?",
        namePlaceholder: "Day job",
        amountLabel: "How much was it?",
        amountPlaceholder: "800",
      };
      setFormText(updatedText);
      setIsPurchase(false);
    }
  };

  const addItemSubmit = async (e) => {
    e.preventDefault();
    const itemName = document.getElementById("item-name").value;
    document.getElementById("item-name").value = "";
    let itemAmount = document.getElementById("item-amount").value;
    document.getElementById("item-amount").value = "";
    if (isPurchase) itemAmount = "-" + itemAmount;

    await Services.addItem(itemName, itemAmount);
    window.location.reload();
  };

  return (
    <div className="add-item__container container__width">
      <div className="input-type__container">
        <button
          id="purchase-selection"
          onClick={(e) => handleShow(e)}
          className="secondary-button"
          type="button"
        >
          Add Purchase
        </button>
        <button
          id="income-selection"
          onClick={(e) => handleShow(e)}
          className="secondary-button"
          type="button"
        >
          Add Income
        </button>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2 id="add-item__modal-title">{formText.header}</h2>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addItemSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{formText.amountLabel}</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  autoFocus
                  id="item-amount"
                  required
                  type="text"
                  placeholder={formText.amountPlaceholder}
                  aria-label="Amount (to the nearest dollar)"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{formText.nameLabel}</Form.Label>
              <Form.Control
                id="item-name"
                required
                type="text"
                placeholder={formText.namePlaceholder}
              />
            </Form.Group>
            <div className="buttons__align-right">
              <button type="button" className="tertiary-button" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="primary-button">
                Add item
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
