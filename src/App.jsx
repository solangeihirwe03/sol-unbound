import Aboutme from './page/About-me';
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './page/Services';
import Portifolio from './page/Portifolio';
import Resume from './page/Resume';
import Contact from './page/Contact';

function App() {

  return (
    <>
      <Router>
        <Home>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portifolio" element={<Portifolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Home>
      </Router>
    </>
  );
}

export default App
