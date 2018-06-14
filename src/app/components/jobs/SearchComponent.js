import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../../public/app.scss';
import alertIcon from '../../../public/images/alert-icon.svg';
import axios from 'axios';
import Results from './ResultsComponent';
const API_KEY = '6c5b5d9a-9633-4839-b468-47755576a0ce';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            job: "",
            location: "",
            jobResults: [],
            distanceMiles: ""
        };

        this.handleJobChange = this.handleJobChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleJobChange(event) {
        this.setState({ job: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search?keywords=${this.state.job}&locationName=${this.state.location}`;
        axios.get(url, {auth: {username: API_KEY, password: ''}})
            .then((response) => {
                const res = response.data.results;
                this.setState({jobResults: res});
            })
            .catch((error) => {
                console.log(error);
            })
        }

    render() {
        return (
            <div>
                <div className='search-form'>
                    <form onSubmit={this.handleSubmit}>
                    <h3>Find a job</h3>
                        <li>
                            <label>What</label>
                            <input 
                                onChange={this.handleJobChange}
                                value={this.state.job}
                            />
                        </li>
                        <li>
                            <label>Where</label>
                            <input 
                                onChange={this.handleLocationChange}
                                value={this.state.location}
                            />
                        </li>
                        <button>Search jobs</button>
                    </form>
                    <div className='job-alert'>
                        <img src={alertIcon}></img>
                        <p>Your searches and alerts</p>
                    </div>
                </div>
                <Results results={this.state.jobResults} jobName={this.state.job} jobLocation={this.state.location} />
            </div>
        );
    }
}

export default Search;

