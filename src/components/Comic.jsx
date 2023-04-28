/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import { fetchComic } from '../services/fetchs'

export default function Comic() {
  const [listComics, setListComics] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchComic().then((res) => {
      setListComics(res.data.results.slice(2, 20))
      setLoading(true)
    })
  }, [])

  return (
    <>
      <Header />
      <main className='w-screen px-10 mt-10'>
        {listComics && (
          <section className='w-full flex flex-wrap justify-center gap-24'>
            {loading ? (
              listComics.map((comic) => (
                <Card
                  key={comic.id}
                  path={comic.thumbnail.path}
                  extension={comic.thumbnail.extension}
                  name={comic.title}
                  description={comic.description}
                  isbn={comic.isbn}
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
