import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-24 bg-[#212021] text-white flex sm:justify-around py-10 px-10 flex-col gap-7 sm:flex-row'>
      <section className='flex sm:flex-row items-center sm:gap-10 gap-5 flex-col'>
        <p className='sm:mb-3'>
          Siguenos en nuestras <br /> redes sociales
        </p>
        <div className=''>
          <div className='flex gap-5 mb-3'>
            <img src='../../public/redes/facebook_line.svg' alt='' />
            <span>MarvelMania</span>
          </div>
          <div className='flex gap-5 mb-3'>
            <img src='../../public/redes/twitter_line.svg' alt='' />
            <span>@MarvelMania</span>
          </div>
        </div>
      </section>
      <div className='flex justify-center w-[100%] sm:w-[33%]'>
        <img src='./../../public/Marvel_Logo.svg.png' className='w-[150px]' />
        <h1 className='text-white text-[40px] font-marvel font-bold'>Mania</h1>
      </div>
      <section className='flex items-center sm:gap-10 flex-col gap-5 sm:flex-row'>
        <p className='mb-3'>Contactanos</p>
        <div>
          <div className='flex gap-5 mb-3'>
            <img src='../../public/redes/whatsapp_line.svg' alt='' />
            <span>+57 3234742609</span>
          </div>
          <div className='flex gap-5'>
            <img src='../../public/redes/phone_call_line.svg' alt='' />
            <span>+57 3002191290</span>
          </div>
        </div>
      </section>
    </footer>
  )
}
