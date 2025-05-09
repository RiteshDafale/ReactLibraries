import React from 'react'
import { Link } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import { msg } from 'E:/Naresh IT/Reactjs/Projects/allinOnelibrary/src/Component/MessageComp/CopyMessage';

function Axios() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-2 font-sans">
      <h4 className="text-center underline font-bold mb-2">Getting Started with Axios</h4>
      <section className="mb-10">
        <h4 className="text-3xl mt-3 font-semibold my-3 ms-2.5">What is Axios?</h4>
        <p className="text-lg mb-2">
          {" "}
          <span className="italic text-amber-300">Axios is a promise-based</span> HTTP
          Client for{" "}
          <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
            node.js
          </span>{" "}
          and the browser. It is{" "}
          <span className="italic text-amber-300">isomorphic</span> ( it can run
          in the browser and nodejs with the same codebase). On the server-side
          it uses the native node.js{" "}
          <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
            http
          </span>{" "}
          module, while on the client (browser) it uses XMLHttpRequests.
        </p>
      </section>
      <div className=" mx-auto">
        <h4 className="text-4xl font-semibold mb-10">Installing</h4>

        <div className="space-y-8">
          <div>
            <p className="mb-2 text-lg">Using npm:</p>
            <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
              <code id="code">npm install axios</code>
              <button onClick={(e) => {
                const copytext = document.getElementById("code");
                copy(copytext.innerHTML)
                msg();
              }}>copy</button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-lg">Using bower:</p>
            {/* <pre className="bg-gray-800 text-purple-400 rounded-md p-4 overflow-x-auto">
              <code>$ <span className="text-purple-300">bower install</span> axios</code>
            </pre> */}

            <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
              <code id="code1">bower install axios</code>
              <button onClick={(e) => {
                const copytext = document.getElementById("code1");
                copy(copytext.innerHTML)
                msg();
              }}>copy</button>
            </div>

          </div>

          <div>
            <p className="mb-2 text-lg">Using yarn:</p>
            <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
              <code id="code2">yarn add axios</code>
              <button onClick={(e) => {
                const copytext = document.getElementById("code2");
                copy(copytext.innerHTML)
                msg();
              }}>copy</button>
            </div>

          </div>

          <div>
            <p className="mb-2 text-lg">Using jsDelivr CDN:</p>
            <pre className="bg-gray-800 text-blue-400 rounded-md p-4 overflow-x-auto">
              <code>
                &lt;<span className="text-blue-300">script</span> src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"&gt;&lt;/<span className="text-blue-300">script</span>&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-base">
          <li>
            Make{" "}
            <a href="#" className="text-blue-600 underline">
              XMLHttpRequests
            </a>{" "}
            from the browser
          </li>
          <li>
            Make{" "}
            <a href="#" className="text-blue-600 underline">
              http
            </a>{" "}
            requests from node.js
          </li>
          <li>
            Supports the{" "}
            <a href="#" className="text-blue-600 underline">
              Promise
            </a>{" "}
            API
          </li>
          <li>Intercept request and response</li>
          <li>Transform request and response data</li>
          <li>Cancel requests</li>
          <li>Timeouts</li>
          <li>
            Query parameters serialization with support for nested entries
          </li>
          <li>Automatic request body serialization to:</li>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              JSON (
              <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
                application/json
              </span>
              )
            </li>
            <li>
              Multipart / FormData (
              <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
                multipart/form-data
              </span>
              )
            </li>
            <li>
              URL encoded form (
              <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
                application/x-www-form-urlencoded
              </span>
              )
            </li>
          </ul>
          <li>Posting HTML forms as JSON</li>
          <li>Automatic JSON data handling in response</li>
          <li>
            Progress capturing for browsers and node.js with extra info (speed
            rate, remaining time)
          </li>
          <li>Setting bandwidth limits for node.js</li>
          <li>
            Compatible with spec-compliant FormData and Blob (including{" "}
            <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
              node.js
            </span>
            )
          </li>
          <li>
            Client side support for protecting against{" "}
            <a href="#" className="text-blue-600 underline">
              XSRF
            </a>
          </li>
        </ul>
        <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://axios-http.com/docs/intro" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Axios</span> </Link></p>
      </section>

    </div>
  )
}

export default Axios
