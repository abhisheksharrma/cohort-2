import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"


function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* <Link to="/">Home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/agence">agence</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
