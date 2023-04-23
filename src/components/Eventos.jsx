/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import { fetchEvent } from '../services/fetchs'

export default function Eventos() {
  const [listEventos, setlistEventos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchEvent().then((data) => {
      setlistEventos(data.data.results)
      setLoading(true)
    })
  }, [])

  return (
    <>
      <Header />
      <main className='w-screen px-10 mt-10'>
        {listEventos && (
          <section className='w-full flex flex-wrap justify-center gap-24'>
            {loading ? (
              listEventos.map((evento) => (
                <Card
                  key={evento.id}
                  path={evento.thumbnail.path}
                  extension={evento.thumbnail.extension}
                  name={evento.title}
                  description={evento.description}
                />
              ))
            ) : (
              <span className='mt-10 text-3xl text-red-900'>Cargando ...</span>
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
