import React from 'react'

const HeroSection = ({setAModel}) => {
  return<>
    <div className='bg-color flex'>
      <div className='ml-4 w-[50%]'>
        <div>
          <div className='font-bold text-[60px] leading-[1] pt-7 text-white'>DowrAi - India's First Dowry Calculator</div>
          <div className='text-[33px] leading-[1] mt-6 text-white'>Car? House? Gold? What are you worth in today's marriage market</div>
        </div>
        <div className='w-[324px] mt-10 ml-5'>
          <img src='/images/d-image.jpg'/>
        </div>
      </div>
      <div>
          <div className='bg-white rounded p-2 border mt-14 ml-[130px] max-w-[410px]'>
            <p className="text-[22px] font-semibold ml-4 mr-3">How much dowry are you worth?</p>
            <div className='flex mt-3 justify-center items-center'>
              <div className='mr-5'>
              <div className='font-semibold text-gray-400'>Age</div>
              <input type="text" list="ages" name="ages" required placeholder='Select' className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border'/>
              <datalist id="ages">
                <option value="18-30 Years" />
                <option value="30-45 Years" />
                <option value="45-60 Years" />
              </datalist>
            </div>
            <div>
              <div  className='font-semibold text-gray-400'>Profession</div>
              <input type="text" list="profession" name="profession" placeholder='Select' className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border' />
              <datalist id="profession">
                <option value="Doctor" />
                <option value="Engineer" />
                <option value="others" />
              </datalist>
            </div>
            </div>
            
            <div className='flex mt-3 justify-center items-center'>
              <div className='mr-5'>
              <div className='font-semibold text-gray-400'>Montly Salary</div>
              <input type="text" list="salary" name="salary" placeholder='Select' required className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border'/>
              <datalist id="salary">
                <option value="Less than 50k" />
                <option value="Btw 50k to 100k" />
                <option value="More than 50k" />
              </datalist>
            </div>
            <div>
              <div  className='font-semibold text-gray-400'>Education</div>
              <input type="text" list="Education" name="Education" placeholder='Select' required className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border' />
              <datalist id="Education">
                <option value="School" />
                <option value="College" />
                <option value="PHD" />
              </datalist>
            </div>
            </div>

            <div className='flex mt-3 justify-center items-center'>
              <div className='mr-5'>
              <div className='font-semibold text-gray-400'>Residence</div>
              <input type="text" list="Residence" name="Residence" placeholder='Select' required className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border'/>
              <datalist id="Residence">
                <option value="Self-Owend" />
                <option value="Rented" />
                <option value="Parent's House" />
              </datalist>
            </div>
            <div>
              <div  className='font-semibold text-gray-400'>Country</div>
              <input type="text" list="Country" name="Country" placeholder='Select' className='focus:outline-none hover:cursor-pointer p-2 w-[150px] hover:border-2 border' />
              <datalist id="Country">
                <option value="India" />
                <option value="Abroad" />
              </datalist>
            </div>
            </div>

            <button className='bg-black text-white text-[20px] px-16 py-2 mt-7 mb-5 ml-14 hover:bg-blue-500 hover:shadow-lg' onClick={()=> setAModel(true)}>Calculate Now</button>

          </div>

          <div className='text-white max-w-[600px] mt-7 text-[14px]'>
            DowrAI is a social awareness campaign against the practice of Dowry. It is not meant to promote the practice & the calculator is a tool to illustrate the adverse impact caused by this social evil.
          </div>
          <div className='text-white max-w-[600px] mt-2 text-[14px]'>
            Dowry in India is a punishable offence under section 498A since 1961. The law states that the husband or the relative of the husband of a woman, subjects such woman to cruelty shall be punished with imprisonment for a term which may extend to three years and shall also be liable to fine. 
          </div>
        </div>
    </div>
  </>
}

export default HeroSection