import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Footer from "./common/Footer/Footer";
import About from "./modules/About/About";
import Home from './modules/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
