import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import planetIcon from "../../Assets/Projects/planetIcon.png";
import exofiIcon from "../../Assets/Projects/exofiIcon.png";
import portfolioNFTIcon from "../../Assets/Projects/portfolioNFTIcon.png";
import dibzIcon from "../../Assets/Projects/dibzIcon.png";
import blogBeatIcon from "../../Assets/Projects/blogBeatIcon.png";

function Projects() {
  const [isCarouselOpen, setIsCarouselOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCardClick = (indice) => {
    const carouselArr = isCarouselOpen.map((e, index) => {
      if (indice == index) return true;
      return isCarouselOpen[index];
    });
    setIsCarouselOpen(carouselArr);
  };

  const handleCloseCarousel = (indice) => {
    const carouselArr = isCarouselOpen.map((e, index) => {
      if (indice == index) return false;
      return isCarouselOpen[index];
    });
    setIsCarouselOpen(carouselArr);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="golden">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <div
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col
            onClick={() => handleCardClick(0)}
            md={4}
            className="project-card"
          >
            <ProjectCard
              cardNum={0}
              isCarouselOpen={isCarouselOpen[0]}
              onClose={handleCloseCarousel}
              imgPath={planetIcon}
              isBlog={false}
              title="Planet Finance"
              techStack="ERC20, Yield Farming, Lending And Borrowing, AMM, Staking Vaults, Frontend Integration, Test Cases(Hardhat), Backend"
              description="Planet is a decentralized financial protocol with different planets as applications. Blue Planet provides access to decentralized financial services, Green Planet offers decentralized lending with discounts, and Pink Planet is a marketplace for digital assets. The core features include Vaults for earning yield, Pools for liquidity provision, Swap for instant crypto swaps, and Lending with discount levels. AQUA captures value and governs the planets, while GAMMA powers Planet Finance eternally."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://planet.finance/"
            />
          </Col>

          <Col
            onClick={() => handleCardClick(1)}
            md={4}
            className="project-card"
          >
            <ProjectCard
              cardNum={1}
              isCarouselOpen={isCarouselOpen[1]}
              onClose={handleCloseCarousel}
              imgPath={exofiIcon}
              isBlog={false}
              title="ExoFi"
              techStack="ERC20, ERC721, AMM, Subgraph, MultiForwarder(EIP-2771), Token Launchpad, Dynamic Condition Token Locking System, Frontend Integration, Test Cases(Hardhat)"
              description="Exo is the next generation of De-Fi cross-chain swap infrastructure, a community-oriented project changing the way cryptocurrency is traded and providing previously unseen levels of control and flexibility in the hands of investors and projects."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://exo.fi/"
            />
          </Col>

          <Col
            onClick={() => handleCardClick(2)}
            md={4}
            className="project-card"
          >
            <ProjectCard
              cardNum={2}
              isCarouselOpen={isCarouselOpen[2]}
              onClose={handleCloseCarousel}
              imgPath={portfolioNFTIcon}
              isBlog={false}
              title="Portfolio NFT"
              techStack="ERC20, ERC721, Subgraph, Diamond Proxy(EIP-2535), Yield Farm, Frontend Integration, Test Cases(Hardhat)"
              description="`Portfolio NFT` is an innovative DeFi platform that revolutionizes investment management through the power of NFTs. With Portfolio NFT, investors can seamlessly create, manage, and trade diversified portfolios NFTs in a single click. This platform features a wide range of yield farm LP pair pools, each offering unique opportunities for maximizing returns. Through the integration of portfolio NFTs, investors can effortlessly merge and unmerge their holdings, enabling them to adapt to market conditions and optimize their strategies. "
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://devfolio.co/projects/portfolio-nft-036f"
            />
          </Col>

          <Col
            onClick={() => handleCardClick(3)}
            md={4}
            className="project-card"
          >
            <ProjectCard
              cardNum={3}
              isCarouselOpen={isCarouselOpen[3]}
              onClose={handleCloseCarousel}
              imgPath={dibzIcon}
              isBlog={false}
              title="Dibz"
              techStack="Betting Smart Contracts, Subgraph, ERC-1967(Proxy), Frontend Integration, Test Cases(Hardhat)"
              description="This project is an exciting and innovative betting game that leverages EVM smart contracts, subgraphs, and stocks price feeds to offer a unique and engaging experience. Users can participate in a bull run by placing bets on the performance of different stocks. They can also engage in head-to-head challenges with other players, competing to accurately predict stock movements. Additionally, the game incorporates over and under betting options, allowing users to make precise predictions on stock prices exceeding or falling below certain thresholds. By utilizing the power of blockchain technology and real-time stock data, this project creates a secure and transparent environment for thrilling and profitable betting experiences."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col
            onClick={() => handleCardClick(4)}
            md={4}
            className="project-card"
          >
            <ProjectCard
              cardNum={4}
              isCarouselOpen={isCarouselOpen[4]}
              onClose={handleCloseCarousel}
              imgPath={blogBeatIcon}
              isBlog={false}
              title="Blog Beat"
              techStack="Frontend, Backend, Content Generation, Open AI, Langchain, Web Scapping, AWS s3"
              description="This is a groundbreaking all-in-one platform that is set to revolutionize the world of blogging. This innovative solution combines cutting-edge technologies to streamline the process of creating and managing blogs. By harnessing the power of ChatGPT, Langchain, Replicate, and web scraping, this platform automates content generation like never before. Say goodbye to hours spent brainstorming and writing articles; with this platform, users can effortlessly generate high-quality, engaging content with just a few clicks. "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
