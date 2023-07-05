import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              LET ME <span className="golden"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🌐 Welcome to My Portfolio Website! 🚀
              <br />
              <br />I am fluent in classics likeI'm a passionate self-taught
              smart contract engineer, driven by my love for web3 and my desire
              to make a real-world impact through my projects. 💡
              <br />
              <br />
              With experience of understanding prominent protocols like
              <i>
                <b className="golden">
                  {" "}
                  Uniswap, Compound, Autofarm, Team Finance, and Planet Finance.{" "}
                </b>
              </i>
              I've demonstrated my ability to quickly learn and develop
              innovative solutions. I thrive as a fast learner, confident in my
              capacity to build anything and acquire new skills on the fly. 🚀
              <br />
              <br />
              🔒 I'm well-versed in
              <i>
                <b className="golden">
                  {" "}
                  best practices, security, and gas optimization, having
                  extensively studied major protocols.{" "}
                </b>
              </i>{" "}
              I have a knack for problem-solving and have designed projects to
              address real-world challenges. My work includes a novel token
              locking protocol with dynamic conditions and parameters, an
              NFT-based yield farming portfolio management application, and a
              zapper and unzapper for seamless conversion of standard ERC20
              tokens into Uniswapv2-based LP pairs and vice versa. 🌈
              <br />
              <br />
              🔥 Additionally, I've actively participated in various CTF
              challenges like
              <i>
                <b className="golden"> QuillCTF and Ethernaut </b>
              </i>{" "}
              further honing my skills and knowledge. 💪
              <br />
              <br />
              🌟 Throughout my life, I've searched for a deep commitment, and
              I've found it in &nbsp;
              <i>
                <b className="golden">Programming </b> and{" "}
                <b className="golden">Smart Contract Development. </b>
              </i>{" "}
              &nbsp; I'm thrilled to explore new opportunities and
              collaborations in the ever-evolving world of web3. 🌐
              <br />
              <br />
              Thank you for visiting my portfolio website. Feel free to explore
              my projects, and don't hesitate to reach out if you'd like to
              discuss potential collaborations or have any questions. ✉️
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="golden">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Namit1867"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/njrapidinnovation"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/namit-jain-355367186/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
