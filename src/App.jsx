import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Core/NavBar/NavBar";
import "./App.scss"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

function App() {
  return (
  <Router>
<div className="App">
  <NavBar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/work" element={<Work />} />
  </Routes>
</div>

  </Router>
  );
}

export default App;
