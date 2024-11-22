import { useState } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
const Invoices = () => {
  const [itemList, setItemList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { invoices } = useSelector((state) => state.invoices);

  return (
    <>
      <div className="flex h-full w-screen">
        <Sidebar className="z-10" />
        <div className="w-screen h-full bg-invoices flex justify-center">
          <div className="flex flex-col items-center w-6/12 py-20 gap-16 h-full">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-4xl ">Invoices</h1>
                <span className="text-invoices_text text-sm">
                  There are 7 total invoices
                </span>
              </div>
              <div className="flex gap-11 items-center">
                <div className="flex gap-2 ">
                  <p className="text-sm font-bold">Filter by status</p>
                  <div className=" w-3">
                    <img
                      src="/src/assets/icon-arrow-down.a6ed7bfffecda935c666.svg"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  className="flex gap-3 bg-button p-2 rounded-3xl items-center"
                  onClick={() => setShowModal(true)}
                >
                  <div className="w-7 h-7 rounded-full bg-white">
                    <img src="/src/assets/download.png" alt="" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    New Invoice
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-1 grid-rows-7 gap-y-4">
              {invoices.map((invoice, index) => (
                <div
                  className="w-full bg-white rounded-lg flex justify-between items-center py-8 px-6"
                  key={index}
                >
                  <div className="flex gap-7 items-center">
                    <div>
                      <span className="text-information">#</span>
                      <span className="text-sm font-medium">
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
                    <p className="text-lg font-bold">{invoice.price}</p>
                    <div
                      className={`${
                        invoice.status === "paid" ? "bg-paid" : "bg-pending"
                      } rounded-lg p-2 w-24 flex gap-3 items-center`}
                    >
                      <div
                        className={`${
                          invoice.status === "paid"
                            ? "bg-paid_text"
                            : "bg-pending_text"
                        } w-2 h-2 rounded-full`}
                      ></div>
                      <span
                        className={`${
                          invoice.status === "paid"
                            ? "text-paid_text"
                            : "text-pending_text"
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
        <div
          className="w-screen h-full bg-black/40 fixed top-0 left-0"
          onClick={() => setShowModal(false)}
        >
          <Sidebar />
          <div className="w-6/12 h-full bg-white rounded-2xl flex flex-col px-36 py-14 gap-20">
            <div className="w-full flex flex-col gap-5">
              <span className="text-sm text-Billform font-bold">Bill Form</span>
              <form action="Street" className="flex flex-col gap-4">
                <label htmlFor="Street" className="text-sm text-information">
                  Street Address
                </label>
                <input
                  required
                  type="text"
                  name="Street"
                  id="Street"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold "
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
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
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
                    required
                    type="text"
                    name="Post Code"
                    id="Post Code"
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
                  />
                </form>
                <form action="Street" className="flex flex-col gap-2">
                  <label htmlFor="Country" className="text-sm text-information">
                    Country
                  </label>
                  <input
                    required
                    type="text"
                    name="Country"
                    id="Country"
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
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
                  type="text"
                  name="Client’s Name"
                  id="Client’s Name"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold "
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
                  name="Client’s Email"
                  id="Client’s Email"
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold "
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
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold "
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
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
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
                    required
                    type="text"
                    name="Post Code"
                    id="Post Code"
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
                  />
                </form>
                <form action="Street" className="flex flex-col gap-2">
                  <label htmlFor="Country" className="text-sm text-information">
                    Country
                  </label>
                  <input
                    required
                    type="text"
                    name="Country"
                    id="Country"
                    className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-36 box-border rounded-md text-xs font-bold "
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
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs rounded-md text-xs font-bold "
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
                  className="py-3 px-4 w-inputs border-[#dfe3fa] border-solid border-[1px] rounded-md "
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
                  className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs rounded-md text-xs font-bold "
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
                {itemList.map((item) => (
                  <div
                    key={item.id}
                    className="flex mb-3 items-center justify-between "
                  >
                    <input
                      type="text"
                      className=" w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm"
                      value="New Item"
                    />
                    <input
                      type="text"
                      className=" w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm"
                      value="0.0"
                    />
                    <input
                      type="text"
                      className=" w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm"
                      value="0.0"
                    />
                    <input
                      type="text"
                      className=" w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm"
                      value="0.0"
                    />
                    <div className="w-4 h-5">
                      <img src="/src/assets/icon-delete.svg" alt="" />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="rounded-2xl text-center w-full p-4 hover:bg-[#DFE3FA] text-bill_button text-xs font-bold"
                onClick={() =>
                  setItemList([...itemList, { id: itemList.length }])
                }
              >
                + Add New Item
              </button>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>
                <button className="h-12 rounded-3xl text-bill_button w-20 text-sm font-bold focus:border-black border-solid border-[1px]">
                  Discard
                </button>
              </div>
              <div className="flex gap-8">
                <button className="h-12 rounded-3xl text-bill_button bg-savedraft_button py-2 px-3 text-center text-nowrap text-sm font-bold hover:bg-black">
                  Save as Draft
                </button>
                <button className="h-12 rounded-3xl text-white bg-save_button py-2 px-3 text-center text-nowrap text-sm font-bold">
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
