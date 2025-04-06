import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

function Layout(props) {


const { theme } = useSelector((state) => state.theme);

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
    
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <Sidebar/>
      {props.children}
      </div>

  )
}

export default Layout