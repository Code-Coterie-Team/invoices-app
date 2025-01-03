import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectRow } from "../features/selectRowSlice";
import { setShowModal } from "../features/modalSlice";
import { setInvoices } from "../features/invoicesSlice";
import { setItemList } from "../features/itemSlice";
import Itemlist from "./Itemlist";
import Layout from "./layout";
import clsx from "clsx";


const Invoices = () => {
  const { rowInvoices } = useSelector((state) => state.invoices);
  const { items } = useSelector((state) => state.itemList);
  const showModal = useSelector((state) => state.showModal);
  const [dateVlaue, setDateValue] = useState("");
  const [nameItemVlaue] = useState("");
  const [streetClientVlaue, setstreetClientValue] = useState("");
  const [emailVlaue, setEmailValue] = useState("");
  const [nameVlaue, setNameValue] = useState("");
  const [cityVlaue, setCityValue] = useState("");
  const [postCodeVlaue, setPostCodeValue] = useState("");
  const [countryVlaue, setCountryValue] = useState("");
  const [qtyValue, setQtyValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [totalVlaue, setTotalValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [street, setstreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
  };

  const handleSelectRow = (invoice) => {
    dispatch(setSelectRow(invoice));
    navigate("/reciept");
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

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const storeData = localStorage.getItem("saveNewData");
    if (storeData) {
      const parsedData = storeData ? JSON.parse(storeData) : [];

      dispatch(setInvoices(parsedData));
    }
  }, [dispatch]);

  

  

  return (

    <Layout>
            <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-screen h-full bg-invoices flex justify-center dark:bg-dark-primary-300">
          <div className="flex flex-col items-center w-6/12 py-20 gap-16 h-full">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-4xl dark:text-dark-primary-1000 ">
                  Invoices
                </h1>
                <span className="text-invoices_text text-sm dark:text-dark-primary-1000">
                  There are {rowInvoices.length} total invoices
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center relative">
                <div className="flex gap-2 items-center">
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
                          backgroundSize: "15px",
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
                          backgroundSize: "15px",
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
                          backgroundSize: "15px",
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
                      <p className="text-lg font-bold  dark:text-dark-primary-1000">{`£ ${
                        invoice.price_item * invoice.qty}`}</p>
                        <div
                        className={clsx(" rounded-lg p-2 w-24 flex gap-3 items-center",{
                          "bg-paid" : invoice.status === "paid",
                          "bg-pending" : invoice.status === "pending",
                          "bg-gray-200" : invoice.status === "draft"
                        })}
                      >
                        <span
                          className={clsx("text-xs font-medium",{
                            "text-paid_text" : invoice.status === "paid",
                            "text-pending_text" : invoice.status === "pending",
                            "text-black" : invoice.status === "draft",})}
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
                  <label
                    htmlFor="Post Code"
                    className="text-sm text-information"
                  >
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
                  <Itemlist key={item.id} qtyValue={qtyValue} priceValue={priceValue} totalVlaue={totalVlaue}/>
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
                          item_name: nameItemVlaue,
                          qty: qtyValue,
                          price_item: priceValue,
                          total: totalVlaue,
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
                          item_name: nameItemVlaue,
                          qty: qtyValue,
                          price_item: priceValue,
                          total: totalVlaue,
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
                          item_name: nameItemVlaue,
                          qty: qtyValue,
                          price_item: priceValue,
                          total: totalVlaue,
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
                          item_name: nameItemVlaue,
                          qty: qtyValue,
                          price_item: priceValue,
                          total: totalVlaue,
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
      )}
    </Layout>

  );
};

export default Invoices;
