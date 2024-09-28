import React from 'react'

export default function Experience() {
  return (
    <div className="py-16 lg:mb-20">
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-semibold text-gray-800 text-5xl text-center mb-20 xl:mb-40">
      Experience
      </h1>
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between">
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 className="font-medium text-gray-500 text-base uppercase">
            Company
          </h6>
          <p className="font-semibold text-gray-600 text-base">
          Information Technology Institute(ITI)
            <span className="font-normal text-gray-400"> / Ismalia, Egypt</span>
          </p>

        </div>
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 className="font-medium text-gray-500 text-base uppercase">
            Position
          </h6>
          <p className="font-normal text-gray-500 text-base">
            Front-End And Cross Platform Developer
          </p>
        </div>
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 className="font-medium text-gray-500 text-base uppercase">
            Year
          </h6>
          <p className="font-normal text-gray-500 text-base">2024</p>
        </div>
      </div>
    </div>
  </div>
  )
}
