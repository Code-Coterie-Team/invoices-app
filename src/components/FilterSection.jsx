import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../features/filterSlice";
const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();
  
  const { rowInvoices } = useSelector((state) => state.invoices);
  const uniqueStatuses = Array.from(new Set(rowInvoices.map(invoice => invoice.status)));

  const handleClickFilter = (value) => {
    if (activeFilter === value) {
      setActiveFilter("");
      setIsToggled(false);
      dispatch(setFilterValue(""));
    } else {
      setActiveFilter(value);
      setIsToggled(true);
      dispatch(setFilterValue(value));
    }
  };

  return (
    <div className="w-48 bg-white p-6 absolute right-20 -bottom-36 flex flex-col h-36 gap-5 rounded-md dark:bg-dark-primary-100 shadow-custom-light">
      {uniqueStatuses.map((status, index) => (
        <div className="flex items-center w-full gap-3" key={index}>
          <div
            className={`bg-gray-200 h-4 w-4 rounded-sm bg-no-repeat bg-cover ${
              activeFilter === status ? "bg-purple-700" : ""
            }`}
            onClick={() => handleClickFilter(status)}
            style={{
              backgroundImage: activeFilter === status && isToggled
                ? "url('/src/assets/icon-check.svg')"
                : "none",
              backgroundSize: "15px",
            }}
          ></div>
          <p className="text-sm font-medium text-black dark:text-dark-primary-1000">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
