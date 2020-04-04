import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">part1</div>
                <div className="col-md-6">part2</div>
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);