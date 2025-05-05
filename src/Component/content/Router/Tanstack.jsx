import React from 'react'
import { Link } from 'react-router-dom'

function Tanstack() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-2 space-y-20 font-sans">

<h2 className='text-center '>Getting started with Tanstack Router</h2>
      <section>
        <h6 className="text-2xl mt-5 font-bold">TanStack Router is a router for building React and Solid applications.</h6>
        <p className="text-gray-300 mt-2">Some of its features include:</p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-1">
          <li>100% inferred TypeScript support</li>
          <li>Typesafe navigation</li>
          <li>Nested Routing and layout routes (with pathless layouts)</li>
          <li>Built-in Route Loaders w/ SWR Caching</li>
          <li>Designed for client-side data caches (TanStack Query, SWR, etc.)</li>
          <li>Automatic route prefetching</li>
          <li>Asynchronous route elements and error boundaries</li>
          <li>File-based Route Generation</li>
          <li>Typesafe JSON-first Search Params state management APIs</li>
        </ul>

        <h3 className="text-3xl font-bold mt-16">Installation</h3>
        <p className="text-gray-300 mt-2">
          You can install TanStack Router with any <span className="underline">NPM</span> package manager.
        </p>
        <div className="bg-gray-900 p-4 mt-4 rounded-lg text-green-400 font-mono text-sm">
          <p>npm install @tanstack/react-router</p>
          <p className="text-gray-500"># or</p>
          <p>pnpm add @tanstack/react-router</p>
          <p className="text-gray-500"># or</p>
          <p>yarn add @tanstack/react-router</p>
          <p className="text-gray-500"># or</p>
          <p>bun add @tanstack/react-router</p>
          <p className="text-gray-500"># or</p>
          <p>deno add npm:@tanstack/react-router</p>
        </div>

        <p className="text-gray-300 mt-4">
          TanStack Router is currently only compatible with React (with ReactDOM) and Solid.
          If you'd like to contribute to the React Native, Angular, or Vue adapter,
          please reach out to us on <a href="#" className="underline">Discord</a>.
        </p>

        <h3 className="text-2xl font-bold mt-10">Requirements</h3>
        <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
          <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">react</code> either v18.x.x or v19.x.x</li>
          <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">react-dom</code>, either v18.x.x or v19.x.x</li>
          <li>Note that <code className="bg-gray-800 px-2 py-1 rounded text-sm">ReactDOM.createRoot</code> is required.</li>
          <li>The legacy <code className="bg-gray-800 px-2 py-1 rounded text-sm">.render()</code> function is not supported.</li>
        </ul>
      </section>
      <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://tanstack.com/router/latest/docs/framework/react/installation" role='button'><span className="fw-bold underline text-cyan-200 ms-2">Tanstack Router</span> </Link></p>
    </div>
  )
}

export default Tanstack
