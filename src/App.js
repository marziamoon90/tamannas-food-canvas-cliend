import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Footer from "./common/Footer/Footer";
import Header from './common/Header/Header';
import About from "./modules/About/About";
import Home from './modules/Home/Home';
import Products from './modules/Products/Products';

function App() {
  return (
    <>
      <div style={{ minHeight: '95vh' }}>
        <BrowserRouter>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
