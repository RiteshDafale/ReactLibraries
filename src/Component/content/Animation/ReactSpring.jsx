import React from 'react'
import { Link } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import { msg } from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';


function ReactSpring() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-2 font-sans">
      {/* Getting Started Section */}
      <section className="mb-16">
        <h5 className='text-center underline mt-3'>Getting started with React Spring </h5>
        <p className="text-lg mb-1">{"1. "}
          <span className="text-amber-300"><span className="text-amber-300"><span className="text-amber-300"><span className="text-amber-300">React Spring</span></span></span></span> is a library for building interactive, data-driven, and animated UI components.
          It can animate HTML, SVG, Native Elements, Three.js, and more.
        </p>
        <p className="text-lg mb-6">
          {"2. "}By the end of this quick guide, you'll have installed <span className="text-amber-300"><span className="text-amber-300"><span className="text-amber-300"><span className="text-amber-300">React Spring</span></span></span></span> and created your first web-based
          animation! This animation will see a normal div move across the screen.
        </p>

        <h4 className="text-3xl font-semibold mb-2 ">{"3. "}Installation</h4>



        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code">npm i react-spring</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
        </div>
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

        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code1">{` import { animated } b from '@react-spring/web'`}</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code1");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
        </div>
        <p className="text-lg">We use our animated component like any other JSX element and to ensure we can see it, we'll add some styling:</p>
      </section>

      <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://www.react-spring.dev/" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">React Spring</span> </Link></p>
    </div>
  )
}

export default ReactSpring
