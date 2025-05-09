import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { msg } from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';
import copy from 'copy-to-clipboard';

function Anime() {
  useEffect(() => {
    document.title = "React - Anime.js"
  })
  return (
    <div className=''>
      <div className="min-h-screen bg-black text-white px-6 py-2 font-sans">
        <h2 className='text-center'>Getting started with Anime.js</h2>
        <h4 className=" font-bold text-red-500 mb-4 ms-3">Installation</h4>


        <p className="text-lg text-gray-300 mb-6">
          <span className='text-amber-300'>Anime.js</span> can be installed in multiple ways depending of your environment or workflow.
          This section covers differents methods of installation.
        </p>
        <h3 className=" font-bold mb-2 text-gray-200">Installation via NPM and a bundler</h3>
        <p className="text-gray-400 mb-4">
          If you're using a bundler like <a href="#" className="text-white">Vite</a> or <a href="#" className="underline text-white">esbuild</a>,
          simply install the package via <a href="#" className="underline text-white">NPM</a>.
        </p>
        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code">npm install animejs</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
        </div>
        <p className="text-gray-300 mb-2">
          Then import <span className="italic">Anime.js</span> methods as <span className="font-bold">ES6 Modules</span> like this:
        </p>
        <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
          <code id="code1">{" import { animate } from 'animejs';"}</code>
          <button onClick={(e) => {
            const copytext = document.getElementById("code1");
            copy(copytext.innerHTML)
            msg();
          }}>copy</button>
        </div>

       

         <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://animejs.com/documentation/getting-started/installation" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Animi.js</span> </Link></p>
      </div>
    </div>
  )
}

export default Anime
