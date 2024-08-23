import { Col, Container, Nav, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="gap-4 gap-md-0">
          <Col md={3}>LOGO</Col>
          <Col md={3}>
            <ul>
              <li>
                <p className="clr-white">Services</p>
              </li>
              <li>
                <p>Measurement Service Product Advice Interior Design</p>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            {" "}
            <ul className="d-flex gap-2 flex-column ">
              <li>
                <Nav.Link href="/products">products</Nav.Link>
              </li>
              <li>
                <p className="fs16">Sand Stone</p>
              </li>
              <li>
                <p className="fs16"> Stone</p>
              </li>
              <li>
                <p className="fs16">Cement </p>
              </li>
              <li>
                <p className="fs16"> Soft Stone</p>{" "}
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li>
                <p className="clr-white">Contact information</p>
              </li>
              <li>
                <p className="fs16">
                  3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, An Nuzhah, Riyadh
                  12474, Saudi Arabia
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
