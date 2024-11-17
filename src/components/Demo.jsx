import React from 'react'

const Demo = ()=> {
  return (
    <div className='w-screen bg-black bg-opacity-40 h-full '>
        <div className='w-[480px] h-72 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-lg flex flex-col items-center p-12 gap-4 '>
            <img src="/src/assets/icon.png" alt="" className='w-24 h-24' />
            <span className='text-xs text-[#888eb0]'>View a Demo version or login</span>
            <button className='rounded-3xl bg-demo text-demo_text text-xs py-4 px-6 
            font-bold hover:bg-indigo-100'>View as Demo</button>

         </div>
    </div> )
}

export default Demo