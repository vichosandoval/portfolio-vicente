import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vicente Sandoval </span>
            from <span className="purple"> Rio de Janeiro, Brasil.</span>
            <br />I am a mid level front-end developer and junior fullstack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to audio books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to work with what you love!"{" "}
          </p>
          <footer className="blockquote-footer">Vicente Sandoval</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
