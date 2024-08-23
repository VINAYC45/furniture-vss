import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <Navbar
        // collapseOnSelect={true}
        expand="lg"
        className={styles.navBar}
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={currentPath === "/" ? styles.active : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className={
                  currentPath === "/products" ||
                  currentPath === `/singleProduct/:id`
                    ? styles.active
                    : ""
                }
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={currentPath === "/projects" ? styles.active : ""}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/wish-list"
                className={currentPath === "/wish-list" ? styles.active : ""}
              >
                Wish List
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                className={currentPath === "/cart" ? styles.active : ""}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={currentPath === "/contact" ? styles.active : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </header>
  );
};

export default Header;
