import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Kunal Pal </span>
            from <span className="purple"> India.</span> I am a pasionate engineer who is looking for opportunites to collaborate and contribute.
            <br />
            <br /> I graduated in July 2024 from Indian Institute of Technology Guwahati with a Bachelor's degree.
            <br />
            <br />
            With past experience at companies like Sortly Technologies and Alphaherd, I've developed key features, improved workflows, and managed full project lifecycles, from concept to deployment, that drive user engagement and revenue. My expertise spans both frontend and backend technologies, including <span className="purple">React.js, Node.js, AWS, and Azure</span>, enabling me to build scalable solutions with performance and security in mind.
            <br />
            <br />
            Beyond my professional roles, I'm an avid competitive programmer, achieving ranks in global platforms like <span className="purple">Codeforces (Specialist), Google Kickstart, and Meta Hackercup</span>. My technical skills have been further honed through hackathons, including reaching the national finals in the <span className="purple">Smart India Hackathon, semi-finals of Flipkart Grid 5.0 hackathon</span> and qualifying for the Yandex Cup World Finals. These experiences have sharpened my problem-solving abilities and my knack for working under pressure to devise innovative solutions.
            <br />
            <br />
            At IIT Guwahati, I led the development of a mobile app serving over <span className="purple">7,000 students</span> and was responsible for overseeing tech projects impacting the student community of <span className="purple">8,000+</span> as the Institute General Secretary. My expertise spans multiple technologies, including React.js, Node.js, AWS, and Azure, enabling me to create secure, scalable applications with a seamless user experience.
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
