import React from 'react'
import { Link } from 'react-router-dom'


function ReactNavi() {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 space-y-10 font-sans">
       <h2 className="text-center font-bold mb-4 pb-2">Getting Started with react Navigation</h2>
        {/* Pre-requisites Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Pre-requisites</h2>
          <p className="mb-2">
            If you're already familiar with <span className="text-blue-400">JavaScript</span>, <span className="text-blue-400">React</span> and <span className="text-blue-400">React Native</span>, then you'll be able to get moving
            with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first,
            then come back here when you're done.
          </p>
        </section>
  
        {/* Starter Template Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Starter template</h2>
          <p className="mb-2">
            If you're starting a new project, you can use the <span className="text-purple-400">React Navigation template</span> to quickly set up a new
            project with <span className="text-purple-400">Static configuration</span>:
          </p>
          <pre className="bg-gray-800 text-green-400 p-4 rounded mb-3">
            npx create-expo-app@latest --template react-navigation/template
          </pre>
          <p className="mb-2">See the project's <code className="bg-gray-700 px-2 py-1 rounded">README.md</code> for more information on how to get started.</p>
          <p className="mb-2">
            If you created a new project using the template, you can skip the installation steps below and move on
            to <span className="text-purple-400">"Hello React Navigation"</span>.
          </p>
          <p>Otherwise, you can follow the instructions below to install React Navigation into your existing project.</p>
        </section>
  
        {/* Installation Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <p className="mb-2">Install the required packages in your React Native project:</p>
          <div className="flex space-x-4 mb-3">
            <button className="bg-purple-600 px-4 py-1 rounded">npm</button>
          </div>
          <pre className="bg-gray-800 text-green-400 p-4 rounded mb-3">
            npm install @react-navigation/native
          </pre>
          <p className="mb-2">
            React Navigation is made up of some core utilities and those are then used by navigators to create the
            navigation structure in your app. Don't worry too much about this for now, it'll become clear soon
            enough! To frontload the installation work, let's also install and configure dependencies used by most
            navigators, then we can move forward with starting to write some code.
          </p>
        </section>
        <p className='mt-3'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://reactnavigation.org/docs/getting-started/" role='button'><span className="fw-bold underline text-cyan-200 ms-2">React Navigation</span> </Link></p>
      </div>
    )
}

export default ReactNavi
