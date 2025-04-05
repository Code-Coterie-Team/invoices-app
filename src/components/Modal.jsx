import { useState } from "react";
import { setItemList } from "../features/itemSlice";
import Itemlist from "./Itemlist";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../features/modalSlice";
import { setInvoices } from "../features/invoicesSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const [street, setstreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const { items } = useSelector((state) => state.itemList);
 
  const rowInvoices = useSelector((state) => state.invoices.rowInvoices) || [];
  const [dateVlaue, setDateValue] = useState("");

  const [streetClientVlaue, setstreetClientValue] = useState("");
  const [emailVlaue, setEmailValue] = useState("");
  const [nameVlaue, setNameValue] = useState("");
  const [cityVlaue, setCityValue] = useState("");
  const [postCodeVlaue, setPostCodeValue] = useState("");
  const [countryVlaue, setCountryValue] = useState("");

  const [qtyValue, setQtyValue] = useState();

  const [priceValue, setPriceValue] = useState(0);
  const [totalVlaue, setTotalValue] = useState("");
  const handleChangeDate = (event) => {
    setDateValue(event.target.value);
  };
  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleChangeStreetCilent = (event) => {
    setstreetClientValue(event.target.value);
  };
  const handleChangeCityClient = (event) => {
    setCityValue(event.target.value);
  };
  const handleChangePostCodeClient = (event) => {
    setPostCodeValue(event.target.value);
  };
  const handleChangeCountryClient = (event) => {
    setCountryValue(event.target.value);
  };
  const handleChangeStreet = (event) => {
    setstreet(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangePostCode = (event) => {
    setPostCode(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const resetForm = () => {
    setTotalValue("");
    setNameValue("");
    setDateValue("");
    setQtyValue("");
    setPriceValue("");
    dispatch(setItemList([{ key: "", nameItemVlaue: "New Item", qtyValue: 0.0, priceValue: 0 }]))
    
  };

  const generateRandomId = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    return randomId;
  };
  return (
    <div>
      <div className="z-0 w-screen h-full bg-black/40 fixed top-0 left-0">
        <div className=" w-6/12 h-full bg-white rounded-2xl flex flex-col px-36 py-14 gap-20 overflow-auto dark:bg-dark-primary-400">
          <div className="w-full flex flex-col gap-5">
            <span className="text-sm text-Billform font-bold">Bill Form</span>
            <form action="Street" className="flex flex-col gap-4">
              <label htmlFor="Street" className="text-sm text-information">
                Street Address
              </label>
              <input
                value={street}
                onChange={handleChangeStreet}
                required
                type="text"
                name="Street"
                id="Street"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information "
              />
            </form>
            <div className="flex gap-10">
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="City" className="text-sm text-information">
                  City
                </label>
                <input
                  required
                  type="text"
                  name="City"
                  id="City"
                  value={city}
                  onChange={handleChangeCity}
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
                />
              </form>
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="Post Code" className="text-sm text-information">
                  Post Code
                </label>
                <input
                  value={postCode}
                  onChange={handleChangePostCode}
                  required
                  type="text"
                  name="Post Code"
                  id="Post Code"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
                />
              </form>
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="Country" className="text-sm text-information">
                  Country
                </label>
                <input
                  value={country}
                  onChange={handleChangeCountry}
                  required
                  type="text"
                  name="Country"
                  id="Country"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
                />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <span className="text-sm text-Billform font-bold">Bill To</span>
            <form action="Street" className="flex flex-col gap-4">
              <label
                htmlFor="Client’s Name"
                className="text-sm text-information"
              >
                Client’s Name
              </label>
              .,<input
                required
                value={nameVlaue}
                onChange={handleChangeName}
                type="text"
                name="Client’s Name"
                id="Client’s Name"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information "
              />
            </form>
            <form action="Street" className="flex flex-col gap-4">
              <label
                htmlFor="Client’s Email"
                className="text-sm text-information"
              >
                Client’s Email
              </label>
              <input
                required
                placeholder="e.g.email@example.com"
                type="email"
                value={emailVlaue}
                onChange={handleChangeEmail}
                name="Client’s Email"
                id="Client’s Email"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold  dark:bg-dark-primary-500  dark:text-information"
              />
            </form>
            <form action="Street" className="flex flex-col gap-4">
              <label htmlFor="Street" className="text-sm text-information">
                Street Address
              </label>
              <input
                required
                type="text"
                name="Street"
                id="Street"
                value={streetClientVlaue}
                onChange={handleChangeStreetCilent}
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold dark:bg-dark-primary-500 dark:text-information "
              />
            </form>
            <div className="flex gap-10">
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="City" className="text-sm text-information">
                  City
                </label>
                <input
                  value={cityVlaue}
                  onChange={handleChangeCityClient}
                  required
                  type="text"
                  name="City"
                  id="City"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information "
                />
              </form>
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="Post Code" className="text-sm text-information">
                  Post Code
                </label>
                <input
                  value={postCodeVlaue}
                  onChange={handleChangePostCodeClient}
                  required
                  type="text"
                  name="Post Code"
                  id="Post Code"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
                />
              </form>
              <form action="Street" className="flex flex-col gap-2">
                <label htmlFor="Country" className="text-sm text-information">
                  Country
                </label>
                <input
                  value={countryVlaue}
                  onChange={handleChangeCountryClient}
                  required
                  type="text"
                  name="Country"
                  id="Country"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
                />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <form action="Invoice Date" className="flex flex-col gap-4">
              <label htmlFor="invoice" className="text-sm text-information">
                Invoice Date
              </label>
              <input
                required
                type="date"
                name="Invoice Date"
                id="Invoice Date"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs rounded-md text-xs font-bold dark:bg-dark-primary-500 dark:text-information"
                value={dateVlaue}
                onChange={handleChangeDate}
              />
            </form>
            <form action="Invoice Date" className="flex flex-col gap-4">
              <label htmlFor="payment" className="text-sm text-information">
                Payment Terms
              </label>
              <select
                required
                name="payment"
                id="payment"
                className="py-3 px-4 w-inputs border-[#dfe3fa] border-solid border-[1px] rounded-md dark:bg-dark-primary-500 dark:text-information"
              >
                <option value="Net 1 Day">Net 1 Day</option>
                <option value="Net 7 Day">Net 7 Day</option>
                <option value="Net 14 Day">Net 14 Day</option>
                <option value="Net 30 Day">Net 30 Day</option>
              </select>
            </form>
            <form action="Project Description" className="flex flex-col gap-4">
              <label
                htmlFor="Project Description"
                className="text-sm text-information"
              >
                Project Description
              </label>
              <input
                required
                type="text"
                placeholder="e.g Graphic Design Service"
                name="Project Description"
                id="Project Description"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs rounded-md text-xs font-bold dark:bg-dark-primary-500  dark:text-information"
              />
            </form>
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className="text-lg font-bold text-information">Item List</p>
            <ul className="flex gap-20 text-information text-sm">
              <li>item Name</li>
              <li>Qty.</li>
              <li>Price</li>
              <li>Total</li>
            </ul>
            <div>
              {items.map((item,index) => (
                <Itemlist key={index}/>
              ))}
            </div>

            <button
              className="rounded-2xl text-center w-full p-4 hover:bg-[#DFE3FA] text-bill_button text-xs font-bold"
              onClick={() =>
                dispatch(setItemList([...items, { id: items.length }]))
              }
            >
              + Add New Item
            </button>
          </div>
          <div className="w-full flex justify-between items-center">
            <div>
              <button
                className="h-12 rounded-3xl text-bill_button w-20 text-sm font-bold focus:border-black border-solid border-[1px]"
                onClick={() => dispatch(setShowModal(false))}
              >
                Discard
              </button>
            </div>
            <div className="flex gap-8">
              <button
                className="h-12 rounded-3xl text-bill_button bg-savedraft_button py-2 px-3 text-center text-nowrap text-sm font-bold hover:bg-black "
                onClick={() => {
                  const l=items.length
                  dispatch(
                     
                    setInvoices([
                      ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        status: "draft",
                        street: street,
                        City: city,
                        Post_code: postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                        items:items.map((item )=>({
                          item_name:item.nameItemVlaue,
                          qty:item.qtyValue,
                          price_item:item.priceValue,
                          total: item.qtyValue*item.priceValue,
                        }))
                      },
                    ])
                  );
                  localStorage.setItem(
                    "saveNewData",
                    JSON.stringify([
                      ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        status: "draft",
                        street: street,
                        City: city,
                        Post_code: postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                         items:items.map((item )=>({
                            item_name:item.nameItemVlaue,
                            qty:item.qtyValue,
                            price_item:item.priceValue,
                            total: item.qtyValue*item.priceValue,
                          }))
                        
                      },
                    ])
                  );
                  resetForm();
                  dispatch(setShowModal(false));
                }}
              >
                Save as Draft
              </button>
              <button
                className="h-12 rounded-3xl text-white bg-violet-400 hover:bg-violet-600 py-2 px-3 text-center text-nowrap text-sm font-bold dark:text-indigo-700"
                onClick={() => {
                  dispatch(
                    setInvoices([
                      ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        status: "pending",
                        street: street,
                        City: city,
                        Post_code: postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                        items:items.map((item )=>({
                          item_name:item.nameItemVlaue,
                          qty:item.qtyValue,
                          price_item:item.priceValue,
                          total:item.qtyValue*item.priceValue,
                        }))
                      },
                    ])
                  );
                  localStorage.setItem(
                    "saveNewData",
                    JSON.stringify([
                      ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        status: "pending",
                        street: street,
                        City: city,
                        Post_code: postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                        items:items.map((item )=>({
                          item_name:item.nameItemVlaue,
                          qty:item.qtyValue,
                          price_item:item.priceValue,
                          total:item.qtyValue*item.priceValue,
                        }))
                      },
                    ])
                  );
                  resetForm();
                  dispatch(setShowModal(false));
                }}
              >
                Save & Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
