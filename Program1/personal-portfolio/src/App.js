import logo from './logo.svg'
import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner'
import { Skills } from './Components/Skills'

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
    </div>
  )
}

export default App
