/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import { fetchCharacter } from '../services/fetchs'

export default function Personajes() {
  const [listPersonajes, setListPersonajes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCharacter().then((data) => {
      setListPersonajes(data.data.results)
      setLoading(true)
    })
  }, [])

  return (
    <>
      <Header />
      <main className='w-screen px-10 mt-10'>
        {listPersonajes && (
          <section className='w-full flex flex-wrap justify-center gap-24'>
            {loading ? (
              listPersonajes.map((personaje) => (
                <Card
                  key={personaje.id}
                  path={personaje.thumbnail.path}
                  extension={personaje.thumbnail.extension}
                  name={personaje.name}
                  description={personaje.description}
                />
              ))
            ) : (
              <span className='mt-10 text-3xl text-red-900'>Loading ...</span>
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
