import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface ButtonProps {
  btnName: string;
  clsName: string;
  redirect: string;
}

const Button: React.FC<ButtonProps> = ({ btnName, clsName, redirect }) => {
  return (
    <Nav.Link as={Link} to={redirect} className={`${clsName} btn `}>
      {btnName}
    </Nav.Link>
  );
};

export default Button;
