import React, { Component } from "react";
import '../../../public/app.scss';
import Card from './CardComponent';
import Filter from './FilterComponent';

class Results extends Component {
    constructor() {
        super();
    }
    render(){
        const empty = 'There are no results';
        return (
            <div className="results">
                <div className="result-breakdown">
                    <h3>
                        <span>{this.props.results.length}</span>
                        <span>{this.props.jobName.charAt(0).toUpperCase() + this.props.jobName.slice(1)}</span> jobs in
                        <span>{this.props.jobLocation.charAt(0).toUpperCase() + this.props.jobLocation.slice(1)}</span>
                    </h3>
                </div>
                <Filter />
                {this.props.results ? 
                this.props.results.map(function(jobDeets, index){
                    return <Card details={jobDeets} key={index} />;
                }) : <h1>{empty}</h1>
                }
            </div>
        );
    };
}


export default Results;


