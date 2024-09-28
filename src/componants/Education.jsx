import React from 'react'

export default function Education() {
  return (
<div className="py-16 lg:mb-20 ">
  <div className="container max-w-screen-xl mx-auto px-4">
    <h1 className="font-semibold text-gray-800 text-5xl text-center mb-20 xl:mb-40">
      Education
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900">Al-Azhar University</h2>
        <p className="font-semibold text-gray-600 text-base mt-2">BSc, Faculty of Science - Computer Science</p>
        <p className="font-semibold text-gray-600 text-bas mt-2">Bachelor’s Degree in Computer Science and Pure Mathematics</p>
        <p className="font-semibold text-gray-600 text-bas">Faculty of Science, Al-Azhar University</p>
        <p className="font-normal text-gray-500 text-base my-2">Sep 2018 - Jul 2023 / Cairo, Egypt</p>
        <p className="font-normal text-gray-400 mt-2">Grade: Good</p>
      </div>
    </div>
  </div>
</div>
  )
}
