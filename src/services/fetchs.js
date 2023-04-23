import axios from 'axios'

export async function fetchComic() {
  try {
    const response = await axios(
      'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=67f99935ac3e779897f0a6d4bb5c66e6&hash=bea537d7a6137b97b5f9133648370860'
    )
    return response.data
  } catch (err) {
    console.log('error ', err)
  }
}

export async function fetchCharacter() {
  try {
    const response = await axios(
      'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67f99935ac3e779897f0a6d4bb5c66e6&hash=bea537d7a6137b97b5f9133648370860'
    )
    return response.data
  } catch (err) {
    console.log('error ', err)
  }
}

export async function fetchEvent() {
  try {
    const response = await axios(
      'https://gateway.marvel.com/v1/public/events?ts=1&apikey=67f99935ac3e779897f0a6d4bb5c66e6&hash=bea537d7a6137b97b5f9133648370860'
    )
    return response.data
  } catch (err) {
    console.log('error ', err)
  }
}

export async function fetchCharacterByName(name) {
  try {
    const response = await axios(
      `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${name}&limit=5&apikey=67f99935ac3e779897f0a6d4bb5c66e6&hash=bea537d7a6137b97b5f9133648370860`
    )
    console.log('response ', response.data)
    return response.data
  } catch (err) {
    console.log('error ', err)
  }
}

export async function fetchComicByName(name) {
  const data = await fetchCharacterByName(name)
  const idPersonaje = data.data.results[0].id
  console.log('este es el id', idPersonaje)
  try {
    const response = await axios(
      `https://gateway.marvel.com:443/v1/public/characters/${idPersonaje}/comics?ts=1&limit=10&apikey=67f99935ac3e779897f0a6d4bb5c66e6&hash=bea537d7a6137b97b5f9133648370860`
    )
    console.log('response ', response.data)
    return response.data
  } catch (err) {
    console.log('error ', err)
  }
}
