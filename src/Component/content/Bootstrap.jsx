import React, { useEffect } from 'react'
import first from '../content/Images/bootstrap1.png';
import second from '../content/Images/bootstrap2.png';
import { Link } from 'react-router-dom';

function Bootstrap() {
  useEffect(() => {
    document.title = "react - Bootstrap"
  })
  return (
    <div className='bg-black text-white min-h-screen p-6 space-y-2 font-sans'>
      <div className="content">
        <h5 className='text-center underline'>Get started with Bootstrap</h5>
        <p className='mt-3'><span className='text-amber-400 '>Bootstrap</span> is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.</p>
        <h5 className='underline'>Quick start </h5>
        <p>Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps.</p>
        <div className="design">
          <p>{"1)"} Create a new <span className='text-amber-400'>index.html </span>file in your project root. Include the <span className='text-amber-400'>{`<meta name="viewport">`} </span>tag as well for proper responsive behavior in mobile devices.</p>
          <img src={first} alt="some issue" />
          <p className='m-0 my-3'>{"2)"} Include Bootstrap’s CSS and JS. Place the <span className='text-amber-400'>{`<link>`}</span>tag in the<span className='text-amber-400'>{`<head>`}</span>of our CSS , and the <span className='text-amber-400'>{`<script>`} </span>tag tag for our JavaScript bundle (including Popper for positioning dropdowns, popovers, and tooltips) before the closing<span className='text-amber-400'>{`<body>`}</span></p>
          <img src={second} alt="some issue" />
        </div>
        <div className="links">
          <h5>CDN Links</h5>
          <p>As reference, here are our primary CDN links.</p>
          <p>CSS : <span className='cursor-pointer text-blue-400 underline text-amber-400'>https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css</span></p>
          <p>JS : <span className='cursor-pointer text-blue-400 underline text-amber-400'>https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js
          </span></p>
               <p className='mt-3 '>for more Visit : <Link className='fw-bold  text-white  ' style={{ textDecoration: "dotted" }} to="https://getbootstrap.com/docs/5.3/getting-started/introduction/" role='button'> <span className="fw-bold no-underline hover:underline hover:text-base">Bootstrap</span> </Link></p>
          
        </div>
      </div>
    </div >
  )
}

export default Bootstrap
