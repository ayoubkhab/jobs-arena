import React from 'react';
import moment from 'moment';




const Job = (props) => {

	const {title, company, location, createdAt, type} = props;

	return (
		<div className="job-item">
			<div className="job-item-title-wrapper">
				<div className="job-item-title">
					<h4>{title}</h4>
					<p>{company}</p>
				</div>
				<button className="button">Details</button>
			</div>
			<div className="job-item-extra-info">
				<p>{location}</p>
				<p>{moment(createdAt).fromNow()}</p>
				<p className={type === 'Full Time' ? 'full-time' : ''}>{type}</p>
			</div>
		</div>
	);
}


export default Job;