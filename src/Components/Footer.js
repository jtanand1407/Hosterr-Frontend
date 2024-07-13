import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col gap-5 md:flex-row justify-between'>
      <ul className='flex gap-2 text-gray-500'>
        <li>
          <a href='https://www.facebook.com/'>Facebook</a>
        </li>
        <li>
        <a href='https://www.instagram.com/'>Instagram</a>
        </li>
        <li>
        <a href='https://x.com/'>Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src='./assets/Help-Avatar.svg' alt='Help'/>
        <div>
          <p className='font-playfair text-gray-400'>Here any Questions?</p>
          <a className='font-lato font-medium' href='#'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}
