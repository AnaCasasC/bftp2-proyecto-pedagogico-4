import React from "react";
import { useState } from 'react';
import "../Styles/App.css";
import "../Styles/CardStyle.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";
import {NavLink as Link} from "react-router-dom";

function Card({experience, onExperienceDelete, onExperienceEdit, onExperienceDetail, loggedIn}){


    const [isShown, setIsShown] = useState(false);

    return(
            <div className="card-container"
                 onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)}>
                <figure>
                    {experience.image ? <img className="image" src={experience.image} alt="photo"/>
                        : <img className="image" src={defaultPhoto} alt="photo"/>}

                        {isShown && (
                            <div className="hover-layer">
                                <button onClick={onExperienceDetail} className="btn btn-icon">
                                    <i className="far fa-eye"/>
                                    <span>ver más</span>
                                </button>
                                {loggedIn && <button onClick={onExperienceEdit} className="btn btn-icon">
                                    <i className="far fa-edit"/>
                                    <span>Editar</span>
                                </button>}
                                {loggedIn && <button onClick={onExperienceDelete} className="btn btn-icon">
                                    <i className="far fa-trash-alt"/>
                                    <span>Borrar</span>
                                </button>}
                            </div>
                        )}


                </figure>
                <div className="card-description">
                   <h2 className="card-title">{experience.name}</h2>
                    <p className="card-price">{(experience.price % 1 === 0 ? experience.price : experience.price.toFixed(2)) + '€'}</p>
                    <p className="card-price-detail">por persona</p>
                    <p>{experience.duration}</p>
                </div>
                <div className="card-buttons">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><Link className="card-link" to="/Enquires">Reservar</Link></button>
                </div>

            </div>
    );
}

export default Card