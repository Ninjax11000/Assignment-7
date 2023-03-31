import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar/Nav';
import Questions from './components/Questionaries/Questions';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';
import { read } from '@popperjs/core';

function App() {
  const [readTime, setReadTime]= useState(0)
  const handleReadTime=(time)=>{
    
    const intTime= parseInt(time);
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + intTime;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);

    } else {
      localStorage.setItem("readTime", intTime);
     setReadTime(intTime);
    }
  }
  return (
    <div className="App container">
      <Nav></Nav>
      <div>
        <hr />
      </div>
      <div className="row row-cols-1 row-cols-md-2 ">
        <div className="col blog-container col-md-8 ">
          <Blogs handleReadTime={handleReadTime}></Blogs>
        </div>
        <div className="col side-bar col-md-4 my-2">
          <Sidebar readTime={readTime}></Sidebar>
        </div>

      </div>
      <Questions></Questions>
    </div>
  )
}

export default App
