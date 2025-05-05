import { useState } from 'react'
import './App.css'
import Homepage from './Component/Homepage/Homepage'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Libraries from './Component/LibrariesList/Libraries'
import MaterialUL from './Component/content/MaterialUL'

function App() {

  return (
    <div className=' mainDiv d-flex' style={{height:"100vh",background:"#08366b",color:"white"}}> 
        <Routes>
          <Route path='/ReactLibraries' element={<Homepage/>} />
          <Route path="/ReactLibraries/library" element={<Libraries/>} />
          <Route path='/*' element={<h2>No page Found</h2>} />
        </Routes>
        
    </div>
  )
}

export default App
