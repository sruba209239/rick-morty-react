import React from 'react';

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
                <div className="col-md-3 col-sm-6 px-1">
                    <div className="card bg-dark text-white">
                        <img className="card-img-top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                            alt="Card image cap" />
                        <div className="card-img-overlay">
                            <div className="card-text bg-dark overlay-text col-md-12 text-truncate">
                                <h4 className="text-white">Eli's Girlfriend</h4>
                                <h6 className="text-secondary"><small>id: 111 - created 2 years ago</small></h6>
                            </div>
                        </div>
                        <div className="card-body small-fonts">
                            <div className="row">
                                <h6 className="col-md-5 text-secondary"><small>STATUS</small></h6>
                                <h6 className="col-md-7 float-right orange-text pl-0"><small>Alive</small></h6>
                                <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
                            </div>
                            <div className="row">
                                <h6 className="col-md-5 text-secondary"><small>SPECIES</small></h6>
                                <h6 className="col-md-7 float-right orange-text pl-0"><small>Human</small></h6>
                                <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
                            </div>
                            <div className="row">
                                <h6 className="col-md-5 text-secondary"><small>GENDER</small></h6>
                                <h6 className="col-md-7 float-right orange-text pl-0"><small>Female</small></h6>
                                <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
                            </div>
                            <div className="row">
                                <h6 className="col-md-5 text-secondary"><small>ORIGIN</small></h6>
                                <h6 className="col-md-7 float-right orange-text pl-0"><small>Post-Apocalyptic
                                    Earth</small>
                                </h6>
                                <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
                            </div>
                            <div className="row">
                                <h6 className="col-md-5 text-secondary"><small>LAST LOCATION</small></h6>
                                <h6 className="col-md-7 float-right orange-text pl-0"><small>Post-Apocalyptic
                                    Earth</small>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 px-1">
                    <div className="border border-dark"> Sruba</div>
                </div>
                <div className="col-md-3 col-sm-6 px-1">
                    <div className="border border-dark"> Sruba</div>
                </div>
                <div className="col-md-3 col-sm-6 px-1">
                    <div className="border border-dark"> Sruba</div>
                </div>
            </div>
        </div>;
    }
}

export default ContentView;