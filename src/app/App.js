import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import Home from './components/home/HomeComponent';
import Search from './components/jobs/SearchComponent';
import Courses from './components/courses/CoursesComponent';
import CareerAdvice from './components/career-advice/CareerAdviceComponent';

import '../public/app.scss';
import reedLogo from '../public/images/reed-logo.svg';




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className='nav-loggedin'>
                        <ul>
                            <li><Link to='/'><img src={reedLogo} /></Link></li>
                            <li><Link to='/jobs'>Jobs</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/career-advice'>Career Advice</Link></li>
                        </ul>
                    </nav>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/jobs' component={Search} />
                    <Route path='/courses' component={Courses} />
                    <Route path='/career-advice' component={CareerAdvice} />
                </div>
            </Router>
        );
    }
}

export default App;