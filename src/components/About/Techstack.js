import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiFoundryBucket } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";
import { TbSquareRoundedLetterM } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandOpenai } from "react-icons/tb";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import {
  SiTypescript,
  SiEthereum,
  SiNestjs,
  SiIpfs,
  SiWeb3Dotjs,
  SiSolidity,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiFoundryBucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSquareRoundedLetterM />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIpfs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandOpenai />
      </Col>
    </Row>
  );
}

export default Techstack;
