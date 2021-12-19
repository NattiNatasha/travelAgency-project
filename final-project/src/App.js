import React, {createContext, useEffect, useState} from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from './components/pages/HomePage'
import ToursPage from './components/pages/ToursPage';
import LogInPage from './components/pages/LogInPage';
import EditTourPage from "./components/pages/EditTourPage";
import OrderPage from "./components/pages/OrderPage";
import {cards} from "./DatabaseTours";

export const AppContext = createContext(null);
function App() {

    const [tours, setTours] = useState([]);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const response = cards;
        setTours(response)
    }, [])

    return (
    <>
        <AppContext.Provider value={{tours, setTours, isAuth, setIsAuth}}>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/tours' component={ToursPage} />
                <Route exact path='/log-in' component={LogInPage} />
                <Route exact path='/edit-tour' component={EditTourPage} />
                <Route exact path='/order' component={OrderPage} />
            </Switch>
        </AppContext.Provider>
    </>
  );
}

export default App;