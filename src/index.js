import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FiltersView from './FiltersView';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <FiltersView />
                    {/* <ContentView />  */}
                </div>
                <footer className="text-center text-small">
                    <p>@ 2020 Publicis Sapient</p>
                </footer>
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);