import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Robert A. Palestini </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />I'm a student, pursuing a <a href="https://utnba.centrodeelearning.com/detalle/diplomatura/1969/diplomatura-en-programacion-web-full-stack-con-react-js?gclid=Cj0KCQjw6s2IBhCnARIsAP8RfAixMYdvNo1lQMkYfd00My8xmLjCVs1j2-o-OtNOqVOv4SJYe3KlvrIaApsgEALw_wcB">Diploma in full stack web programming with React JS</a>.
            <br />
            <br />
            LinkedIn: <a href="https://www.linkedin.com/in/robert-a-palestini-483586b1/">Robert A. Palestini</a>
            <br />
            Freelancer: <a href="https://www.freelancer.com/u/roberpalestini">Roberto Adrian P.</a> 
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "All repetitive, menial computer tasks can most likely be automated or partially automated with the right code."{" "}
          </p>
          <footer className="blockquote-footer">Michael Beebower</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
