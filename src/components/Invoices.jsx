import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { setShowModal } from '../features/modalSlice'
const Invoices = () => {
  const [invoices,setInvoices] = useState([
    {
      code : "RT3080",
      date : "2021-8-18",
      bill_to : "Jensen Huang",
      price : "£ 1800.9",
      status : "paid"
    },
    {
      code : "XM9141",
      date : "2021-8-21",
      bill_to : "Alex Grim",
      price : "£ 556",
      status : "pending"
    },
    {
      code : "RG0314",
      date : "2021-9-24",
      bill_to : "John Morrison",
      price : "£ 14002.33",
      status : "paid"
    },
      {
      code : "RT2080",
      date : "2021-10-11",
      bill_to : "Alysa Werner",
      price : "£ 102.04",
      status : "pending"
    },
    {
      code : "AA1449",
      date : "2021-10-7",
      bill_to : "Mellisa Clarke",
      price : "£ 4032.33",
      status : "pending"
    },
    {
      code : "TY9141",
      date : "2021-10-01",
      bill_to : "Thomas Wayne",
      price : "£ 6155.91",
      status : "pending"
    },
    {
      code : "FV2353",
      date : "2021-11-05",
      bill_to : "Anita Wainwright",
      price : "£ 3102.04",
      status : "pending"
    }
  ])

  const dispatch = useDispatch();
  const isShowModal = useSelector((state)=>state.modal.showModal)
  return (
    <div className='flex h-full w-screen'>

      <Sidebar/>

      <div className='w-screen h-full bg-invoices flex justify-center'>
      <div className='flex flex-col items-center w-6/12 py-20 gap-16 h-full'>
      <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-4xl '>Invoices</h1>
                <span className='text-invoices_text text-sm'>There are 7 total invoices</span>
            </div>
            <div className='flex gap-11 items-center'>
                <div className='flex gap-2 '>
                <p className='text-sm font-bold'>Filter by status</p>
                <div className=' w-3'>
                  <img src="/src/assets/icon-arrow-down.a6ed7bfffecda935c666.svg" alt="" />
                </div>
                </div>
                <button className='flex gap-3 bg-button p-2 rounded-3xl items-center' onClick={()=>{dispatch(setShowModal(true))}}>
                  <div className='w-7 h-7 rounded-full bg-white'>
                    <img src="/src/assets/download.png" alt="" />
                    </div>
                  <span className='text-white text-sm font-medium'>New Invoice</span>
                    </button>
            </div>
        </div>
        <div className='w-full h-full grid grid-cols-1 grid-rows-7 gap-y-4'>
          {invoices.map((invoice,index)=>(
                    <div className='w-full bg-white rounded-lg flex justify-between items-center py-8 px-6' key={index}>
                      <div className='flex gap-7 items-center'>
                        <div><span className='text-information'>#</span><span className='text-sm font-medium'>{invoice.code}</span></div>
                        <span className='text-information text-sm'>{invoice.date}</span>
                        <span className='text-information text-sm'>{invoice.bill_to}</span>
                      </div>
                      <div className='flex gap-12 items-center'>
                        <p className='text-lg font-bold'>{invoice.price}</p>
                        <div className={`${invoice.status === "paid" ? "bg-paid" : "bg-pending"} rounded-lg p-2 w-24 flex gap-3 items-center`}>
                          <div className={`${invoice.status === "paid" ? "bg-paid_text" : "bg-pending_text"} w-2 h-2 rounded-full`}></div>
                          <span className={`${invoice.status === "paid" ? "text-paid_text" : "text-pending_text"} text-xs font-medium`}>{invoice.status}</span>
                        </div>
                        <div><img src="/src/assets/icon-arrow-right.9e19be64001504a17c14.svg" alt="" /></div>

                      </div>

                    </div>
          ))}


        </div>
      </div>

    
    </div>

    </div>

  )
}

export default Invoices