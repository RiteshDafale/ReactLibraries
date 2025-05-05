import React from 'react'
import { Link } from 'react-router-dom'


function ReactSpring() {
    return (
        <div className="bg-gray-900 text-white min-h-screen px-2 py-2 font-sans">
        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Getting started with <span className="fw-bold"><span className="fw-bold"><span className="fw-bold">React Spring</span></span></span> </h2>
          <p className="text-lg mb-1">{"z"}
            <span className="fw-bold"><span className="fw-bold"><span className="fw-bold"><span className="fw-bold">React Spring</span></span></span></span> is a library for building interactive, data-driven, and animated UI components.
            It can animate HTML, SVG, Native Elements, Three.js, and more.
          </p>
          <p className="text-lg mb-6">
            By the end of this quick guide, you'll have installed <span className="fw-bold"><span className="fw-bold"><span className="fw-bold"><span className="fw-bold">React Spring</span></span></span></span> and created your first web-based
            animation! This animation will see a normal div move across the screen.
          </p>
  
          <h2 className="text-3xl font-semibold mb-4">Install</h2>
          <p className="text-lg mb-2">
            <span className="fw-bold"><span className="fw-bold"><span className="fw-bold"><span className="fw-bold">React Spring</span></span></span></span> can be installed with any package manager. Here's how to install it with <span className="underline text-pink-400">Yarn:</span>
          </p>
          <pre className="bg-gray-800 text-green-400 p-4 rounded mt-2 text-sm overflow-x-auto">
            yarn add @react-spring/web
          </pre>
        </section>
  
        {/* The Animated Element Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">The Animated Element</h2>
          <p className="text-lg mb-4">
            The actual component that handles animation is our <code className="bg-gray-700 px-1 rounded">animated</code> component. 
            This is just a higher-order component (HOC) if you're familiar with that pattern. If you're not, see this explanation 
            from the <code className="bg-gray-700 px-1 rounded">react.js</code> docs:
          </p>
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-300 mb-4">
            a higher-order component is a function that takes a component and returns a new component.
          </blockquote>
  
          <p className="text-lg mb-4">
            So really, it's just a fancy wrapper. To use it, we need to import it:
          </p>
  
          <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto mb-6">
            import {'{ animated }'} from '@react-spring/web'
          </pre>
  
          <p className="text-lg">We use our animated component like any other JSX element and to ensure we can see it, we'll add some styling:</p>
        </section>
        <p>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://www.react-spring.dev/" role='button'><span className="fw-bold underline text-cyan-200 ms-2">React Spring</span> </Link></p>
      </div>
    )
}

export default ReactSpring
