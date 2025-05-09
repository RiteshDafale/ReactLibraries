import React from 'react'
import img1 from '../content/Images/ant1.png';
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';

function AntDesign() {
  return (
    <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans'>
      <div className=" content ">
        <h5 className='text-center underline  '>Getting started with Ant Design</h5>
        <p ><span className='text-amber-400'>Ant Design React</span> is dedicated to providing a good development experience for programmers.Before starting, it is recommended to learn <span className='text-amber-400'>React first, and correctly install and configure Node.js v16 or above</span>.</p>
        <p>he official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step.</p>
        <div className="installing">
          <h5 className='underline ms-2'>Usage with Vite</h5>

          {/* <p>{"1) "}<span className=' fw-bold'>$ npm install antd --save</span> - Command to install Ant Design</p> */}
          <p className='ms-3'>{"1. "}Command to install Material using uisng NPM</p>
          <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
            <code id="code">npm install antd --save</code>
            <button onClick={(e) => {
              const copytext = document.getElementById("code");
              copy(copytext.innerHTML)
              console.log("copy to clipboard");

              // msg();
            }}>copy</button>
          </div>
          <p className=''>{"2) "}Modify <span className='fw-bold'>src/App.js</span>, import Button component from antd.</p>
          <img className='w-2xs bg-center' src={img1} alt='some isssue' />
          <p className='my-2'>OK, you should now see a blue primary button displayed on the page. Next you can choose any components of antd to develop your application.</p>
          <p className='fw-bold underline text-amber-300'>We are successfully running antd components now, go build your own application!</p>
          {/* <p className='mt-2'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://ant.design/docs/react/getting-started" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Ant Design</span> </Link></p> */}

          <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://ant.design/docs/react/getting-started" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Ant Design</span> </Link></p>
        </div>
      </div>
    </div>
  )
}

export default AntDesign
