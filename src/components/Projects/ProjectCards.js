import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ProjectView from "./ProjectView";
import KeyWordsList from "./KeywordsList";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-card-title">
          {props.title}
          {props.demoLink !== undefined && (
            <a href={props.demoLink}>
              <AiOutlineLink />
            </a>
          )}
          {props.ghLink !== undefined && (
            <a href={props.ghLink}>
              <AiFillGithub />
            </a>
          )}
        </Card.Title>
        <Card.Text
          className="project-card-description"
          style={{ textAlign: "justify" }}
        >
          {props.description}
        </Card.Text>
        <Card.Text
          className="project-card-description"
          style={{ textAlign: "justify" }}
        >
          {/* <b style={{ color: "#6E47FF" }}>Things Worked On:</b>{" "} */}
          {/* <b>{props.techStack}</b> */}
          <KeyWordsList keywords={props.techStack.split(",")} />
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
      {props.isCarouselOpen && (
        <div
          style={{
            position: "absolute",
            top: "0",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <ProjectView index={props.cardNum} onClose={props.onClose} />
        </div>
      )}
    </Card>
  );
}
export default ProjectCards;
