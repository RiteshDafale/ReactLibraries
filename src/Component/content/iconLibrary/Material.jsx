import React,{useEffect} from 'react'
 import copy from 'copy-to-clipboard';
 import {msg} from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';
 import { Link } from 'react-router-dom'
 

function Material() {
   useEffect(() => {
        document.title = "React - Material UI"
    })
  return (
    <div className="bg-black text-white min-h-screen p-6 space-y-2 font-sans">
      <h4 className='text-center underline'>Material Icons</h4>
      <p className="text-base my-4">
        <a href="#" className="text-amber-300 underline">@mui/icons-material</a> includes the 2,100+ official{" "}
        <a href="#" className="text-blue-400 underline">Material Icons</a> converted to{" "}
        <span className="bg-gray-700 px-2 py-0.5 rounded text-sm font-mono">SvgIcon</span> components. It depends on{" "}
        <span className="bg-gray-700 px-2 py-0.5 rounded text-sm font-mono">@mui/material</span>, which requires Emotion packages. Use one of the following commands to install it:
      </p>

      <div className="bg-gray-800 rounded overflow-hidden mb-6">
        <div className="flex space-x-4 px-4 py-2 border-b border-gray-700 text-sm font-semibold">
          <span className="text-white">npm</span>
        </div>
        {/* <div className="p-4 bg-gray-900 text-green-400 font-mono text-sm">
          npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
        </div> */}
        
         <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                          <code id="code" className='text-3xl'>   npm install @mui/icons-material @mui/material @emotion/styled @emotion/react</code>
                          <button onClick={(e) => {
                            const copytext = document.getElementById("code");
                            copy(copytext.innerHTML)
                            msg();
                          }}>copy</button>
                        </div>
      </div>

      <p className="text-base mb-4">
        See the <a href="#" className="text-blue-400 underline">Installation</a> page for additional docs about how to make sure everything is set up correctly.
      </p>

      <div className="bg-gray-800 rounded p-4 flex space-x-3 items-start">
        <div className="text-gray-400 text-xl">ℹ️</div>
        <p className="text-sm">
          Google offers <a href="#" className="text-blue-400 underline">Material Symbols</a> as the successor to Material Icons.
          However, <span className="bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">@mui/icons-material</span> currently
          supports only Icons, with no support for Symbols yet.
        </p>
      </div>
    </div>
  )
}

export default Material
