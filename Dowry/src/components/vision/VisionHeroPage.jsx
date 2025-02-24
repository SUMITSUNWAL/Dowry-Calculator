import React from 'react'

const VisionHeroPage = () => {
  return (
    <div>
      <div className='w-screen bg-cyan-50 h-[250px]'>
        <div className='font-semibold text-[40px] pl-[10%] pt-10'>A catalyst for change</div>
        <div className='w-[80%] pl-[10%]'>Shaadi.org is a Social Initiative by Shaadi.com that seeks to address gender disparities and work towards a more equal world. Our vision is a world where men and women have the same opportunities and are treated fairly and equally. We seek to realize our vision by funding & promoting initiatives that provide opportunities and livelihoods to women as well as influencing mindsets & behaviours of people in India with the support of people & organizations that share our vision.</div>
      </div>

      <div className='flex'>
        <div className='mt-16 ml-20'>
          <img src='/images/Vision-1.jpg' width={450}></img>
        </div>
        <div className='max-w-[600px] flex flex-col justify-center ml-20'>
          <p className='font-semibold text-[40px]'>Our Purpose</p>
          <p>We envision a society free of the ills and societal pressures of marriage. In doing so, we strive towards garnering support to our causes where women will be free of judgement and disparity when it comes to marriage. Thus serving as an active, responsible and effective stewards of social change.</p>
        </div>
      </div>

      <div className='flex'>
        <div className='mt-16 ml-20 w-[600px]'>
          <p className='font-semibold text-[40px]'>Mission</p>
          <p>To provide a platform:</p>
          <ul className="list-disc">
            <li>For people to address and thereby tackle the social issues pertinent to marriage</li>
            <li>To participate and voice their opinion on such evils</li>
          </ul>
        </div>
        <div className='ml-7'>
          <img src='/images/Vision-2.jpg' width={500}></img>
        </div>
      </div>
    </div>
  )
}

export default VisionHeroPage