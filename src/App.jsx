import './tailwind.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Navegacion } from './components/share/Navegacion'
import { Footer } from './components/share/Footer'
import { Program } from './pages/Program'
import { AssignConnect } from './pages/AssignConnect'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navegacion />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login />}></Route>
          <Route path='assign' element={<AssignConnect/>}>
            <Route path='program' element={<Program/>}/>
          </Route>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
