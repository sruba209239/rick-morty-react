import React from 'react';
import FiltersView from './FiltersView';
import ContentView from './ContentView';
import './index.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: [],
            info: {},
            url: 'https://rickandmortyapi.com/api/character/',
            filter: {
                species: [],
                gender: [],
                origin: []
            }
        };
        this.getCharacters(this.state.url);
    }

    filter(el) {
        let newState = JSON.parse(JSON.stringify(this.state));
        let currentFilter = newState.filter[el[0]];
        let pos = currentFilter.indexOf(el[1]);
        if (pos < 0) {
            currentFilter.push(el[1]);
        } else {
            currentFilter.splice(pos, 1);
        }
        this.setState(newState);
    }

    getCharacters() {
        fetch(this.state.url)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Unable to fetch characters. Status Code: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    console.log(data);
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
        let list = this.state.characterList;

        if (list && list.length) {
            // apply filters
            // debugger;
            // for (let el in this.state.filter) {
            //     if (this.state.filter[el].length) {
            //         list.filter(item => {
            //             if (el.includes(item.species)) {
            //                 return true;
            //             } else {
            //                 return false;
            //             }
            //         });
            //     }
            // }

            return <div className="container-fluid">
                <p>this.state.filter.species : {this.state.filter.species}</p>
                <p>this.state.filter.gender : {this.state.filter.gender}</p>
                <p>this.state.filter.origin : {this.state.filter.origin}</p>
                <div className="row py-5">
                    <FiltersView filter={(el) => this.filter(el)} />
                    <ContentView list={list} />
                </div>
                <footer className="text-center text-small">
                    <p>@ 2020 Publicis Sapient</p>
                </footer>
            </div>
        } else {
            return <h1>LOADING</h1>
        }
    };
}

export default Container;