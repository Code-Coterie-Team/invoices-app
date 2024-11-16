import React from 'react'
import Demo from './components/demo'


const App = ()=> {
  return (
    <div className='flex h-screen'>
      <div className='flex items-center justify-between flex-col w-1/24 bg-[#373a53] h-full
       rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none fixed top-0 bottom-0 left-0'>
        <img src="/src/assets/icon.png" alt="" className='w-24 h-24' />
        <div className='flex flex-col p-7 gap-8 w-full items-center '>
        <img src="/src/assets/moon.svg" alt="" className='w-5 h-5' />
        <div className=' h-[1px] bg-gray-600 w-full'></div>
        <img src="/src/assets/person.jfif" alt="" className='w-10 h-10 rounded-full' />
        </div>
       </div>
       <Demo/>
    </div>
  )
}

export default App 