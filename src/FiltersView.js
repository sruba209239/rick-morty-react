import React from 'react';

class FiltersView extends React.Component {
    render() {
        return <div className="col-md-2">
            <h4 className="mb-5">Filters</h4>
            <div className="border border-dark p-3">
                <h6>Species</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="humanFilter"></input>
                    <label className="form-check-label" htmlFor="humanFilter">
                        <small>Human</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="mythologyFilter"></input>
                    <label className="form-check-label" htmlFor="mythologyFilter">
                        <small>Mythology</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="otherFilter" />
                    <label className="form-check-label" htmlFor="otherFilter">
                        <small>Other Species ...</small>
                    </label>
                </div>
            </div>

            <div className="border border-dark p-3 my-3">
                <h6>Gender</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="maleFilter" />
                    <label className="form-check-label" htmlFor="maleFilter">
                        <small>Male</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="femaleFilter" />
                    <label className="form-check-label" htmlFor="femaleFilter">
                        <small>Female</small>
                    </label>
                </div>
            </div>

            <div className="border border-dark p-3">
                <h6>Origin</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="unknownFilter" />
                    <label className="form-check-label" htmlFor="unknownFilter">
                        <small>Unknown</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="postFilter" />
                    <label className="form-check-label" htmlFor="postFilter">
                        <small>Post-Apocalyptic Earth</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="nuptiaFilter" />
                    <label className="form-check-label" htmlFor="nuptiaFilter">
                        <small>Nuptia 4</small>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="otherOriginFilter" />
                    <label className="form-check-label" htmlFor="otherOriginFilter">
                        <small>Other Origins...</small>
                    </label>
                </div>
            </div>
        </div>
    };
}

export default FiltersView;