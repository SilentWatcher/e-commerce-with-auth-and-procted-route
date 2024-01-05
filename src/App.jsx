import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom'

function App() {

    return (
    <>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home'element={ <Home/> }/>
        </Routes>
    </>
    )
}

export default App
