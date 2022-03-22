import FormReservation from "./FormReservation";
import "../Styles/App.css";
import "../Styles/FormStyle.css";
import "../Styles/EnquiresStyle.css";
import React from "react";

function Enquires() {

    return (
        <main className="container enquire">
            <div className="page-header">
                <div className="page-name">
                    <h1 className="h1">Contacta y Reserva</h1>
                </div>
            </div>
            <div className="row">
                <section className="form-aside">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Carrer%20dels%20Viatgers,%2028,%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            <a href="https://123movies-to.org"/><br/>
                        </div>
                    </div>
                    <div>
                        <ul className="row">
                            <li className="col-4">
                                <a className="btn-icon" href="tel:931234567">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>93 123 45 67</span>
                                </a>
                            </li>
                            <li className="col-4">
                                <a className="btn-icon" href="mailto:info@econotravel.com">
                                    <i className="fa-regular fa-envelope"></i>
                                    <span>info@econotravel.com</span>
                                </a>
                            </li>
                            <li className="col-4">
                                <a className="btn-icon" href="mailto:info@econotravel.com">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>Carrer dels Viatgers 28</span>
                                    <span>08001 Barcelona</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="form-main">
                    {/*<h2 className="h2">Reserva tu experiencia</h2>*/}
                    <FormReservation/>
                </section>
            </div>
        </main>
    )
}

export default Enquires