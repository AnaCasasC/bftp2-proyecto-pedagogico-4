import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/FormStyle.css";
import "../Styles/ExperienceDetail.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";
import {NavLink as Link} from "react-router-dom";


function ExperienceDetail(props) {

    const [experienceData, setExperienceData] = useState(props.experienceData || {
        name: '',
        image: '',
        description: '',
        price: '',
        duration: '',
        accessibility: '',
        accessibilityDescription: '',
    })

    return (
        <div className="hover-layer fixed-position">
            <div className="form-bg experience-detail position-relative">
                <button type="button" className="btn btn-close" onClick={props.onClose}>
                    <i className="far fa-times-circle gray"/>
                </button>
                <section className="detail-section">
                        <div className="parent-grid">
                            <div className="div1">
                                <div className="detail-accessibility-description">
                                    <h4>Detalles de Accesibilidad</h4>
                                    {experienceData.accessibilityDescription}
                                </div>
                            </div>
                            <div className="div2">
                                <figure className="detail-img">
                                    {props.experienceData ?
                                        <img className="image" src={experienceData.image} alt="photo"/>
                                        : <img className="image" src={defaultPhoto} alt="photo"/>}
                                </figure>
                            </div>
                            <div className="div3">
                                <div className="detail-container">
                                    <div className="detail-description">
                                        {experienceData.description}
                                    </div>
                                </div>
                            </div>
                            <div className="div4">
                                <div className="page-header">
                                    <h1 className="h1">{experienceData.name}</h1>
                                </div>
                                <div className="input-group-row-3">
                                    <div>
                                        <p className="card-price">{(experienceData.price % 1 === 0 ? experienceData.price : experienceData.price.toFixed(2)) + '€'}</p>
                                        <p className="card-price-detail">por persona</p>
                                    </div>
                                    <div>
                                        <p className="card-price">{experienceData.duration}</p>
                                        <p className="card-price-detail">horas</p>
                                    </div>
                                    {/*<div>Familiar</div>*/}
                                </div>
                                <section className="form-buttons">
                                    <Link className="btn btn-primary btn-modal card-link" to="/Enquires">Reservar</Link>
                                </section>

                            </div>
                        </div>
                </section>

            </div>
        </div>
    );
}

export default ExperienceDetail