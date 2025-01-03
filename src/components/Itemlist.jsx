import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItemList } from '../features/itemSlice';
import { setInvoices } from '../features/invoicesSlice';

const Itemlist = ()=> {
    const [qtyValue, setQtyValue] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [nameItemVlaue, setNameItemValue] = useState("");
    const {items} = useSelector((state)=> state.itemList);
    const dispatch = useDispatch();

    
  const handleChangeQty = (event) => {
    setQtyValue(event.target.value);
      
  };
  const handleChangePrice = (event) => {
    setPriceValue(event.target.value);
  };
  const handleChangeItemName = (event) => {
    setNameItemValue(event.target.value);
  };
  const handleRemoveLastItem = () => {
    if (items.length > 0) {
      dispatch(setItemList(items.slice(0, items.length - 1)));
    }
  };
  

  const totalVlaue = qtyValue*priceValue;

// useEffect(()=>{
//   dispatch(setInvoices(prev)=>)
// },[])

  return (
    
    <div
    
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
      value={totalVlaue}
    />
    <div className="w-4 h-5">
      {/* svg */}
      <img
        src="/src/assets/icon-delete.svg"
        alt=""
        className="hover:bg-red-600"
        onClick={handleRemoveLastItem}
      />
    </div>
  </div>
  )
}

export default Itemlist