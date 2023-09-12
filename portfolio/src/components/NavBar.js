import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
//  import logo from '../components/img/logo.png'; 
import navIcon1 from '../components/img/nav-icon1.png';
import navIcon2 from '../components/img/nav-icon2.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
 
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/"> */}
            {/* {<img src={logo} alt="Logo" />} */}
          {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'Resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#social-icons">
              <div className="social-icon">
                <a href="https://github.com/agilani14"><img src={navIcon1} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/aneesa-gilani/"><img src={navIcon2} alt="Linked" /></a>
              </div>
              </Nav.Link>
           </Nav>
       
          <span className="navbar-text">
                <button className="vvd"><span>Let’s Connect</span></button>
    
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}