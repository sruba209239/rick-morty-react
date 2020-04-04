import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from './Container';

class App extends React.Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);