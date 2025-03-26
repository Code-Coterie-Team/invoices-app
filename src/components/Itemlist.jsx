import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemList } from "../features/itemSlice";
import { setInvoices } from "../features/invoicesSlice";

const Itemlist = () => {
  const { items } = useSelector((state) => state.itemList);
  const dispatch = useDispatch();
  const lastItem =
    items.length > 0
      ? items[items.length - 1]
      : { key: "", nameItemVlaue: "New Item", qtyValue: 0.0, priceValue: 0 };

  const [qtyValue, setQtyValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [nameItemVlaue, setNameItemValue] = useState("New Item");

  const updateItem = (updateItem) => {
    const updateItems = [...items];
    updateItems[updateItems.length - 1] = updateItem;
    dispatch(setItemList(updateItems));
  };
  const handleChangeQty = (event) => {
    const newQty = parseFloat(event.target.value) || 0;
    setQtyValue(newQty);
    updateItem({ ...lastItem, qtyValue: newQty });
  };
  const handleChangePrice = (event) => {
    const newPrice = parseFloat(event.target.value) || 0;
    setPriceValue(newPrice);
    updateItem({ ...lastItem, priceValue: newPrice });
  };
  const handleChangeItemName = (event) => {
    const newName = event.target.value;
    setNameItemValue(newName);
    updateItem({ ...lastItem, nameItemVlaue: newName });
  };
  const handleRemoveLastItem = () => {
    if (items.length > 0) {
      dispatch(setItemList(items.slice(0, items.length - 1)));
    }
  };

  const totalVlaue = qtyValue * priceValue;

  // useEffect(()=>{
  //   dispatch(setInvoices(prev)=>)
  // },[])

  return (
    <div className="flex mb-3 items-center justify-between ">
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
        value={totalVlaue}
      />
      <div className="w-4 h-5">
        {/* svg */}
        <img src="/icon-delete.svg" alt="" onClick={handleRemoveLastItem} />
      </div>
    </div>
  );
};

export default Itemlist;
