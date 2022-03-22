import React from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import SearchBar from "./SearchBar";
import {NavLink as Link} from "react-router-dom"

function Header(props){


    return(
      <header className="header">
          <div className="container">
              <div className="logo-container">
                  <Link to="header"><img alt="logo" className="logo" src={logo}/></Link>
              </div>
              <nav>
                   <ul className="main-nav">
                       {!props.loggedIn ?
                       <>
                           <li><Link activeclassname="active" className="link" to="/">Inicio</Link></li>
                           <li><Link activeclassname="active" className="link" to="/AboutUs">Quiénes somos</Link></li>
                           <li><Link activeclassname="active" className="link" to="/Enquires">Contacta y Reserva</Link></li>
                       </>  : ''
                        }
                       {props.loggedIn && <li className="link" onClick={props.onButtonClicked}>Añadir Experiencia</li> }
                   </ul>
                  <SearchBar filter={props.filter} experiences={props.experiences} />
                  {props.loggedIn &&  <div className="icon-user">
                      <i className="fa-solid fa-user"/>
                      <p>Hola, {props.user.username}!</p>
                      <button className="btn btn-primary" onClick={() => props.onLoginChange(false)}>Logout</button>
                  </div>
                  }
              </nav>

          </div>

      </header>
    );
}

export default Header