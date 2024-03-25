import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AddPaymentModal = ({
  isOpen,
  onClose,
  fetchPaymentList,
  paymentToEdit,
}) => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (paymentToEdit) {
      setCardHolder(paymentToEdit.cardHolder);
      setCardNumber(paymentToEdit.cardNumber);
      setExpirationDate(paymentToEdit.expirationDate);
      setType(paymentToEdit.type);
    }
  }, [paymentToEdit]);

  const addPayment = (newPayment) => {
    axios
      .post("http://localhost:8080/user/1/payments", newPayment)
      .then((response) => {
        console.log("Payment added successfully:", response.data);
        fetchPaymentList();
      })
      .catch((error) => {
        console.error("Error adding payment:", error);
      });
  };

  const editPayment = (updatedPayment) => {
    axios
      .put(
        `http://localhost:8080/user/payments/${paymentToEdit.id}`,
        updatedPayment
      )
      .then((response) => {
        console.log("Payment edited successfully:", response.data);
        fetchPaymentList();
        onClose();
      })
      .catch((error) => {
        console.error("Error editing payment:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      cardHolder: cardHolder,
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      type: type,
    };
    if (paymentToEdit) {
      editPayment({ ...newPayment, id: paymentToEdit.id });
    } else {
      addPayment(newPayment);
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add New Payment Method"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md w-1/3"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex flex-col">
        <h2 className="text-center font-bold mb-2 text-lg">
          Add New Payment Method
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardHolder" className="block text-black">
              Card Holder:
            </label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="cardNumber" className="block text-black">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="expirationDate" className="block text-black">
              Expiration Date:
            </label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="type" className="block text-black">
              Type:
            </label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-5 py-2 rounded-3xl bg-white hover:bg-shineblue hover:text-white text-primary border border-solid text-sm font-bold"
            >
              {paymentToEdit ? "Save" : "Add Payment"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddPaymentModal;
