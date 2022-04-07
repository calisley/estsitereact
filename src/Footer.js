import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/footer.css"
import { Link } from "react-router-dom";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

function Footer(){
    return(
        <>
            <Container fluid className="footer">
                <Row>
                    <Col xs={6}>
                    <Row>
                        <Col xs={12} lg={3} md={6} sm={6}>
                        <Link to="/">
                            Home
                        </Link>
                        </Col>
                        <Col xs={12} lg={3} md={6} sm={6}>
                        <Link to="/calling_est">
                            Calling Est
                        </Link>
                        <Link to="/calling_est/whentocall" className="sub_dir">
                            When to Call
                        </Link>
                        <Link to="/calling_est/whathappens" className="sub_dir">
                            What happens?
                        </Link>
                        <Link to="/calling_est/otherservices" className="sub_dir">
                            Other Services
                        </Link>
                        <Link to="/calling_est/confidentiality" className="sub_dir">
                            Confidentiality 
                        </Link>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/about/history" className="sub_dir">
                            Histort
                        </Link>
                        <Link to="/about/ourrole" className="sub_dir">
                            Our Role
                        </Link>
                        <Link to="/about/theteam" className="sub_dir">
                            The Team
                        </Link>
                        <Link to="/about/roster" className="sub_dir">
                            Roster
                        </Link>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                        <Link to="/services">
                            Services
                        </Link>
                        <Link to="/services/eventcoverage" className="sub_dir">
                            Event Coverage
                        </Link>
                        <Link to="/services/cprclasses" className="sub_dir">
                            CPR Classes
                        </Link>
                        <Link to="/services/abt" className="sub_dir">
                            Active Bystander
                        </Link>
                        </Col>
                    </Row>
                    </Col>
                    <Col xs={6}>
                    <Row>
                    <Col lg={3} md={6} sm={6} xs={12}>
                    <Link to="/apply">
                            Apply
                        </Link>
                        <Link to="/apply/process" className="sub_dir">
                            Application Process
                        </Link>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                        <Link to="/alumni">
                            Alumni
                        </Link>
                        <Link to="/alumni/donate" className="sub_dir">
                            Donate
                        </Link>
                        <Link to="/alumni/reunion" className="sub_dir">
                            Reunion
                        </Link>
                        <Link to="/alumni/network" className="sub_dir">
                            Networking
                        </Link>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className='contact'>
                            Contact us!
                            <Col>
                            <Row>
                                <AiOutlinePhone/> 314-935-5555

                            </Row>
                            <Row>
                                <AiOutlineMail/> est.exec@gmail.com
                                
                            </Row>
                            <Row className="socials">
                                <a href='https://instagram.com'>
                                    <AiOutlineInstagram/>
                                </a>
                                <a href='https://facebook.com'>
                                    <AiOutlineFacebook/>
                                </a>
                                
                            </Row>
                            </Col>
                        </Col>
                    
                    </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer;