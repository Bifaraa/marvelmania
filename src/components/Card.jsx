/* eslint-disable multiline-ternary */
import React, { useState } from 'react'

export default function Card({ path, extension, name, description, isbn }) {
  const [verMas, setVerMas] = useState(false)
  const verDesripcion = () => {
    setVerMas(!verMas)
  }
  return (
    <div className='w-[300px] max-h-[900px] m-5 rounded-lg flex flex-col gap-7 overflow-visible font-marvel'>
      <img
        src={path + '.' + extension}
        className='w-full object-cover max-h-[90%] min-h-[50%] rounded-t-lg shadow-lg shadow-[#101010]/50 '
      />

      <div className='relative overflow-visible p-1'>
        <h3 className='text-2xl text-center relative z-10 text-white'>
          {name}
        </h3>
        <div className='absolute top-0 w-full h-full overflow-hidden'>
          <div className='absolute left-[5px] h-full w-[95%] bg-[#ed1c24] transform -skew-x-12 after:border-[#ed1c24] after:border-solid after:border-1 after:translate-x-1'></div>
        </div>
      </div>

      {isbn ? (
        <span className='text-2xl self-center'>ISBN: {isbn}</span>
      ) : isbn === '' ? (
        <span className='text-2xl self-center'>ISBN: No encontrado</span>
      ) : (
        <></>
      )}

      {description !== '' ? (
        <p onClick={verDesripcion} className='w-full text-center text-lg'>
          <span className='text-2xl font-bold'>Ver más</span> <br />{' '}
          {verMas && description}
        </p>
      ) : (
        <p className='w-full text-center text-lg'>
          <span className='text-2xl font-bold'>Sin descripción</span>
        </p>
      )}
    </div>
  )
}
