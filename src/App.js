import './App.scss';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import UserPage from "./containers/UserPage/UserPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/user/:id' component={UserPage} />
                    <Route>404 Not Found</Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
