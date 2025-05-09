import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

function MaterialUL() {
    useEffect(() => {
        document.title = "React - Material UI"
    })

    const msg = () => {
        toast.info('Copied to Clipboard', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: "flip",
        });
    }
    return (
        <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans'>
            <div className="heading">
                <h5 className='text-center underline'>Getting started with Material UI</h5>
                <p><span className="fw-bold underline fw-bold  text-amber-300">Material UI</span> is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.</p>
            </div>
            <div className="introduction">
                <h5>INTRODUCTION</h5>
                <p><span className="fw-bold underline text-amber-300">Material UI</span> is an open-source React component library that implements Google's Material Design.It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box and features a suite of customization options that make it easy to implement your own custom design system on top of our components.</p>
            </div>
            <div className="Installation">
                <div className=''>
                    <h5>Installation</h5>
                    {/* npm install @mui/material @emotion/react @emotion/styled */}
                    <p className='ms-3'>Command to install Material using uisng NPM</p>
                    <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                        <code id="code">npm install @mui/material @emotion/react @emotion/styled</code>
                        <button onClick={(e) => {
                            const copytext = document.getElementById("code");
                            copy(copytext.innerHTML)
                            msg();
                        }}>copy</button>
                    </div>
                </div>

                <div className=' '>
                    <p className='my-4 text-1xl'><span className="fw-bold underline text-amber-300">Material UI</span> uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:</p>
         <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex  justify-between">
                        <code id='code2'>  npm install   @mui/material @mui/styled-engine-sc styled-components </code>
                        <button onClick={(e) => {
                            const copytext = document.getElementById("code2");
                            copy(copytext.innerHTML)
                            msg();
                        }}>copy</button>
                    </div>
                    <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://mui.com/material-ui/getting-started/" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Material UI</span> </Link></p>
                </div>
            </div>
        </div>

    )
}

export default MaterialUL
