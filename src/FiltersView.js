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
                        Human
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="mythologyFilter"></input>
                    <label className="form-check-label" htmlFor="mythologyFilter">
                        Mythology
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="otherFilter" />
                    <label className="form-check-label" htmlFor="otherFilter">
                        Other Species ...
                </label>
                </div>
            </div>

            <div className="border border-dark p-3 my-3">
                <h6>Gender</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="maleFilter" />
                    <label className="form-check-label" htmlFor="maleFilter">
                        Male
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="femaleFilter" />
                    <label className="form-check-label" htmlFor="femaleFilter">
                        Female
                </label>
                </div>
            </div>

            <div className="border border-dark p-3">
                <h6>Origin</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="unknownFilter" />
                    <label className="form-check-label" htmlFor="unknownFilter">
                        Unknown
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="postFilter" />
                    <label className="form-check-label" htmlFor="postFilter">
                        Post-Apocalyptic Earth
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="nuptiaFilter" />
                    <label className="form-check-label" htmlFor="nuptiaFilter">
                        Nuptia 4
                </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="otherOriginFilter" />
                    <label className="form-check-label" htmlFor="otherOriginFilter">
                        Other Origins...
                </label>
                </div>
            </div>
        </div>
    };
}

export default FiltersView;