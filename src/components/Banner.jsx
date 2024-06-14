import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <section>
        <div style={{backgroundImage:`url(${banner})`}} className='py-[500px] bg-no-repea bg-cover bg-center'>

        </div>
    </section>
  )
}

export default Banner