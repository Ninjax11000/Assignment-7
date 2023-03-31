import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>nav</h1>
     <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
            <h1>Blogs</h1>
        </div>
        <div class="col">
            <h1>Sidebar</h1>
        </div>

    </div>
    <div>
        <p>Questionaries</p>
    </div>
    </div>
  )
}

export default App
