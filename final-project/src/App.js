import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from './components/pages/HomePage'
import ToursPage from './components/pages/ToursPage';
import LogInPage from './components/pages/LogInPage';
import EditTourPage from "./components/pages/EditTourPage";

function App() {
    return (
    <>
        <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/tours' component={ToursPage} />
                <Route exact path='/log-in' component={LogInPage} />
                <Route exact path='/edit-tour' component={EditTourPage} />
            </Switch>
    </>
  );
}

export default App;
