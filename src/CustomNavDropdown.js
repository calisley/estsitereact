import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import "./css/customize_nav.css";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Container from "react-bootstrap/esm/Container";

function CustomNavDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [props.subMenusOpen]);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
  }, []);

  return width < breakpoint ? (
    <Dropdown as={NavItem} fluid show={isOpen} variant="light">
      <Container fluid className="customMenuItem">
        <Nav.Link as={Link} to={props.path} eventKey="8">
          {props.title}
        </Nav.Link>
        <Dropdown.Toggle as={NavItem}>
          <div onClick={() => setIsOpen(!isOpen)} className="chevrons">
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>
        </Dropdown.Toggle>
      </Container>

      <Dropdown.Menu>{props.children}</Dropdown.Menu>
    </Dropdown>
  ) : (
    <Dropdown
      as={NavItem}
      show={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onSelect={()=>setIsOpen(false)}
    >
      <Nav.Link as={Link} to={props.path} eventKey="8">
          {props.title}
        </Nav.Link>
      <Dropdown.Menu>{props.children}</Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomNavDropdown;
