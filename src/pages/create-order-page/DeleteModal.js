import Modal from "react-modal";

const DeleteModal = ({ isOpen, onConfirmDelete, onCancelDelete, itemType }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancelDelete}
      contentLabel={`Delete ${itemType} Confirmation`}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md w-1/3"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex flex-col">
        <h2 className="text-center font-bold mb-2 text-lg">
          Delete {itemType}
        </h2>
        <p className="text-center">
          Are you sure you want to delete this {itemType}?
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={onConfirmDelete}
            className=" text-white bg-red px-4 py-2 mr-2 rounded-md"
          >
            Delete
          </button>
          <button
            onClick={onCancelDelete}
            className=" text-white bg-pricegrey px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
