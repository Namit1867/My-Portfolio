import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="golden">Namit Jain</span> &nbsp;
            from <span className="golden"> Delhi, India. </span>
            <br /> I have 3+ years of experience in solidity and working on it
            since 2020 , I have also worked with NestJs (node js framework)
            <br />
            Additionally, I am currently employed as a lead solidity developer
            at
            <a href="https://rapidinnovation.io"> Rapid Innovation</a> .
            <br />
            <br />
            Activities that I love to do in my free time!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about new EIPs
            </li>
            <li className="about-activity">
              <ImPointRight /> ETF challenges
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineer solutions that revolutionize lives!"{" "}
          </p>
          <footer className="blockquote-footer">Namit Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
