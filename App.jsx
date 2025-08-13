import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
 import Romance from './components/Romance'
import Thriller from './components/Thriller'
import  Adventrous from './components/Adventrous'
import  Mystery from './components/Mystery'
import Horror from './components/Horror'
import Study from './components/Study'
import Carousel from './components/Carousel'
import One from "./assests/1.jpg"
import Two from "./assests/2.jpg"
import Three from "./assests/3.jpg"
import Four from "./assests/4.jpg"
import Five from "./assests/5.jpg"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <Router>
        <Navbar/>
            <Routes>
               <Route path='/' element={
      <div className="main">
        <Carousel>
          <img src={One} alt="One"/>
          <img src={Two} alt="Two"/>
          <img src={Three} alt="Three"/>
          <img src={Four} alt="Four"/>
          <img src={Five} alt="Five"/>
        </Carousel>
      </div>
    }/>
                <Route path='/Adventrous' element={<Adventrous/>}/>
                 <Route path="/study/:bookId" element={<Study />} />
                <Route path='/Mystery' element={<Mystery/>}/>
                <Route path='/Horror' element={<Horror/>}/>
                <Route path='/Romance' element={<Romance/>}/>
                <Route path='/Thriller' element={<Thriller/>}/> 
            </Routes>
         </Router>
          

        
    </>
  )
}

export default App
