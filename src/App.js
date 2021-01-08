import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./EST logo blue.png";
import { Link, Route, Switch } from "react-router-dom";
import { useState } from "react";
import CustomNavDropdown from "./CustomNavDropdown.js";
import custom_css from "./custom_css.css";
import Home from "./Home.js";
import DropdownItem from "react-bootstrap/DropdownItem";
import Container from "react-bootstrap/Container";

import "./customize_nav.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenusOpen, setSubMenusOpen] = useState();
  const [selected, setSelected] = useState();

  const handleSelect = (eventKey) => {
    setSelected(eventKey)
    setIsOpen(false);
    setSubMenusOpen(false);
  };

  return (
    <>
      <Navbar expand="md" variant="light" expanded={isOpen}>
        <Container className="headerPadding" fluid>
          <Navbar.Brand as={Link} to="/" eventKey="100" onClick={handleSelect}>
            <img height="41" className="d-inline-block align-top" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {setSubMenusOpen(); setIsOpen(true)}}
          />
        </Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" onSelect={handleSelect} activeKey={selected}>
            <CustomNavDropdown
              title="Calling EST"
              path="/calling_est"
              subMenusOpen={subMenusOpen}
            >
              <DropdownItem as={Link} to="/calling_est/whentocall" eventKey="3">
                When to Call
              </DropdownItem>
              <DropdownItem
                as={Link}
                to="/calling_est/whathappens"
                eventKey="4"
              >
                What Happens When I Call?
              </DropdownItem>
              <DropdownItem
                as={Link}
                to="/calling_est/otherservices"
                eventKey="5"
              >
                Other Medical Services
              </DropdownItem>
              <DropdownItem
                as={Link}
                to="/calling_est/confidentiality"
                eventKey="6"
              >
                Confidentiality
              </DropdownItem>
            </CustomNavDropdown>

            <CustomNavDropdown
              title="About"
              path="/about"
              subMenusOpen={subMenusOpen}
            >
              <DropdownItem as={Link} to="/about/history" eventKey="7">
                History
              </DropdownItem>
              <DropdownItem as={Link} to="/about/our_role" eventKey="8">
                Our Role
              </DropdownItem>
              <DropdownItem as={Link} to="/about/the_team" eventKey="9">
                The Team
              </DropdownItem>
              <DropdownItem as={Link} to="/about/roster" eventKey="10">
                Roster
              </DropdownItem>
            </CustomNavDropdown>

            <CustomNavDropdown
              title="Services"
              path="/services"
              subMenusOpen={subMenusOpen}
            >
              <DropdownItem
                as={Link}
                to="/services/event_coverage"
                eventKey="11"
              >
                Event Coverage
              </DropdownItem>
              <DropdownItem as={Link} to="/services/cpr_classes" eventKey="12">
                CPR Classes
              </DropdownItem>
              <DropdownItem
                as={Link}
                to="/services/active_bystander"
                eventKey="13"
              >
                Active Bystander Trainings
              </DropdownItem>
            </CustomNavDropdown>

            <CustomNavDropdown
              title="Apply"
              path="/apply"
              subMenusOpen={subMenusOpen}
            >
              <DropdownItem
                as={Link}
                to="/apply/application_process"
                eventKey="14"
              >
                Application Process
              </DropdownItem>
            </CustomNavDropdown>

            <CustomNavDropdown
              title="Alumni"
              path="/alumni"
              subMenusOpen={subMenusOpen}
            >
              <DropdownItem as={Link} to="/alumni/donate" eventKey="15">
                Donate
              </DropdownItem>
              <DropdownItem as={Link} to="/alumni/reunion" eventKey="16">
                Reunion
              </DropdownItem>
              <DropdownItem as={Link} to="/alumni/networking" eventKey="17">
                Networking
              </DropdownItem>
            </CustomNavDropdown>

            <Nav.Link as={Link} to="/techscorner" eventKey="18" id='techs-corner'>
              Tech's Corner
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <>About</>
        </Route>
        <Route path="/users">
          <>users</>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
