import React, { useEffect } from 'react'
 import copy from 'copy-to-clipboard';
 import {msg} from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';
 import { Link } from 'react-router-dom'
 

function ReactIcons() {
  const usage = `import { FaBeer } from 'react-icons/fa';
           class Question extends React.Component {
              render() {
           return <h3> Lets go for a <FaBeer />? </h3>;
            }
}`
 useEffect(() => {
        document.title = "React - React icons"
    })
  return (

    <div className="bg-black text-white min-h-screen p-6 space-y-2 font-sans">
      <div className="mt-0">
        <h2 className="text-3xl font-semibold text-center">React Icons</h2>
        <p className="mt-4">
          Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that
          allows you to include only the icons that your project is using.
        </p>
      </div>
      <h4 className="text-3xl font-bold mb-4">{"1. "}Installation (for standard modern project)</h4>

      {/* <div className="bg-gray-900 text-white p-4 rounded mb-6 font-mono text-sm">
        <code>npm install react-icons --save</code>
      </div> */}

      <h2 className="text-2xl font-semibold mb-2">Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded mb-6 font-mono text-sm">
        <pre>
          {usage}
        </pre>
      </div>

      <h1 className="text-3xl font-semibold mb-4">Installation (for meteorjs, gatsbyjs, etc)</h1>
      <p className="mb-4">
        If your project grows in size, this option is available. This method has the trade-off that it takes a long
        time to install the package. Suitable for MeteorJS, GatsbyJS etc.
      </p>
      {/* <div className="bg-gray-900 text-white p-4 rounded mb-6 font-mono text-sm">
        <code>npm install @react-icons/all-files --save</code>
      </div> */}

 
 <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                  <code id="code" className='text-3xl'> npm install @react-icons/all-files --save</code>
                  <button onClick={(e) => {
                    const copytext = document.getElementById("code");
                    copy(copytext.innerHTML)
                    msg();
                  }}>copy</button>
                </div>
      <h2 className="text-2xl font-semibold mb-2">Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
        <pre>
          {usage}
        </pre>
      </div>
       <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://react-icons.github.io/react-icons/" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">React Icons</span> </Link></p>
    </div>
  )
}

export default ReactIcons
