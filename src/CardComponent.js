import React from 'react';

class CardComponent extends React.Component {
    render() {
        return <div className="col-md-3 col-sm-6 px-1">
            <div className="card bg-dark text-white">
                <img className="card-img-top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    alt="Card caption" />
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
        </div>;
    }
}

export default CardComponent;