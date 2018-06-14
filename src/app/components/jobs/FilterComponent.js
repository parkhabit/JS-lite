import React, { Component } from "react";
import '../../../public/app.scss';

class Filter extends Component {
    constructor() {
        super();
    }
    render(){
        const empty = 'There are no results';
        return (
            <div className="filter-container">
                <div className="distance">
                    <h3>Distance</h3>
                    <div className='dropdown'>
                        <select>
                            <option value="0">0 miles</option>
                            <option value="1">1 mile</option>
                            <option value="2">2 miles</option>
                            <option value="3">3 miles</option>
                            <option value="5">5 miles</option>
                            <option value="10">10 miles</option>
                            <option value="15">15 miles</option>
                            <option value="20">20 miles</option>
                            <option value="30">30 miles</option>
                            <option value="50">50 miles</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    };
}


export default Filter;