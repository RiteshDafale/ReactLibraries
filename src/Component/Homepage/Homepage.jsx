import React, { useEffect } from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { animate,waapi, stagger   } from 'animejs';

function Homepage() {

    useEffect(()=>{
        waapi.animate('.text', {
            translate: `0 -2rem`,
            delay: stagger(100),
            duration: 600,
            loop: true,
            alternate: true,
            ease: 'outSine',
          });
 
 
    },[])
    const navigate  = useNavigate();
    return (
        <div className=' flex flex-col p-2.5 mt-11 '>
            <h3 className='text-center m-3 text-decoration-underline'>React Libraries</h3>
            <div className='mt-3 grid lg:grid-cols-2 sm:grid-col1 md:col-lg-2'>

                <div className=' bg-dark p-3.5'>
                    <div className="content p-3 flex flex-col justify-center align-center ">
                        <h5 className='text-center underline'>All in one Libraries</h5>
                        <p className=''><span className=' fw-bold'>Welcome , Welcome, Welcome! I'm Ritesh Dafale</span>, currently learning React.js under the guidance of Durga Prasad Sir. While building React apps, I noticed many developers struggle with finding and using the right libraries. To solve this, Sir suggested creating a platform that brings all these Libraries together — and that’s exactly what I’m building now.</p>
                    </div>
                    <div className="button  flex justify-center align-center">
                    <button className='btn btn-primary' style={{width:"fit-content"}}
                    onClick={()=>{
                        navigate("/ReactLibraries/library")
                    }}
                    
                    >Click to get Started</button>
                    </div>
                </div>
                <div className=' bg-dark  flex justify-center align-center '>
                    <div className='p-0 flex flex-col justify-center align-center'>
                        <img className='w-[34vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6I6LUM8p5gy4H4QS-s5r8FkdN10PjC1SWDw&s" alt="some issue" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
