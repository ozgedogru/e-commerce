import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AddAddressModal = ({
  isOpen,
  onClose,
  fetchAddressList,
  isEditing,
  setIsEditing,
  addressToEdit,
}) => {
  const [cities, setCities] = useState([]);

  const [addressTitle, setAddressTitle] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchCities();
    if (addressToEdit) {
      setIsEditing(true);
      setAddressTitle(addressToEdit.addressTitle);
      setNameSurname(addressToEdit.nameSurname);
      setPhone(addressToEdit.phone);
      setCity(addressToEdit.city);
      setDistrict(addressToEdit.district);
      setNeighborhood(addressToEdit.neighborhood);
      setAddress(addressToEdit.addressDir);
    }
  }, [addressToEdit, setIsEditing]);

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        "https://turkiyeapi.dev/api/v1/provinces"
      );
      setCities(response.data.data.map((c) => c.name));
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const addAddress = (newAddress) => {
    axios
      .post("http://localhost:8080/user/1/address", newAddress)
      .then((response) => {
        console.log("Address added successfully:", response.data);
        fetchAddressList();
      })
      .catch((error) => {
        console.error("Error adding address:", error);
      });
  };

  const editAddress = (updatedAddress) => {
    axios
      .put(
        `http://localhost:8080/user/address/${addressToEdit.id}`,
        updatedAddress
      )
      .then((response) => {
        console.log("Address edited successfully:", response.data);
        fetchAddressList();
        onClose();
      })
      .catch((error) => {
        console.error("Error editing address:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      addressTitle: addressTitle,
      nameSurname: nameSurname,
      phone: phone,
      city: city,
      district: district,
      neighborhood: neighborhood,
      addressDir: address,
    };
    if (isEditing) {
      editAddress({ ...newAddress, id: addressToEdit.id });
    } else {
      addAddress(newAddress);
    }
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add New Address"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md w-1/3"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex flex-col">
        <h2 className="text-center font-bold mb-2 text-lg">Add New Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="addressTitle" className="block text-black">
              Address Title:
            </label>
            <input
              type="text"
              id="addressTitle"
              value={addressTitle}
              onChange={(e) => setAddressTitle(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="nameSurname" className="block text-black">
              Name & Surname:
            </label>
            <input
              type="text"
              id="nameSurname"
              value={nameSurname}
              onChange={(e) => setNameSurname(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="phone" className="block text-black">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="city" className="block text-black">
              City:
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <label htmlFor="district" className="block text-black">
              District:
            </label>
            <input
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="neighborhood" className="block text-black">
              Neighborhood:
            </label>
            <input
              type="text"
              id="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            />

            <label htmlFor="address" className="block text-black">
              Address:
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block w-full border-lightgrey rounded-md shadow-sm focus:ring-opacity-50 p-2"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-5 py-2 rounded-3xl bg-white hover:bg-shineblue hover:text-white text-primary border border-solid text-sm font-bold"
            >
              {isEditing ? "Save" : "Add Address"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAddressModal;
