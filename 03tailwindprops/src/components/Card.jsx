import React from 'react'

function card() {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/29445974/pexels-photo-29445974/free-photo-of-close-up-of-colorful-javascript-code-on-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">TailwindCSS</h2>
            <p className="text-gray-400">
            Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            onClick={() => window.open('https://tailwindcss.com/', '_blank')}
          >
            Read more
          </button>
        </div>
      </div>
  )
}

export default card