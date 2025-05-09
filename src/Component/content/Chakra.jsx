import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import chakra from '../content/Images/sniped.png';
import vitaconfig from '../content/Images/sniped2.png';
import { ToastContainer, toast } from 'react-toastify';
import copy from 'copy-to-clipboard';



function Chakra() {
    useEffect(() => {
        document.title = "React - Chakra UI"
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
        <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans' >
            <div className="heading">
                <h5 className='text-center underline'>Getting started with Chakra UI</h5>
                <p>This is another fast-growing, popular, and accessible React UI library. Chakra UI is a simple, modular library that gives you the building blocks to build your React applications.</p>
                <p>Chakra UI has over <span className='text-amber-400'>37.3k stars on GitHub</span> and <span className='text-amber-400'>533k weekly downloads on NPM.</span></p>
            </div>

            <div className="Installation">
                <div className='leading-2'>
                    <h5>Installation</h5>
                    {/* npm install @chakra-ui/react @emotion/react */}
                    <p className='ms-3'>{"1. "}Command to install Material using uisng NPM</p>
                    <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                        <code id="code">npm install @chakra-ui/react @emotion/react</code>
                        <button onClick={(e) => {
                            const copytext = document.getElementById("code");
                            copy(copytext.innerHTML)
                            msg();
                        }}>copy</button>
                    </div>
                    <p className='ms-3'>{"2. "}Add Snippets</p>
                    <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                        <code id="code2">npx @chakra-ui/cli snippet add</code>
                        <button onClick={(e) => {
                            const copytext = document.getElementById("code2");
                            copy(copytext.innerHTML)
                            msg();
                        }}>copy</button>
                    </div>
                    <p>{"3) "} Wrap your application with the <span className='text-amber-400'>Provider  </span>Component at the root of your application.</p>
                    <p>This provider composes the following:</p>
                    <p className='mt-3'><span className='text-amber-400'>ChakraProvider</span> from <span className='text-amber-400'>@chakra-ui/react</span> for the styling system</p>
                    <div className="image">
                        <img className='my-2' src={chakra} alt="some issue"></img>
                    </div>
                    <p className='mt-3'>{"4) "} Setup Vite Config Paths</p>
                    <p>In your project, set up a <span className='text-amber-400'>vite config path</span> to automatically sync <span className='text-amber-400'> tsconfig with vite </span>using the command:</p>
          {/* <p className='text-amber-400 hover:underline ms-2 text-danger'>npm i -D vite-tsconfig-paths</p> */}
          <div className="bg-gray-800 rounded px-4 py-3 font-mono text-sm text-gray-200 mb-6 relative flex align-center justify-between">
                        <code id="code3">npm i -D vite-tsconfig-paths</code>
                        <button onClick={(e) => {
                            const copytext = document.getElementById("code3");
                            copy(copytext.innerHTML)
                            msg();
                        }}>copy</button>
                    </div>
                    <p>update your <span className='text-amber-400'>vita.config.ts</span> file:</p>
                    <div className="image">
                        <img src={vitaconfig} alt="some issue"></img>
                    </div>

                </div>
            
                  <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://chakra-ui.com/docs/get-started/installation" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Chakra UI</span> </Link></p>
            </div>
        </div>
    )
}

export default Chakra
