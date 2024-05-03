
import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



function App() {




  return (
    
    
    <div>
    
      
    <BrowserRouter>
   <Routes>
     <Route exact path="/" element={<Read/>} />
      <Route  path="/create" element={<Create/>} />
        <Route  path="/update" element={<Update/>} />   
    </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
