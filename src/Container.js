import React from 'react';
import FiltersView from './FiltersView';
import ContentView from './ContentView';
import './index.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getAllCharacters();
    }
    getAllCharacters() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => {
                if (response.status !== 200) {
                    console.log('Unable to fetch characters. Status Code: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    console.log(data);
                    debugger;
                    this.setState({
                        characterList: data.results,
                        info: data.info
                    });
                });
            })
            .catch(err => {
                console.log('Fetch Error: +', err);
            });
    }
    render() {
        return <div className="container">
            <div className="row py-5">
                <FiltersView />
                <ContentView list={this.state.characterList} />
            </div>
            <footer className="text-center text-small">
                <p>@ 2020 Publicis Sapient</p>
            </footer>
        </div>
    };
}

export default Container;