import React from 'react';
import FiltersView from './FiltersView';
import ContentView from './ContentView';
import './index.css';

class Container extends React.Component {
    render() {
        return <div className="container">
            <div className="row py-5">
                <FiltersView />
                <ContentView />
            </div>
            <footer className="text-center text-small">
                <p>@ 2020 Publicis Sapient</p>
            </footer>
        </div>
    };
}

export default Container;