import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Reciept = () => {
  const navigate = useNavigate();

  const { invoices } = useSelector((state) => state.invoices);
  return (
    <div className="flex h-full w-screen">
      <Sidebar />
      <div className="w-screen h-screen bg-invoices flex justify-center">
        <div className="flex flex-col w-6/12 gap-16 h-screen p-16">
          <button className="flex gap-10 items-center" onClick={()=>navigate("/")}>
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
            <div className="flex gap-3">
              <span className="text-sm text-information">Status</span>
              <div className={`${invoices.status === "paid" ? "bg-paid" : "bg-pending"} rounded-lg p-2 w-24 flex gap-3 items-center`}>
                      <div className={`${invoices.status === "paid"? "bg-paid_text": "bg-pending_text"} w-2 h-2 rounded-full`}></div>
                      <span className={`${invoices.status === "paid"? "text-paid_text": "text-pending_text"} text-xs font-medium`}>
                        {invoices.status}
                      </span>
                    </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
