import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { setSelectRow } from "../features/selectRowSlice";
import { useEffect, useState } from "react";
import { setShowModal } from "../features/modalSlice";
import { setInvoices } from "../features/invoicesSlice";
import clsx from "clsx";
import Layout from "./Layout";

const Reciept = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const {rowInvoices} = useSelector((state)=>state.invoices);

  const { selectRow } = useSelector((state) => state.selectRow);
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const {items} = useSelector((state)=> state.itemList);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {

      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const markAsPaid = () => {
    dispatch(setSelectRow({ ...selectRow, status: "paid" }));
  };

  const deleteInvoice = ()=>{
    const updateInvoice = rowInvoices.filter((rowInvoice)=> rowInvoice.code !== selectRow.code )
    dispatch(setInvoices(updateInvoice));
    localStorage.setItem('saveNewData', JSON.stringify(updateInvoice));

    navigate("/")

  }




  return (
    <Layout>
          <div className="flex h-full w-screen  ">
      <div className="w-screen h-full bg-invoices flex justify-center dark:bg-dark-primary-300">
        <div className="flex flex-col w-7/12 gap-6 h-screen p-16">
          <button
            className="flex gap-10 items-center"
            onClick={() => navigate("/")}
          >
            <div>
              <img
                src="/src/assets/icon-arrow-left..svg"
                alt=""
                className="w-2 h-2 "
              />
            </div>
            <span className="text-sm font-semibold dark:text-dark-primary-1000">Go Back</span>
          </button>
          <div className="w-full p-5 bg-white rounded-md flex justify-between  dark:bg-dark-primary-100">
            <div className="flex gap-3 items-center">
              <span className="text-sm text-information">Status</span>
                <div className={clsx("rounded-lg p-2 w-24 flex gap-3 items-center",{
                  "bg-paid" : selectRow.status === "paid",
                  "bg-pending" : selectRow.status === "pending",
                  "bg-gray-200" : selectRow.status === "draft",
                })}>
                <span className={clsx("text-xs font-medium",{
                  "text-paid_text" : selectRow.status === "paid" , 
                  "text-pending_text" : selectRow.status === "pending",
                  "text-black" : selectRow.status === "draft",
                 
                },
                )}>{selectRow.status}</span>
              </div>
            </div>
            <div className="flex gap-9 p-2 items-center">
              <button className="w-20 text-[#7e88c3] text-sm font-bold rounded-3xl hover:bg-violet-200  p-2"
              onClick={()=>dispatch(setShowModal(true))
              }
              >
                Edit
              </button>
              <button
                className="w-24 bg-delete_button rounded-3xl p-2 hover:bg-[#ff9797] text-white text-sm font-bold"
                onClick={()=>setShowDeleteModal(true)}
              >
                Delete
              </button>
              <button
                className="w-28 p-2 bg-mark_button rounded-3xl text-white text-sm font-bold hover:bg-[#b9a8fe]"
                onClick={markAsPaid}
              >
                Mark as Paid
              </button>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-lg flex flex-col justify-between items-center py-8 px-6 gap-4  dark:bg-dark-primary-100">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-center gap-3">
                <p className="text-lg font-bold dark:text-dark-primary-1000">{selectRow.code}</p>
                <p className="text-information text-base">Re-branding</p>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-information text-sm">
                  {selectRow.street_Client},
                </p>
                <p className="text-information text-sm">
                  {selectRow.City_Client},
                </p>
                <p className="text-information text-sm">
                  {selectRow.Post_code_Client},
                </p>
                <p className="text-information text-sm">
                  {selectRow.Country_Client},
                </p>
              </div>
            </div>
            <div className="flex gap-28 w-full items-start justify-start">
              <div className="flex justify-center gap-28">
                <div className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-information text-base">Invoice Date</p>
                    <p className="text-base font-bold dark:text-dark-primary-1000"> 2021-10-07</p>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-information text-base">Payment Due</p>
                    <p className="text-base font-bold dark:text-dark-primary-1000">{selectRow.date}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-information text-sm ">Bill To</p>
                  <p className="text-base font-bold dark:text-dark-primary-1000">{selectRow.bill_to}</p>
                  <div className="flex flex-col  justify-center">
                    <p className="text-information text-base">
                      {selectRow.street},
                    </p>
                    <p className="text-information text-base">
                      {selectRow.City},
                    </p>
                    <p className="text-information text-base">
                      {selectRow.Post_code},
                    </p>
                    <p className="text-information text-base">
                      {selectRow.Country},
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-information text-base">Sent To</p>
                <p className="text-base font-bold dark:text-dark-primary-1000">{selectRow.Email}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 relative bg-[#f9fafe] items-center w-full rounded-md dark:bg-dark-primary-500">
              <ul className="flex justify-between list-none w-full">
                <li className="flex flex-col gap-8 justify-center items-start">
                  <p className="text-information text-sm">Item Name</p>
                  <p className="text-sm font-bold dark:text-dark-primary-1000">{selectRow.item_name}</p>
                </li>
                <li className="flex flex-col gap-8  justify-center items-start">
                  <p className="text-information text-sm">QTY.</p>
                  <p className="text-sm font-bold dark:text-dark-primary-1000">{selectRow.qty}</p>
                </li>
                <li className="flex flex-col gap-8  justify-center items-start">
                  <p className="text-information text-sm">Price</p>
                  <p className="text-sm font-bold dark:text-dark-primary-1000">{`£ ${selectRow.price_item}`}</p>
                </li>
                <li className="flex flex-col gap-8  justify-center items-start">
                  <p className="text-information text-sm">Total</p>
                  <p className="text-sm font-bold dark:text-dark-primary-1000">{`£ ${selectRow.total}`}</p>
                </li>
              </ul>
              <div className="flex justify-between w-full items-center absolute left-0 right-0 -bottom-20 bg-amount p-7 rounded-b-sm dark:bg-dark-primary-200">
                <p className="text-white text-sm">Amount Due</p>
                <p className="text-3xl text-white font-bold">{`£ ${selectRow.total}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (<div className="w-screen h-full bg-black/30 fixed top-0 left-0">
        <div className="w-[480px] bg-white rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-10 py-16 flex flex-col gap-3">
          <p className="text-2xl font-bold">Confirm Deletion</p>
          <p className="text-sm text-information">
            Are you sure you want to delete invoice #{selectRow.code} This action cannot
            be undone.
          </p>
          <div className="flex gap-2 items-center self-end justify-center">
            <button className="bg-[#f9fafe] rounded-3xl text-sm px-4 py-3 text-[#7e88c3] font-bold hover:bg-indigo-100"
            onClick={()=>setShowDeleteModal(false)}>
              Cancle
            </button>
            <button className="bg-[#ec5757] px-5 py-3 rounded-3xl text-sm text-white font-bold hover:bg-[#ff9797]"
            onClick={deleteInvoice}>
              Delete
            </button>
          </div>
        </div>
      </div>)}

    </div>
    </Layout>

  );
};

export default Reciept;
