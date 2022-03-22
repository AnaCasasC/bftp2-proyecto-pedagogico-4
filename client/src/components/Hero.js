import React from "react";
import "../Styles/App.css";
import "../Styles/FormStyle.css";
import "../Styles/HeroStyle.css";
import { Link} from "react-scroll";

function Hero() {

    return (
        <div className="hero-bg">
                <div className="hero-content">
                    <h1>Encuentra tu próxima experiencia en Econotravel</h1>
                    <Link className="btn btn-primary"
                          to="page-header"
                          spy={true}
                          smooth={true}
                          offset={-140}
                          duration={500}
                    >
                        Explora</Link>
                </div>
        </div>
    );
}

export default Hero