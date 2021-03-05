import React from 'react';
import Job from './Job';
import JobSkeleton from './JobSkeleton';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';




const JobList = (props) => {


	if (!props.loadingUI && props.jobs.length === 0 && props.searchInput.page === 1) {
		return (
			<div className="jobs-list">
 				<h4>No results found for that search, please try another one.</h4>
 			</div>
 		)
	}

	if (!props.loadingUI && props.jobs.length === 0 && props.searchInput.page > 1) {
		return (
			<div className="jobs-list">
 				<h4>No results found for this page, please go back to the previous one.</h4>
 				<Pagination disabledNext />
 			</div>
 		)
	}

	if (!props.loadingUI && props.jobs.length > 0) {
		return (
			<div className="jobs-list">
				{props.jobs.map(job => {
					const {id, title, company, location, type, created_at} = job;
					return (
						<Link to={`/job-details/${id}`} key={id}>
							<Job title={title} company={company} location={location} type={type} createdAt={created_at} />
						</Link>
					)
				})}
				<Pagination disabledNext={false} />
			</div>
		)
	}

	else return (
		<div className="jobs-list">
			<JobSkeleton />
			<JobSkeleton />
			<JobSkeleton />
			<JobSkeleton />
			<JobSkeleton />
		</div>
	)
}

const mapStateToProps = state => ({
	jobs: state.jobs,
	loadingUI: state.loadingUI,
	searchInput: state.searchInput
})



export default connect(mapStateToProps)(JobList);