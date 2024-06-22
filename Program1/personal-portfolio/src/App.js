import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner'
import { Education } from './Components/Education'
import { Projects } from './Components/Projects';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Projects />
    </div>
  )
}

export default App
