import React from 'react';
import './App.css';
import TopBar from './components/topbar/topbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {RegistrationForm} from "./containers/login/register"
import {login} from "./page/signIn";
import {Download} from "./page/download";
import {Upload} from "./page/upload";


function App() {
    return (
        <Router>
            <div className="app">
                <header className="header">
                  {/*<Button type="primary">Button</Button>*/}
                  {/*<SearchBox />*/}
                  <TopBar />

                </header>
                {/*<section>*/}
                {/*    <BreadCrumbTreeMixin />*/}
                {/*</section>*/}

                <Route path='/sign_in' component={login} exact/>
                <Route path='/register' component={RegistrationForm} exact/>
                <Route path='/download' component={Download} exact/>
                <Route path='/upload' component={Upload} exact/>
            </div>
        </Router>
    );
}

export default App;
