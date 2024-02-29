import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              Restaurant_App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Link to="/" className="nav-link text-uppercase">
                Home
              </Link>
              <Link to="/menu" className="nav-link text-uppercase">
                Menu
              </Link>
              <Link to="/about" className="nav-link text-uppercase">
                About
              </Link>
              <Link to="/contact" className="nav-link text-uppercase">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">copyright @ made by Anurag Mahajan</p>
      </footer>
    </div>
  );
}

export default App;
