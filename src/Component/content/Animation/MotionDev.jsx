import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import {msg} from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';

function MotionDev() {
  useEffect(() => {
    document.title = "Reactjs - Motion.Dev"
  }, [])
  return (
    <div className='min-h-screen bg-black text-white px-6 py-2 font-sans'>
      <div className="">
        <h5 className='text-center underline'>Getting started with Motion </h5>
        <div className="listpoints  my-4">
          <p >{"1. "}<span className='text-amber-300 fw-bold'>Motion</span> for React is an animation library that's simple to start and fun to master.</p>
          <p>{"2. "}It's the only library with a hybrid engine. This means it offers both the hardware accelerated performance of native browser animations, coupled with the limitless potential of JavaScript animations.</p>
          <p>{"3. "}It's also trusted by Framer to power its amazing no-code animations and gestures.</p>
          <p>{"4. "}In this guide, we'll learn how to install Motion and take a whirlwind tour of its main features.</p>
        </div>
      </div>
      <div className=" install">
        <h5 className='ms-2'>Installation</h5>
        <p>{"5. "}Motion is available via npm:</p>
        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code">npm install Motion</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
        </div>
        <div className="code mt-3  ">
          <p className='lh-1'>{"6. "}Features can now be imported via <span className='fw-bold'>"motion/react":</span></p>
          <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code2">{"import { motion } from motion/react"}</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code2");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
          </div>
          <p><span className='underline text-amber-300'>Note: Motion for React contains APIs specifically tailored for React, but every feature from vanilla Motion is also compatible and available for advanced use-cases.</span></p>

            <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://motion.dev/docs/react-quick-start#usage" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Motion.dev</span> </Link></p>
        </div>
      </div>
    </div>
  )
}

export default MotionDev
