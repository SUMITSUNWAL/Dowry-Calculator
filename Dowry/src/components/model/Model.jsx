import React, { useRef } from 'react'

const Model = ({setAModel}) => {
  const modelRef = useRef();
  function handler(e){
    modelRef.current === e.target;
    setAModel(false);
  }
  return (
    <div ref={modelRef} className='fixed bg-black bg-opacity-30 backdrop-blur-md inset-0 text-white flex justify-center items-center flex-col' onClick={handler}>
      <div className='flex flex-col'>
      <button className='self-end text-[25px]' onClick={()=>setAModel(false)}>X</button>
      <div className='flex flex-col items-center'>
        <p className='font-semibold text-[43px]'>Over</p>
        <p className='text-red-600 text-[32px]'>
          190000+
        </p>
        <p className='font-semibold text-[43px]'>dowry deaths reported in India
        in the past 10 years.</p>
        <p className='text-[24px]'>Say no to Dowry and let's make a better Society together</p>
      </div>
      </div>
    </div>
  )
}

export default Model