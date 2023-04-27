/* eslint-disable react/prop-types */
/* eslint-disable multiline-ternary */
import { React, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { fetchCharacterByName, fetchComicByName } from '../services/fetchs'

export default function Modal({ isOpen, setIsOpen, txt }) {
  const [listFetch, setListFetch] = useState([])

  useEffect(() => {
    if (!txt.includes(':')) {
      alert('Ingrese una cadena valida \n ejemplo: personaje: iron man')
      setIsOpen(false)
    } else {
      const splitCadena = txt.toLowerCase().split(':')
      const categoria = splitCadena[0].trim()
      const nombre = splitCadena[1].trim()

      if (categoria === 'personaje') {
        fetchCharacterByName(nombre).then((res) => {
          setListFetch(res.data.results)
          console.log(listFetch)
          return null
        })
      }

      if (categoria === 'comic') {
        fetchComicByName(nombre).then((res) => {
          setListFetch(res.data.results)
          console.log(listFetch)
          return null
        })
      }
    }
  }, [isOpen])

  return (
    <>
      <Transition show={isOpen}>
        <div className='fixed z-20 inset-0 overflow-y-auto'>
          <button
            onClick={() => setIsOpen(false)}
            className='w-full absolute z-30 top-5 right-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-5 py-3 bg-[#ed1c24] text-3xl font-medium text-white hover:bg-[#d00000]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed1c24] sm:ml-3 sm:w-auto sm:text-sm'
          >
            Cerrar
          </button>
          <div className='flex items-center justify-center min-h-screen relative'>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 transition-opacity'>
                <div className='absolute inset-0 bg-[#212021] opacity-75'></div>
              </div>
            </Transition.Child>

            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='bg-slate-200 overflow-y-auto rounded-lg shadow-xl transform transition-all w-[80vw] h-[90vh] '>
                <div className='space-x-24 p-10 flex flex-wrap gap-10'>
                  {Array.isArray(listFetch) ? (
                    listFetch.map((personaje) => (
                      <div
                        key={personaje.id}
                        className='flex w-full h-full justify-center items-center gap-5'
                      >
                        <img
                          src={
                            personaje.thumbnail.path +
                            '.' +
                            personaje.thumbnail.extension
                          }
                          className='w-[25%] object-cover rounded-t-lg shadow-lg shadow-[#101010]/50 '
                        />
                        <div className='h-full w-[75%] flex flex-col items-center justify-center p-10 gap-10'>
                          <h3 className='text-[3em] font-bold'>
                            {personaje.name}
                            {personaje.title}
                          </h3>
                          <p className='text-[1.5em]'>
                            {personaje.description}
                          </p>
                        </div>
                        <div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse absolute bottom-0 right-0'></div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  )
}
