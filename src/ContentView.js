import React from 'react';
import CardComponent from './CardComponent';

class ContentView extends React.Component {
    render() {
        return <div className="col-md-10">
            <h4 className="mb-5">Selected Filters</h4>
            <div className="row">
                <div className="col-md-10 col-sm-12">
                    <div className="input-group">
                        <input type="text" className="form-control col-md-6" placeholder="Enter name" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary">Search</button>
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
                            <button className="dropdown-item" type="button">Ascending</button>
                            <button className="dropdown-item" type="button">Descending</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- cards --> */}
            <div className="row my-3">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>;
    }
}

export default ContentView;