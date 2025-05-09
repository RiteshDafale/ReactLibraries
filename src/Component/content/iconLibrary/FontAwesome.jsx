import React,{useEffect} from 'react'
import copy from 'copy-to-clipboard';
import {msg} from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';
import { Link } from 'react-router-dom'

function FontAwesome() {
   useEffect(() => {
          document.title = "React - Font Awesome"
      })
  return (
    <div className="bg-black text-white min-h-screen p-6 space-y-2 font-sans">
      <h4 className='text-center underline'>Font Awesome Icons</h4>
      <section>
        <h4 className="text-4xl font-bold my-4 ms-3">Quick Start</h4>
        <p className="text-lg font-medium">
          Need to get icons in your web project quickly? Here's the fastest and easiest way to use Font Awesome in your web-based projects (keep in mind you can use Font Awesome in{' '}
          <a href="#" className="text-blue-300 underline">lots of other ways</a>, including{' '}
          <a href="#" className="text-blue-300 underline">on the desktop</a>).
        </p>
      </section>

      {/* Set Up with Vue Section */}
      <section>
        <h4 className="text-3xl font-bold mb-4">Set Up with Vue</h4>
        <p className="font-semibold bg-[#112d57] p-4 rounded-lg">
          When using Font Awesome with Vue.js, you can put our official <code className="bg-gray-700 px-2 py-1 rounded">vue-fontawesome</code> component to work to make everything just right.
        </p>
        <div className="bg-[#0b2446] p-4 rounded mt-4 space-y-2">
          <h3 className="font-bold text-xl">Before You Get Started</h3>
          <ul className="list-disc list-inside">
            <li><a href="#" className="text-blue-300 underline">Configured access</a> to use Font Awesome packages</li>
            <li>Plan to <a href="#" className="text-blue-300 underline">use the SVG+JS method</a> with Vue.js</li>
          </ul>
        </div>
        <p className="mt-4">
          We recommend the official <code className="bg-gray-700 px-2 py-1 rounded">vue-fontawesome</code> component (described below), which uses the SVG + JS method to render icons. But you can opt to use the{' '}
          <a href="#" className="text-blue-300 underline">Web Fonts with CSS</a> method if you prefer.
        </p>
        <p className="mt-2">
          We’ll cover the basics of installing core utility packages, icon installation, and installing the Vue component, so that you can make awesome stuff your way!
        </p>
        <p className="mt-2">
          Follow the steps below to set up the <code className="bg-gray-700 px-2 py-1 rounded">vue-fontawesome</code> component in your project.
        </p>
      </section>

      {/* Step 1: Add SVG Core */}
      <section>
        <h2 className="text-2xl font-bold mb-2">1. Add SVG Core</h2>
        <p>First you’ll need to use npm or yarn to <span className='text-amber-300'>install the core package</span> which includes all the utilities to make the icons work:</p>
        {/* <div className="bg-black text-green-400 font-mono p-3 mt-2 rounded">
          npm i --save @fortawesome/fontawesome-svg-core
        </div> */}

        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                  <code id="code" className='text-3xl'>  npm i --save @fortawesome/fontawesome-svg-core</code>
                  <button onClick={(e) => {
                    const copytext = document.getElementById("code");
                    copy(copytext.innerHTML)
                    msg();
                  }}>copy</button>
                </div>
        <a href="#" className="text-blue-300 underline block mt-2">Find out more about what's in Font Awesome core</a>
      </section>

      {/* Step 2: Add Icon Packages */}
      <section>
        <h2 className="text-2xl font-bold mb-2">2. Add Icon Packages</h2>
        <p>
          Next, you’ll <span className='text-amber-300'>install the icons</span> you want to use — you can choose a Kit Package or SVG Icon Packages, and select any of{' '}
          <a href="#" className="text-blue-300 underline">our styles</a>.
        </p>
        <p className="mt-2">
          For Pro icons, you’ll first need to set up access with your secret Font Awesome npm token and global or per-project access.
        </p>
        {/* <div className="bg-black text-green-400 font-mono p-3 mt-3 rounded">
          npm i --save @fortawesome/kit-KIT_CODE@latest
        </div> */}
<div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                  <code id="code1" className='text-3xl'> npm i --save @fortawesome/kit-KIT_CODE@latest</code>
                  <button onClick={(e) => {
                    const copytext = document.getElementById("code1");
                    copy(copytext.innerHTML)
                    msg();
                  }}>copy</button>
                </div>
      </section>

      {/* Step 3: Add Vue Component */}
      <section>
        <h2 className="text-2xl font-bold mb-2">3. Add the Vue Component</h2>
        <p>
          And lastly, <span className='text-amber-300'>install the Font Awesome Vue component</span>:
        </p>
        <div className="bg-[#0b2446] p-4 rounded mt-2">
          <h3 className="font-semibold mb-2">Using Vue 2 or Vue 3?</h3>
          <p>
            How you install our <code className="bg-gray-700 px-2 py-1 rounded">vue-fontawesome</code> component will be different depending on whether you are using Vue 2 or Vue 3. Make sure to only install the appropriate one that matches the version of Vue you are using.
          </p>
        </div>
        {/* <div className="bg-black text-green-400 font-mono p-3 mt-3 rounded">
          npm i --save @fortawesome/vue-fontawesome@latest-3
        </div> */}
        <div className="bg-gray-800 rounded px-4 py-3 mt-2.5 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                          <code id="code2" className='text-5xl'>   npm i --save @fortawesome/vue-fontawesome@latest-3</code>
                          <button onClick={(e) => {
                            const copytext = document.getElementById("code2");
                            copy(copytext.innerHTML)
                            msg();
                          }}>copy</button>
                        </div>
      </section>

      {/* Final Section: Ready to Add Icons */}
      <section>
        <h2 className="text-2xl font-bold mt-6">You're Ready to Add Icons!</h2>
        <p className="mt-2">
          Like Anakin said, it’s woooorrrking! All of our <a href="#" className="text-blue-300 underline">icons</a> are now ready to do your project’s bidding.
          <a href="#" className="text-blue-300 underline ml-2">Learn how to add them to your Vue project</a> and then use their power to bring order and style to your UI!
        </p>
           <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://docs.fontawesome.com/web/use-with/vue" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Font Awesome </span> </Link></p>
      </section>
    </div>
  )
}

export default FontAwesome
