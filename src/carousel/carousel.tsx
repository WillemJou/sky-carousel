import { useState, useEffect } from 'react'
import './carousel.css'

function Carousel() {
  const randomImg = 'https://source.unsplash.com/random/?sky'
  const [newRandomImg, setNewRandomImg] = useState(randomImg)

  const handleNewImg = () => {
    const randomParam = Math.random().toString(36).substring(2, 15) // Generate random string to "force" re-render fresh new image"
    setNewRandomImg(
      `https://source.unsplash.com/random/?sky&cache=${randomParam}`
    )
  }
  useEffect(() => {
    handleNewImg()
  }, [])
  return (
    <section>
      <h1>Sky Carousel</h1>
      <div className='carousel-container'>
        <div className='carousel'>
          <img className='img' src={newRandomImg} alt='random sky image' />
          <button onClick={handleNewImg} className='prev-btn'>
            {'<'}
          </button>
          <button onClick={handleNewImg} className='next-btn'>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}

export { Carousel }
