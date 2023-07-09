import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Planet1 from "../../Assets/PlanetAssets/Planet1.png";
import Planet2 from "../../Assets/PlanetAssets/Planet2.png";
import Planet3 from "../../Assets/PlanetAssets/Planet3.png";
import Exo1 from "../../Assets/ExoAssets/exo1.png";
import Exo2 from "../../Assets/ExoAssets/exo2.png";
import Exo3 from "../../Assets/ExoAssets/exo3.png";
import portNft1 from "../../Assets/PortNFTAssets/portNft1.png";
import portNft2 from "../../Assets/PortNFTAssets/portNft2.png";
import portNft3 from "../../Assets/PortNFTAssets/portNft3.png";
import portNft4 from "../../Assets/PortNFTAssets/portNft4.png";
import portNft5 from "../../Assets/PortNFTAssets/portNft5.png";
import dibz1 from "../../Assets/DibzAssets/dibz1.png";
import dibz2 from "../../Assets/DibzAssets/dibz2.png";
import dibz3 from "../../Assets/DibzAssets/dibz3.png";
import dibz4 from "../../Assets/DibzAssets/dibz4.png";
import dibz5 from "../../Assets/DibzAssets/dibz5.png";
import dibz6 from "../../Assets/DibzAssets/dibz6.png";
import blog1 from "../../Assets/BlogBeatAssets/blog1.png";
import blog2 from "../../Assets/BlogBeatAssets/blog2.png";
import blog3 from "../../Assets/BlogBeatAssets/blog3.png";
import blog4 from "../../Assets/BlogBeatAssets/blog4.png";
import blog5 from "../../Assets/BlogBeatAssets/blog5.png";


const PlanetFinanceItems = [
  <div className="item">
    <img src={Planet1} className="media" />
  </div>,
  <div className="item">
    <img src={Planet2} className="media" />
  </div>,
  <div className="item">
    <img src={Planet3} className="media" />
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src={"https://drive.google.com/uc?id=1r_vPT7Ql9PW7CLURvqTt2ufcuf4WkU44"} />
      Your browser does not support the video tag.
    </video>
  </div>,
];

const ExoItems = [
  <div className="item">
    <img src={Exo1} className="media" />
  </div>,
  <div className="item">
    <img src={Exo2} className="media" />
  </div>,
  <div className="item">
    <img src={Exo3} className="media" />
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src={"https://drive.google.com/uc?id=1s2QTpGCgP59cyjWd2dAbV4sr_YGYyv25"} />
      Your browser does not support the video tag.
    </video>
  </div>,
];

const PortNftItems = [
  <div className="item">
    <img src={portNft1} className="media" />
  </div>,
  <div className="item">
    <img src={portNft2} className="media" />
  </div>,
  <div className="item">
    <img src={portNft3} className="media" />
  </div>,
  <div className="item">
    <img src={portNft4} className="media" />
  </div>,
  <div className="item">
    <img src={portNft5} className="media" />
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src={"https://drive.google.com/uc?id=1Vv7BRRq2SK3wRsEAJbQ3eLUe97fGQ0PP"} />
      Your browser does not support the video tag.
    </video>
  </div>,
];

const DibzItems = [
  <div className="item">
    <img src={dibz1} className="media" />
  </div>,
  <div className="item">
    <img src={dibz2} className="media" />
  </div>,
  <div className="item">
    <img src={dibz3} className="media" />
  </div>,
  <div className="item">
    <img src={dibz4} className="media" />
  </div>,
  <div className="item">
    <img src={dibz5} className="media" />
  </div>,
  <div className="item">
    <img src={dibz6} className="media" />
  </div>,
];

const BlogBeatsItems = [
  <div className="item">
    <img src={blog1} className="media" />
  </div>,
  <div className="item">
    <img src={blog2} className="media" />
  </div>,
  <div className="item">
    <img src={blog3} className="media" />
  </div>,
  <div className="item">
    <img src={blog4} className="media" />
  </div>,
  <div className="item">
    <img src={blog5} className="media" />
  </div>,
  <div className="item">
    <video width="100%" controls className="media">
      <source src={"https://drive.google.com/uc?id=1-ZVMp7UNk6Eph7bEzONnVin2Eq-jMOHk"} />
      Your browser does not support the video tag.
    </video>
  </div>,
];

const ProjectView = (props) => {
  var items;
  const [mainIndex, setMainIndex] = useState(0);

  if (props.index == 0) items = PlanetFinanceItems;
  else if (props.index == 1) items = ExoItems;
  else if (props.index == 2) items = PortNftItems;
  else if (props.index == 3) items = DibzItems;
  else if (props.index == 4) items = BlogBeatsItems;

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
};

export default ProjectView;
