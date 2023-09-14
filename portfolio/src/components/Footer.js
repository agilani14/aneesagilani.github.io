import { Container, Row, Col } from 'react-bootstrap';
// import logo from '../components/img/logo.png';
import navIcon1 from '../components/img/nav-icon1.png';
import navIcon2 from '../components/img/nav-icon2.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            {/* <div className='social-icon'> */}
              {/* <a href="https://github.com/agilani14"><img src={navIcon1} /> </a> */}
              {/* <a href="https://www.linkedin.com/in/aneesa-gilani/"><img src={navIcon2} /> </a> */}
            {/* </div> */}
            <p>CopyRight 2023. All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}