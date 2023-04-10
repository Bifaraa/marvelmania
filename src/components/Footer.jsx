import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-24 bg-[#212021] text-white flex justify-around py-5 px-10'>
      <section className='flex items-center gap-10'>
        <p className='mb-3'>
          Siguenos en nuestras <br /> redes sociales
        </p>
        <div>
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
      <section className='flex items-center gap-10'>
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
