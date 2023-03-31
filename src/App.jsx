import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar/Nav';
import Questions from './components/Questionaries/Questions';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';
import { read } from '@popperjs/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [readTime, setReadTime]= useState(0)
  const handleReadTime=(time)=>{
    
    const intTime= parseInt(time);
    const previousReadTime = readTime;
    if (previousReadTime) {
      const sum = previousReadTime + intTime;
      
      setReadTime(sum);

    } else {
      
     setReadTime(intTime);
    }
  }
  const [bookmarks, setBookMark]=useState([]);
  const handleBookmark = (blog) => {
    const getBookmarks = bookmarks.find(bookmark => bookmark.id === blog.id);
    if (getBookmarks) {
       toast("Already exists!!")
        return;
    }
    const newBookmarks = [...bookmarks, blog];
    setBookMark(newBookmarks);
}

  return (
    <div className="App container">
      <Nav></Nav>
      <div>
        <hr />
      </div>
      <div className="row row-cols-1 row-cols-md-2 ">
        <div className="col blog-container col-md-8 ">
          <Blogs handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="col side-bar col-md-4 my-2">
          <Sidebar readTime={readTime} bookmarks={bookmarks}></Sidebar>
        </div>

      </div>
      <ToastContainer></ToastContainer>
      <Questions></Questions>
    </div>
  )
}

export default App
