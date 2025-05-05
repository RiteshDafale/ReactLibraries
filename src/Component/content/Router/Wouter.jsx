import React from 'react'
import { Link } from 'react-router-dom'


function Wouter() {
  return (   
      <div className="min-h-screen bg-black text-white px-6 py-2 space-y-20 font-sans">
        <h2 className="text-center font-bold mb-4 pb-2">Getting Started with Wouter</h2>
  
        <p className="mb-4 text-lg">First, add wouter to your project.</p>
  
        <div className="bg-gray-100 text-black font-mono p-4 rounded mb-6">
          <code>npm i wouter</code>
        </div>
  
        <p className="mb-4 text-lg">
          Or, if you're using Preact then use the following command{' '}
          <code className="bg-gray-100 text-red-600 font-mono px-1 py-0.5 rounded">
            npm i wouter-preact
          </code>.
        </p>
  
        <p className="text-lg">
          Check out this simple demo app below. It doesn't cover hooks and other
          features such as nested routing, but it's a good starting point for
          those who are migrating from React Router.
        </p>

        <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://www.npmjs.com/package/wouter" role='button'><span className="fw-bold underline text-cyan-200 ms-2">Wouter</span> </Link></p>
      </div>
  )
}

export default Wouter
