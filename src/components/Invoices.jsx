import React from 'react'

function Invoices() {
  return (
    <div className='w-screen h-full flex flex-col items-center bg-invoices'>
        <div className='flex justify-between py-20 w-6/12'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-4xl '>Invoices</h1>
                <span className='text-invoices_text text-sm'>There are 7 total invoices</span>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-2 '>
                <p className='text-sm font-bold'>Filter by status</p>
                <div className='bg-custom-image w-3 bg-no-repeat '></div>
                </div>
                <button>add invoice</button>
            </div>
        </div>
    
    </div>
  )
}

export default Invoices