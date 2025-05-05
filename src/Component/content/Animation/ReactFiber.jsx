import React from 'react'
import { Link } from 'react-router-dom'


function ReactFiber() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-2 space-y-8">
      {/* Header */}
      <h2 className='text-center '>Getting started with Spring Fiber</h2>
      <div>
        <h3 className="text-5xl font-bold">Installation</h3>
        <p className="text-gray-400 text-lg mt-2">
          Learn how to install react-three-fiber
        </p>
      </div>

      {/* Install Command */}
      <div className="bg-gray-900 border border-gray-700 rounded-md p-4 font-mono text-green-400 text-sm flex items-center justify-between">
        <code>npm install three @react-three/fiber</code>
        <button className="text-gray-400 hover:text-white">📋</button>
      </div>

      {/* Warning Box */}
      <div className="bg-yellow-800/70 border border-yellow-500 p-4 rounded-md">
        <h2 className="text-yellow-300 font-bold text-lg mb-2">⚠️ Warning</h2>
        <p className="text-yellow-100 text-sm leading-relaxed">
          Fiber is compatible with React v18 and v19 and works with ReactDOM and React Native.
          Fiber is a React renderer, it must pair with a major version of React, just like react-dom,
          react-native, etc. <br />
          <span className="font-semibold">@react-three/fiber@8</span> pairs with <span className="font-semibold">react@18</span>, <br />
          <span className="font-semibold">@react-three/fiber@9</span> pairs with <span className="font-semibold">react@19</span>.
        </p>
      </div>

      {/* Footer note */}
      <p className="text-gray-400 text-sm">
        Getting started with React Three Fiber is not nearly as hard as you might have thought, but various frameworks may require particular attention.
      </p>

      {/* Framework Links */}
      <div className="text-gray-300 text-sm">
        <p className="mb-2">We've put together guides for getting started with each popular framework:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="#" className="text-blue-400 hover:underline">Vite.js</a></li>
          <li><a href="#" className="text-blue-400 hover:underline">Next.js</a></li>
          <li><a href="#" className="text-blue-400 hover:underline">CDN w/o build tools</a></li>
          <li><a href="#" className="text-blue-400 hover:underline">React Native</a></li>
        </ul>
      </div>
      <p>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://r3f.docs.pmnd.rs/getting-started/installation" role='button'><span className="fw-bold underline text-cyan-200 ms-2">React Fiber</span> </Link></p>
    </div>
  )
}

export default ReactFiber
