import './tailwind.css'
import { Login } from './pages/Login'
import { Navegacion } from './components/Navegacion'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default App
