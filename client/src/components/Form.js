import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/FormStyle.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";
import {useNavigate} from "react-router-dom";
import useCollapse from "react-collapsed";

function Form(props) {

    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, duration: 2 });


    const [experienceData, setExperienceData] = useState(props.experienceData || {
        name: '',
        image: '',
        description: '',
        price: '',
        duration: '',
        accessibility: '',
        accessibilityDescription: '',
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setExperienceData({
            ...experienceData,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.onSubmit(experienceData)
        props.onClose()
        navigate("/")

    }

    return (
        <div className="hover-layer fixed-position">
            <div className="form-bg">
                <section className="page-header">
                    <div className="page-name">
                        <h1 className="h1">{props.experienceData ? 'Editar experiencia' : 'Nueva experiencia'}</h1>
                    </div>
                    <button type="button" className="btn btn-close" onClick={props.onClose}>
                        <i className="far fa-times-circle gray"/>
                    </button>
                </section>
                <form onSubmit={enviarDatos} action="">
                    <section>
                        <div className="form-aside">
                            <figure className="form-img"
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}>
                                {props.experienceData ?
                                    <img className="image" src={experienceData.image} alt="photo"/>
                                    : <img className="image" src={defaultPhoto} alt="photo"/>}
                                {isShown && (
                                    <div className="hover-layer">
                                        <button type="button" className="btn btn-icon"
                                                {...getToggleProps({
                                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                                })}>
                                            <i className="far fa-edit"/>
                                            <span>editar</span>
                                        </button>
                                    </div>)}
                            </figure>
                            <div className="filters-row">
                            </div>
                            <input placeholder="Añade URL de la imagen" value={experienceData.image} onChange={handleInputChange} type="text" id=""
                                   name="image" className="form-img" {...getCollapseProps()}/>
                        </div>
                        <div className="form-main">
                            <div className="input-group">
                                <label htmlFor="">Nombre de la experiencia</label>
                                <input value={experienceData.name} onChange={handleInputChange} type="text" id=""
                                       name="name" className="form-title"/>
                            </div>

                            <div className="input-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea value={experienceData.description} onChange={handleInputChange}
                                          name="description" id="description" cols="30" rows="5"
                                          className="form-description"/>
                            </div>
                            <div className="input-group-row-3">
                                <div>
                                    <label htmlFor="price">Precio</label>
                                    <input value={experienceData.price} onChange={handleInputChange} type="text"
                                           name="price" className="form-price"/>
                                </div>
                                <div>
                                    <label htmlFor="duration">Duración</label>
                                    <input value={experienceData.duration} onChange={handleInputChange} id="duration"
                                           name="duration" className="form-duration"/>
                                </div>
                                <div>
                                    <label htmlFor="">Accesibilidad</label>
                                    <select onChange={handleInputChange} name="accessibility" id="accessibility"
                                            className="form-acces">
                                        <option value={experienceData.accessibility}> Yes</option>
                                        <option value={experienceData.accessibility}> No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="accessibilityDescription">Detalles de accesibilidad</label>
                                <textarea value={experienceData.accessibilityDescription} onChange={handleInputChange}
                                          name="accessibilityDescription" id="accessibilityDescription" cols="30"
                                          rows="2" className="form-acces-detail"/>
                            </div>
                        </div>
                    </section>
                    <section className="form-buttons">
                        <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">
                            {props.experienceData ? 'Guardar cambios' : 'Guardar'}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Form