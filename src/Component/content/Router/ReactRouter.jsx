import React from 'react'
import { Link } from 'react-router-dom'

function ReactRouter() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-2 font-sans">
    {/* React Router Home Section */}
    <section className=" mx-auto mb-20">
      <h2 className="text-center font-bold mb-6">Getting Started with react router dom</h2>
      <p className="text-lg text-gray-300 mb-10">
        React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. 
        You can use it maximally as a React framework or as minimally as you want.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
      <p className="text-gray-300 mb-4">
        There are three primary ways, or "modes", to use it in your app, so there are three guides to get you started.
      </p>
      <ul className="list-disc list-inside text-white space-y-1">
        <li><a href="#" className="underline text-white">Declarative</a></li>
        <li><a href="#" className="underline text-white">Data</a></li>
        <li><a href="#" className="underline text-white">Framework</a></li>
      </ul>
      <p className="mt-4 text-gray-300">
        Learn which mode is right for you in <a href="#" className="underline text-white">Picking a Mode</a>.
      </p>
    </section>

    {/* Installation Section */}
    <section className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">Installation</h1>
      <div className="flex space-x-4 mb-6">
        <span className="bg-green-800 text-green-300 rounded-full px-4 py-1 text-sm">🟢 Framework</span>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p className="text-gray-300 mb-6">
        Most projects start with a template. Let's use a basic template maintained by React Router:
      </p>
      <div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm mb-4">
        <code className="text-blue-400">npx </code>
        <code className="text-yellow-300">create-react-router@latest my-react-router-app</code>
      </div>

      <p className="text-gray-300 mb-4">Now change into the new directory and start the app</p>
      <div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm space-y-1">
        <div><code className="text-blue-400">cd </code><code className="text-yellow-300">my-react-router-app</code></div>
        <div><code className="text-blue-400">npm </code><code className="text-white">install</code></div>
        <div><code className="text-blue-400">npm </code><code className="text-yellow-300">run dev</code></div>
      </div>

      <p className="mt-4 text-gray-300">
        You can now open your browser to <code className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded">http://localhost:5173</code>
      </p>
      <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://animejs.com/documentation/getting-started/installation" role='button'><span className="fw-bold underline text-cyan-200 ms-2">Animi.js</span> </Link></p>  <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://reactrouter.com/start/framework/installation" role='button'><span className="fw-bold underline text-cyan-200 ms-2">react-router-dom</span> </Link></p>
    </section>
  </div>
  )
}

export default ReactRouter
