import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary dark">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative bg-primary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <About />
            <Projects />
            <Tech />
            <Experience />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
