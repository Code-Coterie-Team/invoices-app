import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Reciept = () => {
  const navigate = useNavigate();

  const { selectRow } = useSelector((state) => state.selectRow);
  return (
    <div className="flex h-full w-screen">
      <Sidebar />
      <div className="w-screen h-full bg-invoices flex justify-center">
        <div className="flex flex-col w-7/12 gap-16 h-screen p-16">
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
            <span className="text-sm font-semibold">Go Back</span>
          </button>
          <div className="w-full p-5 bg-white rounded-md flex justify-between">
            <div className="flex gap-3 items-center">
              <span className="text-sm text-information">Status</span>
              <div
                className={`${
                  selectRow.status === "paid" ? "bg-paid" : "bg-pending"
                } rounded-lg p-2 w-24 flex gap-3 items-center`}
              >
                <div
                  className={`${
                    selectRow.status === "paid"
                      ? "bg-paid_text"
                      : "bg-pending_text"
                  } w-2 h-2 rounded-full`}
                ></div>
                <span
                  className={`${
                    selectRow.status === "paid"
                      ? "text-paid_text"
                      : "text-pending_text"
                  } text-xs font-medium`}
                >
                  {selectRow.status}
                </span>
              </div>
            </div>
            <div className="flex gap-9 p-2 items-center">
              <button className="w-20 text-[#7e88c3] text-sm font-bold rounded-3xl hover:bg-violet-200 ">
                Edit
              </button>
              <button className="w-24 bg-delete_button rounded-3xl p-2 hover:bg-[#ff9797] text-white text-sm font-bold">
                Delete
              </button>
              <button className="w-28 p-2 bg-mark_button rounded-3xl text-white text-sm font-bold hover:bg-[#b9a8fe]">
                Mark as Paid
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 gap-10 bg-white w-full rounded-md items-start h-screen">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-center gap-3">
                <p className="text-lg font-bold">{selectRow.code}</p>
                <p className="text-information text-base">Re-branding</p>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-information text-sm">{selectRow.street_Client},</p>
                <p className="text-information text-sm">{selectRow.City_Client},</p>
                <p className="text-information text-sm">{selectRow.Post_code_Client},</p>
                <p className="text-information text-sm">{selectRow.Country_Client},</p>
              </div>
            </div>
            <div className="flex gap-28 w-full items-start justify-start">
              <div className="flex justify-center gap-28">
                <div className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-information text-base">Invoice Date</p>
                    <p className="text-base font-bold"> 2021-10-07</p>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-information text-base">Payment Due</p>
                    <p className="text-base font-bold">{selectRow.date}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-information text-sm">Bill To</p>
                  <p className="text-base font-bold">{selectRow.bill_to}</p>
                  <div className="flex flex-col  justify-center">
                    <p className="text-information text-base">{selectRow.street},</p>
                    <p className="text-information text-base">{selectRow.City},</p>
                    <p className="text-information text-base">{selectRow.Post_code},</p>
                    <p className="text-information text-base">{selectRow.Country},</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-information text-base">Sent To</p>
                <p className="text-base font-bold">{selectRow.Email}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 relative bg-[#f9fafe] items-center w-full">
              <ul className="flex justify-between list-none items-center">
                <li className="flex flex-col gap-8 relative justify-center">
                  <p></p>
                  <p></p>
                  <p></p>
                </li>
                <li className="flex flex-col gap-8 relative justify-center"></li>
                <li className="flex flex-col gap-8 relative justify-center"></li>
                <li className="flex flex-col gap-8 relative justify-center"></li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
