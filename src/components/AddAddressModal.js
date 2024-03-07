import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const turkishCities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kilis",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Şanlıurfa",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

const AddAddressModal = ({ isOpen, onClose, fetchAddressList }) => {
  const [addressTitle, setAddressTitle] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");

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
    console.log("new adres > " + JSON.stringify(newAddress));
    addAddress(newAddress);
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
              {turkishCities.map((city) => (
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
              Add Address
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAddressModal;
