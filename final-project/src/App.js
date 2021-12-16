import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import HomePage from './components/pages/HomePage'
import ToursPage from './components/pages/ToursPage';
import LogInPage from './components/pages/LogInPage';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
        <Header/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/tours' component={ToursPage} />
                <Route path='/log-in' component={LogInPage} />
            </Switch>
    </>
  );
}

export default App;
