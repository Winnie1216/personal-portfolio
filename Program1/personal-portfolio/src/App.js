import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner'
import { Education } from './Components/Education'
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
