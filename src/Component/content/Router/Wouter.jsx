import React from 'react'
import { Link } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import { msg } from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';


function Wouter() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-2 space-y-20 font-sans">
      <h2 className="text-center font-bold mb-4 pb-2">Getting Started with Wouter</h2>

      <p className="mb-4 text-lg">First, add wouter to your project.</p>

      <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
        <code id="code"> npm i wouter</code>
        <button onClick={(e) => {
          const copytext = document.getElementById("code");
          copy(copytext.innerHTML)
          msg();
        }}>copy</button>
      </div>

      <p className="text-lg">
        Check out this simple demo app below. It doesn't cover hooks and other
        features such as nested routing, but it's a good starting point for
        those who are migrating from React Router.
      </p>
      <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://www.npmjs.com/package/wouter" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Wouter</span> </Link></p>
    </div>
  )
}

export default Wouter
