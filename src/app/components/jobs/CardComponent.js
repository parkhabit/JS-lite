import React from "react";
import '../../../public/app.scss';

const Card = (props) => (
    <div className='card'>
        <h1>{props.details.jobTitle}</h1>
        <p>Posted {props.details.date} by {props.details.employerName}</p>
        <ul>
            <li>{props.details.minimumSalary} - {props.details.maximumSalary} per annum</li>
            <li>{props.details.locationName}</li>
        </ul>
        <p>{props.details.jobDescription}</p>
    </div>
);

export default Card;