import React from "react";
import '../../App.css';
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function HomePage () {
    return (
        <div className="home-page">
            <Header />
            <MainContent />
        </div>
    )
}

export default HomePage;