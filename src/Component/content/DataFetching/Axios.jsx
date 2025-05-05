import React from 'react'
import { Link } from 'react-router-dom'

function Axios() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-2 font-sans">
      <h2 className="text-center font-bold mb-2">Getting Started with Axios</h2>
      <section className="mb-10">
        <h4 className="text-3xl mt-3 font-semibold mb-2">What is Axios?</h4>
        <p className="text-lg mb-2">
          Axios is a{" "}
          <span className="italic text-blue-600">promise-based</span> HTTP
          Client for{" "}
          <span className="bg-purple-100 text-purple-800 px-1 rounded font-mono">
            node.js
          </span>{" "}
          and the browser. It is{" "}
          <span className="italic text-blue-600">isomorphic</span> (= it can run
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
            <pre className="bg-gray-800 text-purple-400 rounded-md p-4 overflow-x-auto">
              <code>$ <span className="text-purple-300">npm install</span> axios</code>
            </pre>
          </div>

          <div>
            <p className="mb-2 text-lg">Using bower:</p>
            <pre className="bg-gray-800 text-purple-400 rounded-md p-4 overflow-x-auto">
              <code>$ <span className="text-purple-300">bower install</span> axios</code>
            </pre>
          </div>

          <div>
            <p className="mb-2 text-lg">Using yarn:</p>
            <pre className="bg-gray-800 text-purple-400 rounded-md p-4 overflow-x-auto">
              <code>$ <span className="text-purple-300">yarn add</span> axios</code>
            </pre>
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
          <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://axios-http.com/docs/intro" role='button'><span className="fw-bold underline text-cyan-200 ms-2">Axios</span> </Link></p>
      </section>

    </div>
  )
}

export default Axios
