import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectRow } from "../features/selectRowSlice";
import { setShowModal } from "../features/modalSlice";
import { setInvoices } from "../features/invoicesSlice";
import clsx from "clsx";
import Modal from "./Modal";
import FilterSection from "./FilterSection";

const Invoices = () => {
  const { rowInvoices } = useSelector((state) => state.invoices);
  const { value } = useSelector((state) => state.filterValue);
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSelectRow = (invoice) => {
    dispatch(setSelectRow(invoice));
    navigate("/reciept");
  };

  const toggle = () => {
    setShowFilter((currentState) => !currentState);
  };

  const showModal = useSelector((state) => state.showModal);

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
    <>
      <div className="w-full h-full bg-invoices flex justify-center dark:bg-dark-primary-300">
        <div className="flex flex-col items-center w-full md:w-6/12 py-20 gap-16 h-full">
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
                    src="/icon-arrow-down.a6ed7bfffecda935c666.svg"
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
                  <img src="/download.png" alt="" />
                </div>
                <span className="text-white text-sm font-medium">
                  New Invoice
                </span>
              </button>

              {showFilter && <FilterSection />}
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-1 grid-rows-7 gap-y-4">
            {rowInvoices
              .filter((invoice) => {
                if (value == "") return invoice;
                return invoice.status === value.toLowerCase();
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
                         invoice.items?.reduce((sum,item)=>sum+(item.total||0),0)
                    }`}</p>
                    <div
                      className={clsx(
                        " rounded-lg p-2 w-24 flex gap-3 items-center",
                        {
                          "bg-paid": invoice.status === "paid",
                          "bg-pending": invoice.status === "pending",
                          "bg-gray-200": invoice.status === "draft",
                        }
                      )}
                    >
                      <span
                        className={clsx("text-xs font-medium", {
                          "text-paid_text": invoice.status === "paid",
                          "text-pending_text": invoice.status === "pending",
                          "text-black": invoice.status === "draft",
                        })}
                      >
                        {invoice.status}
                      </span>
                    </div>
                    <div>
                      <img
                        src="/icon-arrow-right.9e19be64001504a17c14.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default Invoices;
