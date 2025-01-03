import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Layout from './layout';

const Demo = ()=> {
  
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {

      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


const navigate = useNavigate();
  return (

    <Layout>
      <div className='flex h-screen'>
      <div className='w-full bg-black/40 h-full dark:bg-dark-primary-200'>
        <div className='w-[480px] h-72 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-lg flex flex-col items-center p-12 gap-4 dark:bg-dark-primary-100'>
            <img src="/src/assets/icon.png" alt="" className='w-24 h-24' />
            <span className='text-xs text-[#888eb0]'>View a Demo version or login</span>
            <button className='rounded-3xl bg-demo text-demo_text text-xs py-4 px-6 
            font-bold hover:bg-indigo-100' onClick={()=>navigate("/")}>View as Demo</button>
            </div>
    </div> 
    </div>
    </Layout>


  )
}


export default Demo