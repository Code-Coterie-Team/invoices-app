import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectRow } from "../features/selectRowSlice";
import { setShowModal } from "../features/modalSlice";
import { setInvoices } from "../features/invoicesSlice";
import { setItemList } from "../features/itemSlice";
// import { setItemList } from "../features/itemSlice";

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
const Invoices = () => {
  // const [invoices, setInvoices] = useState([
  //   {
  //     code: "RT3080",
  //     date: "2021-8-18",
  //     bill_to: "Jensen Huang",
  //     price: "1800.9",
  //     status: "paid",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "jensenh@mail.com",
  //     street_Client: "106 Kendell Street",
  //     City_Client: "Sharrington",
  //     Post_code_Client: "NR24 5WQ",
  //     Country_Client: "United Kingdom",
  //     item_name: "Web Design",
  //     qty: "1",
  //     price_item: " 6155.91",
  //     total: " 6155.91",
  //   },
  //   {
  //     code: "XM9141",
  //     date: "2021-8-21",
  //     bill_to: "Alex Grim",
  //     price: "556",
  //     status: "pending",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "alexgrim@mail.com",
  //     street_Client: "84 Church Way",
  //     City_Client: "Bradford",
  //     Post_code_Client: "BD1 9PB",
  //     Country_Client: "United Kingdom",
  //     item_name: "Brand Guidelines",
  //     qty: "1",
  //     price_item: " 1800.9",
  //     total: " 1800.9",
  //   },
  //   {
  //     code: "RG0314",
  //     date: "2021-9-24",
  //     bill_to: "John Morrison",
  //     price: "14002.33",
  //     status: "paid",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "jm@myco.com",
  //     street_Client: "79 Dover Road",
  //     City_Client: "Westhall",
  //     Post_code_Client: "IP19 3PF",
  //     Country_Client: "United Kingdom",
  //     item_name: "Banner Design",
  //     qty: "1",
  //     price_item: "  156",
  //     total: "  156",
  //   },
  //   {
  //     code: "RT2080",
  //     date: "2021-10-11",
  //     bill_to: "Alysa Werner",
  //     price: "102.04",
  //     status: "pending",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "alysa@email.co.uk",
  //     street_Client: "63 Warwick Road",
  //     City_Client: "Carlisle",
  //     Post_code_Client: "CA20 2TG",
  //     Country_Client: "United Kingdom",
  //     item_name: "Logo Sketches",
  //     qty: "1",
  //     price_item: "  102.04",
  //     total: "  102.04",
  //   },
  //   {
  //     code: "AA1449",
  //     date: "2021-10-7",
  //     bill_to: "Mellisa Clarke",
  //     price: "4032.33",
  //     status: "pending",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "mellisa.clarke@example.com",
  //     street_Client: "46 Abbey Row",
  //     City_Client: "Cambridge",
  //     Post_code_Client: "CB5 6EG",
  //     Country_Client: "United Kingdom",
  //     item_name: "New Logo",
  //     qty: "2",
  //     price_item: "  1532.33",
  //     total: "  3064",
  //   },
  //   {
  //     code: "TY9141",
  //     date: "2021-10-01",
  //     bill_to: "Thomas Wayne",
  //     price: "6155.91",
  //     status: "pending",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //     Email: "thomas@dc.com",
  //     street_Client: "",
  //     City_Client: "Gotham",
  //     Post_code_Client: "60457",
  //     Country_Client: "United States of America",
  //     item_name: "Brand Guidelines",
  //     qty: "1",
  //     price_item: "  2500",
  //     total: "  2500",
  //   },
  //   {
  //     code: "FV2353",
  //     date: "2021-11-05",
  //     bill_to: "Anita Wainwright",
  //     price: "3102.04",
  //     status: "pending",
  //     street: "19 Union Terrace",
  //     City: "London",
  //     Post_code: "E1 3EZ",
  //     Country: "United Kingdom",
  //   },
  // ]);

  // const [itemList, setItemList] = useState([]);
 const {items} = useSelector((state)=> state.itemList)
 console.log(items);
  const [qtyValue, setQtyValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [dateVlaue, setDateValue] = useState("");
  const [nameItemVlaue, setNameItemValue] = useState("");
  const [streetClientVlaue, setstreetClientValue] = useState("");
  const [emailVlaue, setEmailValue] = useState("");
  const [nameVlaue, setNameValue] = useState("");
  const [cityVlaue, setCityValue] = useState("");
  const [postCodeVlaue, setPostCodeValue] = useState("");
  const [countryVlaue, setCountryValue] = useState("");
  const [totalVlaue, setTotalValue] = useState("");
  console.log(totalVlaue);
  const [filterValue, setFilterValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [street, setstreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const {rowInvoices} = useSelector((state)=>state.invoices)
  // console.log(rowInvoices);
  const showModal = useSelector((state) => state.showModal);
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeQty = (event) => {
    setQtyValue(event.target.value);
      
  };
  const handleChangePrice = (event) => {
    setPriceValue(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDateValue(event.target.value);
  };
  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeTotal = (event) => {
    setTotalValue(event.target.value);
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
  const handleChangeItemName = (event) => {
    setNameItemValue(event.target.value);
  };
  const resetForm = () => {
    setTotalValue("");
    setNameValue("");
    setDateValue("");
    setQtyValue("");
    setPriceValue("");
  };

  const resetItem = ()=>{
    setQtyValue(0);

  }


  const handleRemoveLastItem = () => {
    if (items.length > 0) {
      dispatch(setItemList(items.slice(0, items.length - 1)));
    }
  };
  const handleSelectRow = (invoice) => {
    dispatch(setSelectRow(invoice));
    navigate("/reciept");
    console.log(invoice);
  };

  const handleClickFilter = (value) => {
    if (activeFilter === value) {
      setActiveFilter(""); 
      setIsToggled(false); 
      setFilterValue("");
    } else {
      setActiveFilter(value); 
      setIsToggled(true); 
      setFilterValue(value);
    }
  };

  const toggle = () => {
    setShowFilter((currentState) => !currentState);
  };

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="flex h-full w-screen">
        <Sidebar />
        <div className="w-screen h-full bg-invoices flex justify-center dark:bg-dark-primary-300">
          <div className="flex flex-col items-center w-6/12 py-20 gap-16 h-full">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-4xl dark:text-dark-primary-1000 ">
                  Invoices
                </h1>
                <span className="text-invoices_text text-sm dark:text-dark-primary-1000">
                  There are 7 total invoices
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center relative">
                <div className="flex gap-2 ">
                  <p className="text-sm font-bold dark:text-dark-primary-1000">
                    Filter by status
                  </p>
                  <div className=" w-3">
                    <img
                      src="/src/assets/icon-arrow-down.a6ed7bfffecda935c666.svg"
                      alt=""
                      onClick={() => toggle()}
                    />
                  </div>
                </div>
                <button
                  className="flex gap-3 bg-button p-2 rounded-3xl items-center hover:bg-violet-400"
                  onClick={() => dispatch(setShowModal(true))}
                >
                  <div className="w-7 h-7 rounded-full bg-white">
                    <img src="/src/assets/download.png" alt="" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    New Invoice
                  </span>
                </button>
                {showFilter && (
                  <div className="w-48 bg-white p-6 absolute right-20 -bottom-36 flex flex-col h-36 gap-5 rounded-md dark:bg-dark-primary-100 shadow-custom-light">
                    <div className="flex items-center w-full gap-3">
                      <div
                        className={`bg-gray-200 h-4 w-4 rounded-sm bg-no-repeat bg-cover ${
                          activeFilter === "draft" ? "bg-purple-700" : ""
                        }`}
                        onClick={() => handleClickFilter("draft")}
                        style={{
                          backgroundImage:
                            activeFilter === "draft" && isToggled
                              ? "url('/src/assets/icon-check.svg')"
                              : "none",
                          backgroundSize:"15px"
                        }}
                      ></div>
                      <p className="text-sm font-medium text-black dark:text-dark-primary-1000">
                        Draft
                      </p>
                    </div>
                    <div className="flex items-center justify-start w-full gap-3">
                      <div
                        className={`bg-gray-200 h-4 w-4 rounded-sm bg-no-repeat bg-cover ${
                          activeFilter === "pending" ? "bg-purple-700" : ""
                        }`}
                        onClick={() => handleClickFilter("pending")}
                        style={{
                          backgroundImage:
                            activeFilter === "pending" && isToggled
                              ? "url('/src/assets/icon-check.svg')"
                              : "none",
                          backgroundSize:"15px"
                        }}
                      ></div>
                      <p className="text-sm font-medium text-black dark:text-dark-primary-1000">
                        Pending
                      </p>
                    </div>
                    <div className="flex items-center justify-start w-full gap-3">
                      <div
                         className={`bg-gray-200 h-4 w-4 rounded-sm bg-no-repeat bg-cover ${
                          activeFilter === "paid" ? "bg-purple-700" : ""
                        }`}
                        onClick={() => handleClickFilter("paid")}
                        style={{
                          backgroundImage:
                            activeFilter === "paid" && isToggled
                              ? "url('/src/assets/icon-check.svg')"
                              : "none",
                          backgroundSize:"15px"
                        }}
                      ></div>
                      <p className="text-sm font-medium text-black dark:text-dark-primary-1000">
                        Paid
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-1 grid-rows-7 gap-y-4">
              {rowInvoices
                .filter((invoice) => {
                  if (filterValue == "") return invoice;
                  return invoice.status === filterValue.toLowerCase();
                })
                .map((invoice, index) => (
                  <div
                    className="w-full bg-white rounded-lg flex justify-between items-center py-8 px-6 hover:border-violet-800 hover:border-solid hover:border-[1px] dark:bg-dark-primary-100 "
                    key={index}
                    onClick={() => handleSelectRow(invoice)}
                  >
                    <div className="flex gap-7 items-center">
                      <div>
                        <span className="text-information">#</span>
                        <span className="text-sm font-medium dark:text-dark-primary-1000">
                          {invoice.code}
                        </span>
                      </div>
                      <span className="text-information text-sm">
                        {invoice.date}
                      </span>
                      <span className="text-information text-sm">
                        {invoice.bill_to}
                      </span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <p className="text-lg font-bold  dark:text-dark-primary-1000">{`£ ${invoice.total}`}</p>
                      <div
                        className={`${
                          invoice.status === "paid"
                            ? "bg-paid"
                            : invoice.status === "pending"
                            ? "bg-pending"
                            : "bg-gray-200"
                        } rounded-lg p-2 w-24 flex gap-3 items-center`}
                      >
                        <div
                          className={`${
                            invoice.status === "paid"
                              ? "bg-paid_text"
                              : invoice.status === "pending"
                              ? "bg-pending_text"
                              : "bg-black"
                          } w-2 h-2 rounded-full`}
                        ></div>
                        <span
                          className={`${
                            invoice.status === "paid"
                              ? "text-paid_text"
                              : invoice.status === "pending"
                              ? "text-pending_text"
                              : "text-black"
                          } text-xs font-medium`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                      <div>
                        <img
                          src="/src/assets/icon-arrow-right.9e19be64001504a17c14.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="w-screen h-full bg-black/40 fixed top-0 left-0">
          <Sidebar />
          <div className="w-6/12 h-full bg-white rounded-2xl flex flex-col px-36 py-14 gap-20 overflow-auto dark:bg-dark-primary-400">
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
                  <label
                    htmlFor="Post Code"
                    className="text-sm text-information"
                  >
                    Post Code
                  </label>
                  <input
                  value={postCode}
                  onChange = {handleChangePostCode}
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
                <input
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
                  <label
                    htmlFor="Post Code"
                    className="text-sm text-information"
                  >
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
              <form
                action="Project Description"
                className="flex flex-col gap-4"
              >
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
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex mb-3 items-center justify-between "
                  >
                    <input
                      type="text"
                      className=" w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm dark:bg-dark-primary-500  dark:text-information"
                      value={nameItemVlaue}
                      onChange={handleChangeItemName}
                    />
                    <input
                      type="text"
                      className=" w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm dark:bg-dark-primary-500 dark:text-information"
                      value={qtyValue}
                      onChange={handleChangeQty}
                    />
                    <input
                      type="text"
                      className=" w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm dark:bg-dark-primary-500 dark:text-information"
                      value={priceValue}
                      onChange={handleChangePrice}
                    />
                    <input
                      type="text"
                      className=" w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm dark:bg-dark-primary-500 dark:text-information"
                      value={qtyValue*priceValue}
                      onChange={handleChangeTotal}
                    />
                    <div className="w-4 h-5">
                      <img
                        src="/src/assets/icon-delete.svg"
                        alt=""
                        className="hover:bg-red-600"
                        onClick={handleRemoveLastItem}
                      />
                    </div>
                  </div>
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
                    dispatch(setInvoices(  [
                       ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        price: totalVlaue,
                        status: "draft",
                        street: street,
                        City: city,
                        Post_code:postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                        item_name: nameItemVlaue,
                        qty: qtyValue,
                        price_item: priceValue,
                        total: totalVlaue,
                      },
                    ]));
                    resetForm();
                    dispatch(setShowModal(false));
                  }}
                >
                  Save as Draft
                </button>
                <button
                  className="h-12 rounded-3xl text-white bg-save_button py-2 px-3 text-center text-nowrap text-sm font-bold dark:text-indigo-700"
                  onClick={() => {
                    dispatch(setInvoices([
                       ...rowInvoices,
                      {
                        code: generateRandomId(6),
                        date: dateVlaue,
                        bill_to: nameVlaue,
                        price: priceValue,
                        status: "pending",
                        street: street,
                        City: city,
                        Post_code:postCode,
                        Country: country,
                        Email: emailVlaue,
                        street_Client: streetClientVlaue,
                        City_Client: cityVlaue,
                        Post_code_Client: postCodeVlaue,
                        Country_Client: countryVlaue,
                        item_name: nameItemVlaue,
                        qty: qtyValue,
                        price_item: priceValue,
                        total: totalVlaue,
                      },
                    ]));
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
      )}
    </>
  );
};

export default Invoices;
