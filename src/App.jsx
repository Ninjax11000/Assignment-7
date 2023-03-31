import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar/Nav';
import Questions from './components/Questionaries/Questions';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Nav></Nav>
      <div>
        <hr />
      </div>
      <div class="row row-cols-1 row-cols-md-2 ">
        <div class="col blog-container col-md-8 ">
          <Blogs></Blogs>
        </div>
        <div class="col side-bar col-md-4 my-2">
          <Sidebar></Sidebar>
        </div>

      </div>
      <Questions></Questions>
    </div>
  )
}

export default App
