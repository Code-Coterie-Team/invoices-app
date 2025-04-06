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
    <div>
      <div className=' flex items-center justify-between md:flex-col w-full md:w-24 h-16 md:h-full bg-sidebar
       rounded-tl-none md:rounded-tr-2xl md:rounded-br-2xl rounded-bl-none fixed  top-0 right-0 md:bottom-0 md:left-0'>
        <div><img src="/icon.png" alt="" className='w-16 h-16 md:w-24 md:h-24' /></div>
        <div className='flex md:flex-col gap-10 md:w-full items-center pr-6 md:pr-0 '>
        <img 
            src={theme === "dark" ? "/moon.svg" : "/icon-sun.svg"}
            onClick={toggleTheme} 
            alt="" 
            className='w-5 h-5 cursor-pointer'
          />
        <div className=' h-[1px] bg-gray-600 w-full'></div>
        <img src="/person.jpg" alt="" className='w-10 h-10 rounded-full md:relative md:bottom-4' />
        </div>
       </div>
    </div>

  )
}
export default Sidebar