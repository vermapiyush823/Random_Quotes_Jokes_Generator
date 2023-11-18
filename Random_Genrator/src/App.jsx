import './App.css'
import Home from '../src/Pages/Home/Home'
import Quotes from './Pages/Quotes/Quotes'
import Jokes from './Pages/Jokes/Jokes'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </>
  )
}

export default App
