import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "./img/EST logo blue.png";
import { MdPhoneInTalk } from "react-icons/md";
import "./css/home_css.css";

function Home() {
  return (
    <>
    <Container id="main_cover" fluid>
      <Jumbotron id="hero-jumbo">
        <img className="hero-image" src={logo} alt="Brookings Hall"/>
        <h4>Washington University in St. Louis Emergency Support Team</h4>
        <Button fluid variant="danger" id="ctaCall" disabled>
          <MdPhoneInTalk /> IF THIS IS A MEDICAL EMERGENCY, DIAL (314) 935-5555
        </Button>
<Container id="ctaFaqs">
          <Button fluid className="est-btn-inverted">
            When should I call?
          </Button>
          <Button fluid className="est-btn-inverted">
            What happens when I call?
          </Button>
          </Container>     
      </Jumbotron>
    </Container>
      <Container fluid className="hopskotch">
    <Row>
      <Col lg={true}>
        <div className="hopskotchImage" id="about"/>
      </Col>
      
      <Col lg={true}>
          <Container fluid className="hopskotchText">  
          <h3>
          Who we are...
          </h3>
          <p>
          The Washington University Emergency Support Team is a student-run volunteer first responder emergency medical service for the Danforth campus, active 24 hours a day, 7 days a week during the fall and spring semesters.
          </p>
          <p>
          In the case of a medical emergency, dial (314) 935-5555. If calling from a campus phone, dial 5-5555 (“Fistful of Fives”).
          </p>
          <Button className="est-btn-inverted"> 
            About Us
          </Button>
        </Container>
      </Col>
    </Row>
    <Row>
    <Col lg={true} lg={{order:2}}>
        <div className="hopskotchImage" id="additional"/>
      </Col>
      
      <Col lg={true} lg={{order:1}}> 
          <Container fluid className="hopskotchText oppsite">  
          <h3>
          What we do...
          </h3>
          <p>
          In addition to providing emergency medical services, EST provides CPR classes, active bystander trainings, and special event coverage for events like WILD and Vertigo.
          </p>
          <p>
          Information regarding dates CPR classes or Active Bystander trainings are offered, or how to request special event coverage can be found under “Additional Services"
          </p>
          <Button className="est-btn-inverted">
            Additional Services
          </Button>
        </Container>
      </Col>
     
    </Row>
    <Row>
      <Col lg={true}>
        <div className="hopskotchImage" id="apply"/>
      </Col>
      
      <Col lg={true}>
          <Container fluid className="hopskotchText">  
          <h3>
          How do I join?
</h3>
          <p>
          Every fall semester EST selects a new tech class of 18-20 first years / sophomores. Being a part of EST offers an opportunity to serve your community, learn life-saving medical skills, and be a part of a tight-knit student organization. Members of EST graduate from Washington University with unique and invaluable knowledge, experiences, and friendships.          </p>
          <p>
          The application for the 2020-2021 academic year is now closed. More information about the process and how to prepare for next year’s application cycle can be found under “Apply”

</p>
          <Button className="est-btn-inverted">
            Apply
          </Button>
        </Container>
      </Col>
    </Row>
    {/* <Row>
      <Col>
      image
      </Col>
      
      <Col>
      text
      </Col>
    </Row>
    <Row>
      <Col>
      image
      </Col>
      
      <Col>
      text
      </Col>
    </Row> */}
      </Container>
    </>
  );
}
export default Home;
