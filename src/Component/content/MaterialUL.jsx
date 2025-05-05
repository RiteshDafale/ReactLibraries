import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MaterialUL() {
    useEffect(() => {
        document.title = "React - Material UI"
    })
    return (
        <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans'>
            <div className="heading">
                <h5 className='text-center underline'>Getting started with Material UI</h5>
                <p><span className="fw-bold underline">Material UI</span> is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.</p>
            </div>
            <div className="introduction">
                <h5>INTRODUCTION</h5>
                <p><span className="fw-bold underline">Material UI</span> is an open-source React component library that implements Google's Material Design.It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box and features a suite of customization options that make it easy to implement your own custom design system on top of our components.</p>
            </div>
            <div className="Installation">
                <div className='leading-2'>
                    <h5>Installation</h5>
                    {/* npm install @mui/material @emotion/react @emotion/styled */}
                    <p className='ms-3'>Command to install Material using uisng NPM</p>
                    <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative">
                        <code>npm install @mui/material @emotion/react @emotion/styled </code>
                    </div>
                </div>
              
                <div className='leading-2 '>
                    <p className='my-4'><span className="fw-bold underline">Material UI</span> uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:</p>
                    <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative">
                        <code>  npm install   @mui/material @mui/styled-engine-sc styled-components </code>
                    </div>
                    <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{textDecoration:"dotted"}} to="https://mui.com/material-ui/getting-started/" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Material UI</span> </Link></p>
                </div>
            </div>
        </div>

    )
}

export default MaterialUL
