import React, { useState } from 'react'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [modal, setModal] = useState(false)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const irPersonaje = () => {
    navigate('/Personajes')
  }

  const irHome = () => {
    navigate('/')
  }

  const irComic = () => {
    navigate('/Comics')
  }

  const irEvento = () => {
    navigate('/Events')
  }

  const irLogin = () => {
    navigate('/Login')
  }

  const irRegistro = () => {
    navigate('/Registro')
  }

  const handdlerClic = () => {
    setAbierto(!abierto)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  const handlerSumit = (e) => {
    e.preventDefault()
    console.log(input)
  }

  const handlerInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <header className=''>
      <div className='flex justify-between sm:justify-around items-center w-full h-[7em] bg-[#212021] py-12 font-marvel'>
        <div
          onClick={irHome}
          className='flex justify-center cursor-pointer w-[100%] sm:w-[20%]'
        >
          <img src='./../../public/Marvel_Logo.svg.png' className='w-[150px]' />
          .
          <h1 className='text-white text-[40px] font-marvel font-bold'>
            Mania
          </h1>
        </div>
        <form
          className='sm:flex w-[40%] sm:gap-10 hidden'
          onSubmit={handlerSumit}
        >
          <input
            className='border-2 border-[#ed1c24] rounded-md w-[50%] h-10 cursor-pointer text-center text-xl'
            type='text'
            id='search'
            name='search'
            placeholder='personaje: iron man'
            onChange={handlerInput}
          />
          <button
            className=' relative font-medium bg-[#ed1c24] text-white p-1 rounded-md text-xl shadow-lg shadow-[#000]/50 w-[120px]'
            type='submit'
            onClick={irRegistro}
          >
            <a
              className="before:absolute before:top-0 before:left-0 before:content-['']  before:block before:w-0 before:h-full before:bg-[#d00000]/50  before:transition-all  before:ease-in-out before:rounded-md hover:before:w-full"
              href='#'
            >
              <span className='z-[10] relative'>Buscar</span>
            </a>
          </button>
          {modal && <Modal isOpen={modal} setIsOpen={setModal} txt={input} />}
        </form>
        <div className='hidden sm:flex sm:h-[3em] sm:gap-10'>
          <button
            className=' relative font-medium bg-[#ed1c24] text-white p-1 rounded-md text-xl shadow-lg shadow-[#000]/50 w-[120px]'
            type='submit'
            onClick={irLogin}
          >
            <a
              className="before:absolute before:top-0 before:left-0 before:content-['']  before:block before:w-0 before:h-full before:bg-[#d00000]/50  before:transition-all  before:ease-in-out before:rounded-md hover:before:w-full"
              href='#'
            >
              <span className='z-[10] relative'>Iniciar Sesión</span>
            </a>
          </button>
          <button
            className=' relative font-medium bg-[#ed1c24] text-white p-1 rounded-md text-xl shadow-lg shadow-[#000]/50 w-[120px]'
            type='submit'
            onClick={irRegistro}
          >
            <a
              className="before:absolute before:top-0 before:left-0 before:content-['']  before:block before:w-0 before:h-full before:bg-[#d00000]/50  before:transition-all  before:ease-in-out before:rounded-md hover:before:w-full"
              href='#'
            >
              <span className='z-[10] relative'>Registarme</span>
            </a>
          </button>
        </div>
        {abierto && (
          <nav className='absolute top-0 right-0 text-3xl w-[90%] h-[100vh] p-10 bg-[#212021] z-10 '>
            <ul className='relative flex flex-col items-end gap-10 mr-10 text-white font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='44'
                height='44'
                fill='currentColor'
                className='absolute top-0 left-0 bi bi-backspace-reverse'
                viewBox='0 0 16 16'
                onClick={handdlerClic}
              >
                <path d='M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z' />
                <path d='M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z' />
              </svg>
              <li className='mt-24' onClick={irLogin}>
                Iniciar sesión
                <hr className='w-36 h-3 mt-5' />
              </li>
              <li onClick={irRegistro}>
                Registro
                <hr className='w-36 h-3 mt-5' />
              </li>
              <li onClick={irComic}>
                Comics
                <hr className='w-36 h-3 mt-5' />
              </li>
              <li onClick={irEvento}>
                Eventos
                <hr className='w-36 h-3 mt-5' />
              </li>
              <li onClick={irPersonaje}>
                Personajes
                <hr className='w-36 h-3 mt-5' />
              </li>
            </ul>
          </nav>
        )}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='70'
          height='70'
          fill='currentColor'
          className='sm:hidden text-white  bi bi-list'
          viewBox='0 0 16 16'
          onClick={handdlerClic}
        >
          <path d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
        </svg>
      </div>

      <Slider {...settings}>
        <div className='h-64 bg-blue-500 flex justify-center items-center sm:h-96'>
          <img
            className='static object-cover w-full h-full'
            src='../../public/1.jpg'
          />
        </div>
        <div className='h-64 bg-green-500 flex justify-center items-center sm:h-96'>
          <img
            className='static object-cover w-full h-full'
            src='../../public/4.jpg'
          />
        </div>
        <div className='h-64 bg-yellow-500 flex justify-center items-center sm:h-96'>
          <img
            className='static object-cover w-full h-full'
            src='../../public/5.jpg'
          />
        </div>
      </Slider>
      <nav className='hidden sm:block sm:font-marvel sm:text-[3em] sm:w-full sm:mt-10'>
        <ul className='flex justify-center gap-24'>
          <li className='relative cursor-pointer'>
            <a
              onClick={irComic}
              className='after:absolute after:content after:left-0 after:botton-0 after:block after:w-0 after:bg-red-900 after:h-[5px] after:transition-all hover:after:w-full after:duration-900ms after:ease-out'
            >
              Comics
            </a>
          </li>
          <li className='relative cursor-pointer'>
            <a
              onClick={irPersonaje}
              className='after:absolute after:content after:left-0 after:botton-0 after:block after:w-0 after:bg-red-900 after:h-[5px] after:transition-all hover:after:w-full after:duration-900ms after:ease-out'
            >
              Personajes
            </a>
          </li>
          <li className='relative cursor-pointer'>
            <a
              onClick={irEvento}
              className='after:absolute after:content after:left-0 after:botton-0 after:block after:w-0 after:bg-red-900 after:h-[5px] after:transition-all hover:after:w-full after:duration-900ms after:ease-out'
            >
              Eventos
            </a>
          </li>
        </ul>
      </nav>
      <form className='flex flex-col items-center mt-10 gap-10 sm:hidden'>
        <input
          className='border-2 border-[#ed1c24] rounded-md w-[80%] h-14'
          type='text'
          id='search'
          name='search'
        />
        <input
          className='text-3xl text-white bg-[#ed1c24] px-10 py-3 rounded-md'
          type='submit'
          value='Buscar'
          onClick={() => setModal(true)}
        />
        {modal && <Modal isOpen={modal} setIsOpen={setModal} txt={input} />}
      </form>
    </header>
  )
}
