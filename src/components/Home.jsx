import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='mt-[2em] px-9 flex justify-center'>
        <article className='sm:w-[70%] sm:m-10'>
          <p className='sm:divide-y sm:columns-2'>
            ¡Bienvenidos a MarvelMania!, el destino definitivo para los fans de
            Marvel. Si eres un amante de los cómics, películas y series del
            universo Marvel, ¡este es el lugar perfecto para ti! Nuestro sitio
            web está diseñado para brindarle a los usuarios una experiencia
            completa, ya sea que quieras aprender sobre los personajes más
            icónicos del universo Marvel, o mantenerte actualizado con los
            últimos eventos y lanzamientos de cómics. En MarvelMania, puedes
            explorar una amplia variedad de contenido, desde artículos
            detallados y reseñas de cómics, hasta biografías de personajes y
            sinopsis de películas y series.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
