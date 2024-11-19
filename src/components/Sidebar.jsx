import React from 'react'

function Sidebar() {
  return (
    <div>
      <div className='flex items-center justify-between flex-col w-24 bg-sidebar
       rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none fixed top-0 bottom-0 left-0'>
        <img src="/src/assets/icon.png" alt="" className='w-24 h-24' />
        <div className='flex flex-col gap-10 w-full items-center '>
        <img src="/src/assets/moon.svg" alt="" className='w-5 h-5 ' />
        <div className=' h-[1px] bg-gray-600 w-full'></div>
        <img src="/src/assets/person.jfif" alt="" className='w-10 h-10 rounded-full relative bottom-4' />
        </div>
       </div>
    </div>

  )
}

export default Sidebar