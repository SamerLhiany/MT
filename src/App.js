import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser, login } from "./actions/auth";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}



function App() {
    return (
        <>
        <BrowserRouter>
            <Route render={props => (
                <>


                    <Header {...props}/>
                    <Routes/>
                    <Footer/>
                </>
            )}/>
            
        </BrowserRouter>
        </>
    );
}

export default App;
