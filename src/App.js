// import "./App.css"
import Navbar from "./Components/Navbar";
import About from "./Routes/About";
// import AllRoutes from "./Routes/AllRoutes";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import Skills from "./Routes/Skills";
import Home from "./Routes/Home";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    {/* <AllRoutes /> */}
    </>
  );

}

export default App