import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registro() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const irIniciarSesion = () => {
    navigate('/Login')
  }

  const irHome = () => {
    navigate('/')
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se enviaría la información del formulario al servidor
    console.log('Usuario:', username, 'Contraseña:', password)
  }
  return (
    <main className='relative flex flex-row justify-center items-center h-screen w-screen bg-[url("../../public/login/celular.jpg")] sm:bg-[url("../../public/login/miles-morales-en-el-aire_3840x2160_xtrafondos.com.jpg")] bg-cover font-marvel'>
      <a
        className='absolute text-3xl text-center top-[5%] left-2 rounded-md bg-[#212021]/70 p-2 sm:left-[80%] text-white cursor-pointer hover:text-gray-400'
        onClick={irHome}
      >
        Back to home
      </a>
      <div className=' sm:mx-auto sm:w-full max-w-md bg-[#212021]/70 p-12 rounded-md shadow-2xl shadow-black'>
        <h2 className='text-center text-[2.5em] font-extrabold text-white'>
          Sign Up
        </h2>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm space-y-5'>
            <div>
              <input
                id='name'
                name='name'
                type='text'
                autoComplete='name'
                required
                className='rounded-none block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#ed1c24] focus:border-[#ed1c24] focus:z-10 text-3xl'
                placeholder='Full name'
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                id='correo'
                name='correo'
                type='text'
                autoComplete='Email'
                required
                className='rounded-none block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#ed1c24] focus:border-[#ed1c24] focus:z-10 text-3xl'
                placeholder='Email'
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='Username'
                required
                className='rounded-none block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#ed1c24] focus:border-[#ed1c24] focus:z-10 text-3xl'
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className=' rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#ed1c24] focus:border-[#ed1c24] focus:z-10 text-3xl'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-white hover:text-gray-400 text-3xl'
                onClick={irIniciarSesion}
              >
                log In
              </a>
            </div>
          </div>

          <div>
            <button
              className=' relative font-medium bg-[#ed1c24] text-white p-3 rounded-md text-3xl shadow-lg shadow-[#000]/50 w-full'
              type='submit'
            >
              <a
                className="before:absolute before:top-0 before:left-0 before:content-['']  before:block before:w-0 before:h-full before:bg-[#d00000]/50  before:transition-all  before:ease-in-out before:rounded-md hover:before:w-full"
                href='#'
              >
                <span className='z-[10] relative'>Sign Up</span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
