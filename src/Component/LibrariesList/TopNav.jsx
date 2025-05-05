import React, { useState } from 'react'
import '../LibrariesList/topNav.css';
import LibraryName from './LibraryName';

function TopNav() {
    const [libraryName ,setlibraryName] = useState("UI");
    return (
        <div className='mt-2'>
            <div className="grid grid-cols-8 ">
                <div className=" hover:text-3xl  col border-2 text-center hoverDiv mx-2" role='button'
                onClick={()=>{
                    setlibraryName("UI")
                }}
                
                >UI Libraries</div>
                <div className="col border-2 text-center hoverDiv  mx-2" role='button'
                    onClick={()=>{
                        setlibraryName("Animation")
                    }}               
                >Animation Libraries</div>
                <div className="col border-2 text-center hoverDiv  mx-2" role='button'
                    onClick={()=>{
                        setlibraryName("Routing")
                    }}                
                >Routing Libraries</div>
                <div className="col border-2 text-center hoverDiv mx-2 " role='button'
                    onClick={()=>{
                        setlibraryName("Data_Fetching")
                    }}                
                >Data Fetching Libraries</div>
                <div className="col border-2 text-center hoverDiv mx-2 " role='button'
                    onClick={()=>{
                        setlibraryName("Icons")
                    }}
                
                >Icons Libraries</div>
                      <div className="col border-2 text-center hoverDiv mx-2 " role='button'
                    onClick={()=>{
                        setlibraryName("state")
                    }}
                >State Management Libraries</div>
                <div className="col border-2 text-center hoverDiv  mx-2" role='button'
                    onClick={()=>{
                        setlibraryName("CSS")
                    }}
                
                >CSS Libraries</div>
                <div className="col border-2 text-center hoverDiv mx-2 " role='button'
                    onClick={()=>{
                        setlibraryName("Forms")
                    }}
                >Forms Libraries</div>
            </div>
            <LibraryName libraryName = {libraryName}  />

        </div>
    )
}

export default TopNav
