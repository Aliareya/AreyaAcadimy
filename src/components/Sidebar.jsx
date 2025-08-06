import React from 'react';
import { Icon } from '@iconify/react';
import MenuCart from './MenuCart';
import { useStaticData } from '../contex/StaticDataContext';

function Sidebar({onToggleSidebar}) {
  const {Menu} = useStaticData();
  return (
    <div className='w-full'>
      <div className='w-full h-16 border-b border-gray-400 flex justify-between items-center px-5'>
        <h1 className='text-xl lg:text-xl md:text-base sm:text-base italic font-bold'>Areya Acadimy</h1>
        <span onClick={onToggleSidebar} className='hidden md:block sm:block'>
          <Icon icon="ri:close-fill" width="24" height="24"  style={{color: '#a9410b'}} />
        </span>
      </div>
      <div className='w-full max-h-[ceil(100%-64px)] lg:h-[400px] md:h-[400px] sm:h-[500px] xl:overflow-y-auto px-2 mt-4 flex flex-col gap-2 overflow-y-scroll'>
        {Menu.map((menu , index)=>{
          return(
            <MenuCart menu={menu} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar