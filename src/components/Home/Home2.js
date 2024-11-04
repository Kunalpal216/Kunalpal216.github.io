import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              I am currently working as Software Engineer 1 at <b className="purple">Sortly </b>.
              <br />
              <br />
              I love programming and like to play with new stuff 🤺
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> C++, Javascript, Typescript, Python, Dart. </b>
              </i>
              <br />
              <br />
              My past work experience: &nbsp;
              <li>
                <b className="purple">Founding Software Engineer </b> at Alphaherd Veterinary Pvt Ltd.
              </li>
              <li>
                <b className="purple">Software Engineer Intern </b> at I'mBesideYou Inc Japan.
              </li>
              <li>
                <b className="purple">Flutter Developer </b> at Evy Energy Pvt Ltd.
              </li>
              <br />
              I love to collaborate on ideas and build awesome projects 💻
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>WOULD LOVE TO CONNECT WITH AWESOME PEOPLE LIKE YOU 🌟</h1>
            <p>
              Feel free to <span className="purple">checkout </span>below links
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kunalpal215"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pal-kunal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kunalpal2401"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
