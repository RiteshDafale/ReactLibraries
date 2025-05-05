import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import chakra from '../content/Images/sniped.png';
import vitaconfig from '../content/Images/sniped2.png';


function Chakra() {
    useEffect(() => {
        document.title = "React - Chakra UI"
    })
    return (
        <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans' >
            <div className="heading">
                <h5 className='text-center underline'>Getting started with Chakra UI</h5>
                <p>This is another fast-growing, popular, and accessible React UI library. Chakra UI is a simple, modular library that gives you the building blocks to build your React applications.</p>
                <p>Chakra UI has over <span className='fw-bold'>37.3k stars on GitHub</span> and <span className='fw-bold'>533k weekly downloads on NPM.</span></p>
            </div>

            <div className="Installation">
                <div className='leading-2'>
                    <h5>Installation</h5>
                    <p >{"1)"} <span className='fw-bold hover:underline cursor-pointer decoration-1 '><span className='text-amber-600'>npm install</span> @chakra-ui/react @emotion/react</span> - command to install <span className="fw-bold underline">Chakra UI</span></p>

                    <p>{"2) "}  <span className='fw-bold hover:underline cursor-pointer decoration-1 '>npx @chakra-ui/cli snippet add</span> - to add Snipet</p>

                    <p>{"3) "} Wrap your application with the <span className='fw-bold'>Provider Component </span>at the root of your application</p>
                    <p>This provider composes the following:</p>
                    <p><span className='fw-bold'>ChakraProvider</span> from <span className='fw-bold'>@chakra-ui/react</span> for the styling system</p>
                    <div className="image">
                        <img src={chakra} alt="some issue"></img>
                    </div>
                    <p className='mt-3'>{"4) "} Setup Vite Config Paths</p>
                    <p>In your project, set up a <span className='fw-bold'>vite config path</span> to automatically sync <span className='fw-bold'> tsconfig with vite </span>using the command:</p>
                    <p className='fw-bold hover:underline ms-2 text-danger'>npm i -D vite-tsconfig-paths</p>
                    <p>update your <span className='fw-bold'>vita.config.ts</span> file:</p>
                    <div className="image">
                        <img src={vitaconfig} alt="some issue"></img>
                    </div>

                </div>
                <p className='mt-2'>for more Visit : <Link className='fw-bold hover:underline-offset-1' to="https://chakra-ui.com/docs/get-started/installation" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Chakra UI</span> </Link></p>
            </div>
        </div>
    )
}

export default Chakra
