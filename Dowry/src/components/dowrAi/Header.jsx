import React, { useState } from 'react'

const Header = () => {
  const [active,setActive] = useState("DowrAi");
  return (
    <div className='h-16 flex justify-between items-center px-7 shadow-lg'>
      <div>
        <div className='font-bold text-[27px]'>4<span className='text-red-600'>0</span>4<span className='text-red-600'>S</span>umi<span className='text-red-600'>t</span></div>
      </div>
      <div>
        <ul className="flex gap-9 text-[17px]">
          <li className={`hover:border-b-2 hover:border-blue-400 hover:text-blue-400 hover:cursor-pointer ${active === "Vision" ? "border-b-2 border-blue-400 text-blue-400" : "" }`}         
          onClick={()=> setActive("Vision") }>Vision</li>
          <li className={`hover:border-b-2 hover:border-blue-400 hover:text-blue-400 hover:cursor-pointer ${active === "DowrAi" ? "border-b-2 border-blue-400 text-blue-400" : "" }`}
          onClick={()=> setActive("DowrAi") }>DowrAi</li>
          <li className={`hover:border-b-2 hover:border-blue-400 hover:text-blue-400 hover:cursor-pointer ${active === "Contact" ? "border-b-2 border-blue-400 text-blue-400" : "" }`}
          onClick={()=> setActive("Contact") }>Contact Anupam Mittal</li>
       </ul>
      </div>
    </div>
  )
}

export default Header