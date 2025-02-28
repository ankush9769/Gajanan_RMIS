import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Phone, Mail } from "lucide-react"
import footerlogo from '/footerlogo.jpg'

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "#e41937" }}>
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <div className="d-flex" style={{width: '100%'}}>
            <img src={footerlogo} alt="Gajanan Arts LLP" className="mb-2" />
            <p style={{margin: '3rem', fontSize: '2rem', color: 'white'}} className='ankush-popup'>Shree Gajanan Arts LLP</p>
            </div>
          </Col>
          <Col xs={12} md={9} className="text-end">
            <h4 className="text-uppercase fw-bold" style={{ color: "#ffeb3b" }}>
              Quick Links
            </h4>
          </Col>
        </Row>

        <Row>
          {/* LOCATE US Section */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-warning mb-3">Locate Us</h5>
            <div className="text-white">
              <p className="mb-1">
                <strong>M/S Gajanan Arts LLP</strong>
              </p>
              <p className="mb-1">101/1, Nishant Complex</p>
              <p className="mb-1">Near Bus Stand</p>
              <p className="mb-1">1234 Dist. - Nasik</p>
            </div>
          </Col>

          {/* CONNECT WITH US Section */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-warning mb-3">Connect With Us</h5>
            <div className="text-white">
              <p className="mb-2 d-flex align-items-center">
                <Mail size={16} className="me-2" />
                <a href="mailto:info@gajananarts@gmail.com" className="text-white text-decoration-none">
                  info@gajananarts@gmail.com
                </a>
              </p>
              <p className="mb-2 d-flex align-items-center">
                <Phone size={16} className="me-2" />
                <a href="tel:+919898765747" className="text-white text-decoration-none">
                  9898765747
                </a>
              </p>
            </div>
          </Col>

          {/* EXPLORE Section */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-white mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Categories
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
            </ul>
          </Col>

          {/* CONNECT Section */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-white mb-3">Connect</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Location
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Newsletter
                </a>
              </li>
            </ul>
          </Col>

          {/* HELP Section */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-white mb-3">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

