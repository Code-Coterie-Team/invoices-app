import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";

const Sidebar = ()=> {
  const dispatch = useDispatch();


  const { theme } = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
  };


  return (
    <div className="relative z-20">
      <div className='flex items-center justify-between flex-col w-24 bg-sidebar
       rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none fixed top-0 bottom-0 left-0'>
        <img src="/icon.png" alt="" className='w-24 h-24' />
        <div className='flex flex-col gap-10 w-full items-center '>
        <img 
            src={theme === "dark" ? "/moon.svg" : "/icon-sun.svg"}
            onClick={toggleTheme} 
            alt="" 
            className='w-5 h-5 cursor-pointer'
          />
        <div className=' h-[1px] bg-gray-600 w-full'></div>
        <img src="/person.jpg" alt="" className='w-10 h-10 rounded-full relative bottom-4' />
        </div>
       </div>
    </div>

  )
}
export default Sidebar