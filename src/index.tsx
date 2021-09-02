import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {appStore, persistor} from "./store";
import {PersistGate} from 'redux-persist/lib/integration/react';


ReactDOM.render(
    // <React.StrictMode>
    <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    // </React.StrictMode>,
    // <Hello name="TypeScript" enthusiasmLevel={10}/>,
    document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
