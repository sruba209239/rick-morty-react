import React from 'react';
import CardComponent from './CardComponent';

class ContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            holder: [],
            currentOrder: 'asc',
            search: false
        };
    }
    sortList(type) {
        this.setState({
            searchText: this.state.searchText,
            holder: this.state.holder,
            currentOrder: type
        });
    }
    searchField(e) {
        this.setState({
            searchText: e.target.value,
            holder: this.state.holder,
            currentOrder: this.state.currentOrder,
            search: false
        })
    }
    searchFunction() {
        let tempList = this.state.holder.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        this.setState({
            searchText: this.state.searchText,
            holder: tempList,
            currentOrder: this.state.currentOrder,
            search: true
        });
    }
    render() {
        if (this.props.list && this.props.list.length) {
            if (!this.state.search) {
                if (this.state.currentOrder === 'desc') {
                    this.state.holder = this.props.list.sort((a, b) => (b.id - a.id));
                }
                else {
                    this.state.holder = this.props.list.sort((a, b) => (a.id - b.id));
                }
            }

            const cards = this.state.holder.map((element, index) => <CardComponent key={index} list={element} />);
            if (cards && cards.length) {
                return <div className="col-md-10">
                    <h4 className="mb-5">Selected Filters</h4>
                    <div className="row">
                        <div className="col-md-10 col-sm-12">
                            <div className="input-group">
                                <input type="text" className="form-control col-md-6" placeholder="Enter name" onChange={e => this.searchField(e)} />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" disabled={this.state.search} onClick={() => this.searchFunction()}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle col-sm-12 text-left" type="button"
                                    id="sortmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort by ID
                                </button>
                                <div className="dropdown-menu col-sm-12 text-left" aria-labelledby="sortmenu">
                                    <button className="dropdown-item" type="button" onClick={() => this.sortList('asc')}>Ascending</button>
                                    <button className="dropdown-item" type="button" onClick={() => this.sortList('desc')}>Descending</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- cards --> */}
                    <div className="row my-3">
                        {cards}
                    </div>
                </div>;
            }
        }
        return null;
    }
}

export default ContentView;