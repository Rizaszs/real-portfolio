import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                doloremque ullam? Illo nemo in voluptatem? Veritatis similique
                voluptatem itaque. Dolorem at perspiciatis eveniet tenetur ea
                illum hic deserunt veritatis dicta.
              </p>
              <p className="about__text p__color">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                doloremque ullam? Illo nemo in voluptatem? Veritatis similique
                voluptatem itaque. Dolorem at perspiciatis eveniet tenetur ea
                illum hic deserunt veritatis dicta.
              </p>
              <p className="about__text p__color">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                doloremque ullam? Illo nemo in voluptatem? Veritatis similique
                voluptatem itaque. Dolorem at perspiciatis eveniet tenetur ea
                illum hic deserunt veritatis dicta.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
