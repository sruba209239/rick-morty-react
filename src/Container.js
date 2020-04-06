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
        let filter = [];

        if (list && list.length) {
            // apply species filters
            if (this.state.filter.species.length) {
                filter = this.state.filter.species;
                if (filter.includes('other')) {
                    list = this.state.characterList.filter(item => (item.species.toLowerCase() !== 'human' && item.species.toLowerCase() !== 'alien'));
                } else {
                    list = [];
                }
                filter.forEach(el => {
                    list = list.concat(this.state.characterList.filter(item => (item.species.toLowerCase() === el)));
                });
            }

            // apply gender filter
            if (this.state.filter.gender.length) {
                let tempList = list.slice();
                list = [];
                filter = this.state.filter.gender;
                filter.forEach(item => {
                    list = list.concat(tempList.filter(el => el.gender.toLowerCase() === item));
                });
            }

            // apply origin filter
            if (this.state.filter.origin.length) {
                let tempList = list.slice();
                list = [];
                filter = this.state.filter.origin;
                if (filter.includes('other')) {
                    list = list.concat(tempList.filter(item => (item.origin.name.toLowerCase() !== 'unknown' && item.origin.name.toLowerCase() !== 'post-apocalyptic earth' && item.origin.name.toLowerCase() !== 'nuptia 4')));
                }
                filter.forEach(el => {
                    list = list.concat(tempList.filter(item => (item.origin.name.toLowerCase() === el)));
                });
            }


            return <div className="container-fluid">
                <div className="row">
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