import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kunal Pal </span>
            from <span className="purple"> Khatima, Uttarkhand, India.</span>
            <br /> I am a final year student pursuing B.Tech in Civil Engineering from Indian Institute of Technology Guwahati.
            <br />
            <br />
            I have done couple of internships and was <span  className="purple">MLH prep-fellow for Oct 2022 batch.</span>
            <br />
            <br />
            I am currently serving as General Secretary <span  className="purple">Students' Web Committee, Students' Gymkhana Council IIT Guwahati.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Content-Creation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
