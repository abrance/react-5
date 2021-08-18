import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import { SearchBox } from './components/searchBox/searchBox';
import {Topbar} from './components/topbar/topbar';
import {BreadCrumbTreeMixin} from "./components/breadCrumb/breadCrumbTreeMixin";

function App() {
    return (
        <div className="app">
            <header className="header">
              {/*<Button type="primary">Button</Button>*/}
              {/*<SearchBox />*/}
              <Topbar />

            </header>
            <section>
                <BreadCrumbTreeMixin />
            </section>
        </div>
    );
}

export default App;
