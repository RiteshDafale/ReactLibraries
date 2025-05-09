import React from 'react'
import copy from 'copy-to-clipboard';
import {msg} from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';
import { Link } from 'react-router-dom'

function ReactLuicide() {
  return (
   <div className="bg-black text-white min-h-screen p-6 space-y-2 font-sans">
 
        <h4 className='text-center underline'>Welcome to React Lucide</h4>
      <div>
        <h5 className="text-3xl font-bold my-4">What is Lucide?</h5>
        <p className="text-lg">
          Lucide is an open-source icon library that provides 1000+ vector (svg) files for displaying
          icons and symbols in digital and non-digital projects. The library aims to make it easier
          for designers and developers to incorporate icons into their projects by providing several
          official <span className="text-red-400 underline">packages</span> to make it easier to use these icons in your project.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>

        {/* Web */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Web</h3>
          <p className="mb-2">Implementation of the lucide icon library for web applications.</p>
           <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                            <code id="code" className='text-3xl'>pnpm install lucide</code>
                            <button onClick={(e) => {
                              const copytext = document.getElementById("code");
                              copy(copytext.innerHTML)
                              msg();
                            }}>copy</button>
                          </div>
          
          <p>For more details, see the <span className="text-red-400 underline hover:cursor-pointer" onClick={()=> window.location="https://lucide.dev/guide/installation#web"}>documentation</span>.</p>
        </div>

        {/* React */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">React</h3>
          <p className="mb-2">Implementation of the lucide icon library for React applications.</p>

 <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                            <code id="code1" className='text-3xl'> pnpm install lucide-react</code>
                            <button onClick={(e) => {
                              const copytext = document.getElementById("code1");
                              copy(copytext.innerHTML)
                              msg();
                            }}>copy</button>
                          </div>


     <p>For more details, see the <span className="text-red-400 underline hover:cursor-pointer" onClick={()=> window.location="https://lucide.dev/guide/installation#web"}>documentation</span>.lucide-react-native package</p>
              {/* lucide-react-native</span> package. */}
        </div>

        {/* Vue */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Vue</h3>
          <p className="mb-2">Implementation of the lucide icon library for Vue applications.</p>
           <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                            <code id="code2" className='text-3xl'> pnpm install lucide-vue-next</code>
                            <button onClick={(e) => {
                              const copytext = document.getElementById("code2");
                              copy(copytext.innerHTML)
                              msg();
                            }}>copy</button>
                          </div>
          <p>
            For more details, see the <span className="text-red-400 underline hover:cursor-pointer" >documentation</span>. For Vue 2 use the{" "}
            <span className="bg-gray-700 px-2 py-1 rounded text-red-300">lucide-vue</span> package.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReactLuicide
