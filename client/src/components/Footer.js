import React from "react";
import "../Styles/FooterStyle.css";

function Footer(props){
    return(
        <footer className="footer">
        <div className="container">
            <div className="copyright">
                <p>EconoTravel 2022 © Todos los derechos reservados</p>
            </div>
            <div className="admin-icons">
                <button className="btn" onClick={props.onButtonClicked} >Administrador</button>
                <div className="follow-us">
                    <p>Síguenos en</p>
                    <span className="mx-2"><i className="fab fa-facebook"/></span>
                    <span className="mx-2"><i className="fab fa-youtube"/></span>
                    <span className="mx-2"><i className="fab fa-instagram"/></span>

                </div>
            </div>
        </div>
        </footer>

    );
}

export default Footer