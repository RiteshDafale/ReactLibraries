import React, { useState } from 'react'
import LibraryCont from './LibraryCont'
import { useNavigate } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import MaterialUL from '../content/MaterialUL';


function LibraryName({ libraryName }) {
    const [libraryInfo,setlibraryInfo] = useState("Material");
    const navigate = useNavigate();
    return (
        <div className='flex flex-row p-0  bg-gray-800 mt-4 m-auto'>
            {/* {libraryName} */}
            {
                libraryName === "UI" && (
                    <div className=' p-1 text-center w-full max-w-[173px] mx-auto' style={{}}>

                        <div className='border-b  cursor-pointer peer-active:bg-primary hover:border-2 p-1 'onClick={() => {                     
                                setlibraryInfo("Material")
                            }}
                        >Material UI</div>
                        <div className='p-1 border-b cursor-pointer   hover:border-2' 
                          onClick={() => {                              
                                setlibraryInfo("Chakra")
                            }}
                        
                        >Chakra UI</div>
                        <div className='p-1 border-b p-1 cursor-pointer  hover:border-2' 
                          onClick={() => {                           
                                setlibraryInfo("Bootstrap")
                            }}
                        
                        >Bootstrap</div>
                        <div className='p-1 border-b-2 p-1 cursor-pointer  hover:border-2' 
                          onClick={() => {                             
                                setlibraryInfo("AntDesign")
                            }}
                        
                        >Ant Design</div>
                    </div>
                )
            }
            {
                libraryName === "Animation" && (
                    <div className=' text-center w-full max-w-[173px] mx-auto' style={{}}>
                        <div className='border-b p-1 cursor-pointer hover:border-2'
                         onClick={() => {                             
                            setlibraryInfo("motion")
                        }} >Motion.Dev</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2'
                          onClick={() => {                             
                            setlibraryInfo("anime")
                        }} >Anime.js</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2'
                          onClick={() => {                             
                            setlibraryInfo("reactspring")
                        }} >React Spring</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2'
                          onClick={() => {                             
                            setlibraryInfo("reactfiber")
                        }} >React Three Fiber</div>
                    </div>
                )
            }
            {
                libraryName === "Routing" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto' >
                        <div className='border-b p-1 cursor-pointer hover:border-2' 
                        onClick={() => {                             
                            setlibraryInfo("reactrouter")
                        }} >React-Router-Dom</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' 
                        onClick={() => {                             
                            setlibraryInfo("tanstack")
                        }} >TanStack Router</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' 
                        onClick={() => {                             
                            setlibraryInfo("wonder")
                        }} >Wouter</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' 
                        onClick={() => {                             
                            setlibraryInfo("reactnavir")
                        }} >React Navigation</div>
                    </div>
                )
            }
            {
                libraryName === "Data_Fetching" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto'>
                        <div className='border-b p-1 cursor-pointer hover:border-2' onClick={() => {                             
                            setlibraryInfo("axios")
                        }} > Axios</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' onClick={() => {                             
                            // setlibraryInfo("tanstackquery")
                        }} >Tanstack Query</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' onClick={() => {                             
                            // setlibraryInfo("reactquery")
                        }} >React Query</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2'  onClick={() => {                             
                            // setlibraryInfo("reactfetch")
                        }}>react-refetch</div>
                    </div>
                )
            }
            {
                libraryName === "Icons" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto' style={{}}>
                        <div className='border-b p-1 cursor-pointer hover:border-2' > Font Awesome</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >react lucide Icons</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >react Icons</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >Material Icons</div>
                    </div>
                )
            }
            {
                libraryName === "state" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto' style={{}}>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >Redux</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >MobX</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' > Zustad</div>
                        <div className='border-b p-1 cursor-pointer hover:border-2' >Zustand</div>
                    </div>
                )
            }
            {
                libraryName === "CSS" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto' style={{}}>
                        <div className='border-b-2 p-1 cursor-pointer hover:border-2' >tailwind css</div>
                        <div className='border-b-2 p-1 cursor-pointer hover:border-2' >React Bootstrap</div>
                        <div className='border-b-2 p-1 cursor-pointer hover:border-2' >Bulma</div>
                        {/* <div className='grid lg:grid-cols-1 sm:grid-cols-1'>Zustand</div> */}
                    </div>
                )
            }
            {
                libraryName === "Forms" && (
                    <div className=' text-center h-100  w-full max-w-[173px] mx-auto' style={{}}>
                        <div className='border-b-2 p-1 cursor-pointer hover:border-2' >Formik + Yup</div>
                        <div className='border-b-2 p-1 cursor-pointer hover:border-2' >React Hook Form + Zod</div>
                    </div>
                )
            }


            <LibraryCont libraryInfo={libraryInfo} />
            {/* <Routes>
                <Route path="/" element={<LibraryCont/>}/>
            </Routes> */}

        </div>
    )
}

export default LibraryName
