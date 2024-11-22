import Sidebar from "./Sidebar"

const Reciept = ()=> {
  return (
    <div className="w-screen h-full flex">
        <Sidebar/>
        <div className="w-screen h-full bg-invoices flex justify-center">
          <div className="w-10/12 flex flex-col">
          <div className="w-2 h-1"><img src="/src/assets/icon-arrow-left..svg" alt="" /></div>
          <span></span>
          </div>
        </div>

    </div>
  )
}

export default Reciept