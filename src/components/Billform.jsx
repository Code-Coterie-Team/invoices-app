import React from "react";
import Sidebar from "./Sidebar";

function Billform() {
  return (
    <div className="flex h-full w-screen">
      <Sidebar />
      <div className="w-screen h-full bg-black bg-opacity-40">
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
              <label htmlFor="Client’s Name" className="text-sm text-information">
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
              <label htmlFor="Client’s Email" className="text-sm text-information">
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
              <label htmlFor="Street" className="text-sm text-information">
              Invoice Date
              </label>
              <input
                required
                type="date"
                name="Invoice Date"
                id="Invoice Date"
                className="outline-none border-[#dfe3fa] border-solid border-[1px] py-3 px-4 w-inputs box-border rounded-md text-xs font-bold "
              />
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Billform;
