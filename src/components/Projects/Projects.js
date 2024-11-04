import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import hosteller_companion from "../../Assets/Projects/brahma.jpg";
import ric_covid from "../../Assets/Projects/ric-covid.png";
import onestop from "../../Assets/Projects/onestop.png";
import shopai from "../../Assets/Projects/shopai.png";
import chatvio from "../../Assets/Projects/chatvio.png";
import electwise from "../../Assets/Projects/electwise.png";
import stacklimit from "../../Assets/Projects/stacklimit.png";
import helpzz from "../../Assets/Projects/helpzz.png";
import foodhut from "../../Assets/Projects/foodhut.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onestop}
              isBlog={false}
              title="OneStop"
              description="A mobile application with 10000+ downloads, assisting in daily challenges and enhancing essential utilities at IIT Guwahati. App features include Academic Timetable, Lost/Found & Buy/Sell, Cab Sharing, Bus/Ferry Timings, Contacts and more."
              ghLink="https://github.com/swciitg/onestop_flutter"
              demoLink="https://bit.ly/onestop-play"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopai}
              isBlog={false}
              title="ShopAI"
              description="Your own personalised wardrobe recommender! It uses ChatGPT-3.5-turbo API to generate recommendations and then, return items scraped from flipkart."
              ghLink="https://github.com/AmreshSinha/ShopAI"
              demoLink="https://bit.ly/shopai-demo"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electwise}
              isBlog={false}
              title="Electwise"
              description="Web3 platform for conducting secure elections on Ethereum blockchain network with user & admin side views. Election voting happens in set time-frame and afterwards, Result/Statistics are declared. User votes are stored on blockchain."
              ghLink="https://bit.ly/elect-github"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stacklimit}
              isBlog={false}
              title="StackLimit: community focussed QnA platform"
              description="Community based platform where users can post questions and answer to other's questions as well. Supporting image can also be uploaded with questions & answers. Also, every question has it's monthly and total views count attached."
              ghLink="https://github.com/Kunalpal215/stacklimit-community-QnA-platform"
              demoLink="https://www.canva.com/design/DAFF49-0bHk/aEyEdeepZc3-sbK5RlnjVw/view?utm_content=DAFF49-0bHk&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpzz}
              isBlog={false}
              title="Helpzz"
              description="E-Commerce mobile application designed to be used in a community where anyone can register and see items added under Buy & Sell by others and also, can add new items under Buy & Sell."
              ghLink="https://github.com/Kunalpal215/helpzz"
              demoLink="https://www.youtube.com/watch?v=AQkenxZxChY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodhut}
              isBlog={false}
              title="Foodhut"
              description="Full fledged food ordering appliction where you can directly choose fooditems, checkout your order and recieve it through a qr scan by shop owner."
              ghLink="https://github.com/Kunalpal215/Kriti-Software"
              demoLink="https://www.youtube.com/watch?v=SYwHqYY_35s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatvio}
              isBlog={false}
              title="Chatvio: 1 to 1 chatting app"
              description="Chat app built using Flutter and Firebase. Features include sending/accepting friend requests, sending/deleting messages, profile updation, Google authentication and more."
              ghLink="https://github.com/Kunalpal215/chatvio"
              demoLink="https://www.youtube.com/watch?v=KPhRjG1HTrE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Auctioneer"
              description="Mobile application to auction items online during set timeframe. any user can list items and other users can bid for items for higher price."
              ghLink="https://github.com/Kunalpal215/auctioneer"
              demoLink="https://docs.google.com/document/d/1KMTxwVTVogLl5tSUf0KtTun-UVNZoNrFoNwYVyI6RFc/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosteller_companion}
              isBlog={false}
              title="Hostellor Companion"
              description="Mobile application to manage sports invetory in hostel built with flutter and firebase. Features include Items issueing, Items management, QR scanning for submitting"
              ghLink="https://github.com/Kunalpal215/hosteller_companion"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ric_covid}
              isBlog={false}
              title="Covid Management App"
              description="Mobile application with user and admin views which helps in covid management inside campus. Features include slot booking for vacciantion/covid-test, announcements, raise complaints, covid patients map and more"
              ghLink="https://github.com/Kunalpal215/RIC-Covid-Hackathon"
              demoLink="https://www.canva.com/design/DAFtrN8g7nY/j6uiT6-kcjwbP4oH2yNVwQ/view#1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
