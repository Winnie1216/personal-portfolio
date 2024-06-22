import logo from './logo.svg'
import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner'
import { Education } from './Components/Education'
import { TimelineItem } from './Components/TimelineItem'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
    </div>
  )
}

export default App
