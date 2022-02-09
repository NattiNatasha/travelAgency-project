import React, { createContext, useEffect, useState } from "react";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/pages/HomePage'
import ToursPage from './components/pages/ToursPage';
import LogInPage from './components/pages/LogInPage';
import OrderFormPage from "./components/pages/OrderFormPage";
import OrdersPage from "./components/pages/OrdersPage";
import { getDatabaseWithDelay } from "./components/api";
import { ToursContext, AuthContext } from './Context';

function App() {

    const [tours, setTours] = useState([]);
    const [isAuth, setIsAuth] = useState(false);

    const RequireAuth = ({ children }) => {
        if (!isAuth) {
            return <Redirect to='/login' />;
        }
        return children;
    }

    async function getTours() {
        const tours = await getDatabaseWithDelay;
        setTours(tours)
    }

    getTours().then(r => { });

    return (
        <div className="app">
            <ToursContext.Provider value={{
                tours,
                setTours
            }}>
                <AuthContext.Provider value={{
                    isAuth,
                    setIsAuth
                }}>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/tours' component={ToursPage} />
                        <Route exact path='/login' component={LogInPage} />
                        <Route exact path='/make-order' component={OrderFormPage} />
                        <RequireAuth>
                            <Route exact path='/orders' component={OrdersPage} />
                        </RequireAuth>
                    </Switch>
                </AuthContext.Provider>
            </ToursContext.Provider>
        </div>

    )
}

export default App;