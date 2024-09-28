import React from 'react'

export default function Header() {
  return (
<div className="flex flex-col lg:flex-row justify-between lg:mb-20">
  <div className="text-center lg:text-left mb-20 lg:mb-0">
    <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
      <p className="font-medium text-indigo-700 text-xl">
        Ahmed Mansour
      </p>
    </div>
    <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
      Creative thinker <br />
      Minimalism lover
    </h1>
    <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
      Hi, I’m Ahmed. I’m Frontend Developer. If you are
      looking for Developer <br />
      to build your brands and grow your business Let’s
      shake hands <br />
      with me.
    </p>
    <div className="space-y-5 space-x-5 mb-10">
      <a href="mailto:ahmedmansourmohamed99@gmail.com" className="block md:inline px-8 py-3 font-medium bg-indigo-800 text-white text-lg rounded-md hover:bg-indigo-600 transiton ease-in-out duration-300">Hire me</a>
      <a href="#" className="block md:inline px-8 py-3 font-medium text-indigo-800 text-lg border-2 border-indigo-800 rounded-md hover:bg-indigo-600 hover:text-white transiton ease-linear duration-300">Read more</a>
    </div>
    <hr className="text-gray-500 mb-5" />
    <span className="font-normal text-gray-500 text-sm">I am currently open for full-time or part-time work.</span>
  </div>
  <div className="mx-auto lg:mx-0">
    <img  className='w-96 h-auto rounded-lg' src="../image/photo.png" alt="Image" />
  </div>
</div>

  )
}
