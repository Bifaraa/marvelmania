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
            Welcome to MarvelMania, the ultimate destination for Marvel fans. If
            you are a lover of Marvel comics, movies, and series, this is the
            perfect place for you! Our website is designed to provide users with
            a complete experience, whether you want to learn about the most
            iconic characters in the Marvel universe or stay up-to-date with the
            latest comic events and releases. At MarvelMania, you can explore a
            wide variety of content, from detailed articles and comic reviews to
            character biographies and movie and series synopses.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
