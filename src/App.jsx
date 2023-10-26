import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </>
  )
}

export default App
