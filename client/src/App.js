import './Styles/App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Enquires from "./components/Enquires";
import Form from "./components/Form";
import Login from "./components/Login";

function App() {

    // Declaración de constantes

    const [experiences, setExperiences] = useState([]);
    const [experiencesToShow, setExperiencesToShow] = useState([]);
    const [keyword, setKeyword] = useState();
    const [reference, setReference] = useState()
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState([]);

    // API Fetch

    useEffect(() => {
        if (requiresUpdate) {
            fetch("/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    useEffect(() => {
        setExperiencesToShow(experiences)
    }, [experiences])

    const deleteExperience = (id) => {
        fetch(`/api/experiences/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const addExperience = (experience) => {
        fetch("/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    // SearchBar/Filtering function

    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setKeyword(keyword)

        if (keyword !== '') {
            const results = experiences.filter((experience) => {
                reference.current.scrollIntoView();
                return experience.name.toLowerCase().includes(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setExperiencesToShow(results);
        } else {
            setExperiencesToShow(experiences);
            // If the text field is empty, show all users
        }
    };


    return (
        <BrowserRouter>
            <Header filter={filter} onButtonClicked={() => setShowForm(true)}
                    user={user}   onLoginChange={ (isActive) => setIsLoggedIn(isActive)} loggedIn={isLoggedIn} experiences={experiences}/>
            { showForm && <Form onSubmit={e => addExperience(e)} onClose={()=>setShowForm(false)}/>}
            <Routes>
                <Route path="/" index element={<Home loggedIn={isLoggedIn} setReference={setReference} keyword={keyword} experiences={experiencesToShow} deleteExperience={deleteExperience} editExperience={addExperience} />}/>
                <Route path="/AboutUs" element={<AboutUs />} />l
                <Route path="/Enquires" element={<Enquires />} />
                <Route path="*" element={<Navigate replace to="/"/>}  />
            </Routes>
            { showLoginForm && <Login onClose={() => setShowLoginForm(false)} onSubmit={e => setUser(e)}
                                   user={user} setUser={setUser}  onLoginChange={ (isActive) => setIsLoggedIn(isActive)} />}

            <Footer onButtonClicked={() => setShowLoginForm(true)}  />
        </BrowserRouter>
    );
}

export default App;
