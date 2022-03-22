import React, {useState} from "react";
import fundadora from "../Assets/fundadora.jpg";
import "../Styles/App.css";
import "../Styles/FormStyle.css";
import "../Styles/AboutUs.css";

function AboutUs() {

    return (
        <main className="container about">
            <div className="page-header">
                <div className="page-name"><h1 className="h1">Quienes Somos</h1></div>
            </div>
            <section className="about-section">
            <div className="parent-grid">
                <div className="div1">
                    <figure className="about-img">
                        <img className="fundadora" src={fundadora}/>
                    </figure>
                </div>
                <div className="div3">
                    <div className="about-container">
                        <div className="about-description">
                            <h3>Nuestra Mision</h3>
                            <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.</p>
                            <p>Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default AboutUs