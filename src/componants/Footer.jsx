import React from 'react'
import XIcon from '../icons/XIcon'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import TelIcon from '../icons/TelIcon'

export default function Footer() {
  return (
    <div className="bg-red-50 py-16 pb-10">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <h1 className="font-medium text-gray-700 text-2xl md:text-5xl mb-5">
          Contact with me
        </h1>
        <p className="font-normal text-gray-400 text-sm md:text-lg mb-20">
        Feel free to contact me a <br />
        any time.
        </p>
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          <a href="https://x.com/ahmedmansour736" target='_blank' className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-red-200 transition ease-in-out duration-300">
            <XIcon/>
          </a>
          <a href="https://github.com/ahmedmansour200" target='_blank' className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-red-200 transition ease-in-out duration-300">
         <GithubIcon/>
        </a>
          <a href="https://www.linkedin.com/in/ahmed-mansour-6517b4229" target='_blank' className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-red-200 transition ease-in-out duration-300">
            <LinkedinIcon/>
          </a>
          <a href="https://t.me/A7med167" target='_blank' className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-red-200 transition ease-in-out duration-300">
        <TelIcon/>
        </a>
        </div>
      </div>
    </div>
  </div>
  )
}
