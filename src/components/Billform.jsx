import  { useState } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { setShowModal } from "../features/modalSlice";


function Billform() {
  const [itemList, setItemList] = useState([]);
  const dispatch = useDispatch();

  return (
<>
    <div className="flex h-full w-screen">
        <Sidebar />
        <div className="w-screen h-full bg-black/40" onClick={()=>dispatch(setShowModal(false))}>
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
                  <label htmlFor="Post Code" className="text-sm text-information">
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
                  <label htmlFor="Post Code" className="text-sm text-information">
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
              <form action="Project Description" className="flex flex-col gap-4">
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
            <div key={item.id} className="flex mb-3 items-center justify-between ">  
              <input type="text" className = ' w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm' value="New Item"/>  
              <input type="text" className = ' w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm' value="0.0"/>  
              <input type="text" className = ' w-20 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm'value="0.0" />  
              <input type="text" className = ' w-28 outline-none border-[#dfe3fa] border-solid border-[1px] py-2 px-4  rounded-md font-bold text-sm' value="0.0"/> 
              <div className="w-4 h-5"><img src="/src/assets/icon-delete.svg" alt=""/></div> 
            </div>  
          ))}  
        </div> 
  
              <button
                className="rounded-2xl text-center w-full p-4 hover:bg-[#DFE3FA] text-bill_button text-xs font-bold"
                onClick={() =>
                  setItemList([...itemList , {id:itemList.length}])
                }
              >
                + Add New Item
              </button>
              
            </div>
            <div className="w-full flex justify-between items-center">
              <div><button className="h-12 rounded-3xl text-bill_button w-20 text-sm font-bold focus:border-black border-solid border-[1px]">Discard</button></div>
              <div className="flex gap-8">
                <button className="h-12 rounded-3xl text-bill_button bg-savedraft_button py-2 px-3 text-center text-nowrap text-sm font-bold hover:bg-black">Save as Draft</button>
                <button className="h-12 rounded-3xl text-white bg-save_button py-2 px-3 text-center text-nowrap text-sm font-bold">Save & Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
}


export default Billform;
