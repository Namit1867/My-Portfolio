import React from "react";
import Card from "react-bootstrap/Card";
import ProjectView from "./ProjectView";
import KeyWordsList from "./KeywordsList";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <ProjectView index={props.cardNum} />
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
    </Card>
  );
}
export default ProjectCards;
