import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getJob} from '../redux';
import moment from 'moment';
import JobPageSkeleton from '../components/JobPageSkeleton';
import DOMPurify from 'dompurify';


const JobPage = (props) => {
	
	let {id} = useParams();
	const { getJob } = props;
	useEffect(() => {
		getJob(id);
	}, [id, getJob]) 

	if (!props.loadingUI && props.job === null) {
		return (
			<div className="jobs-list">
 				<h4>No results found for that job listing, please go back and try another one.</h4>
 			</div>
 		)
	}
	if (!props.loadingUI && props.job !== null) {
		const { title, company, location, description, company_logo, company_url, how_to_apply, created_at } = props.job;
		console.log('from JobPage: ', props.job)
		return (
			<div className="main-job-page">
				<div className="main-job-page-description">
					<h3>{title}</h3>
					<h6>{company}</h6>
					<h6>{location}</h6>
					<span>{`Posted ${moment(created_at).fromNow()}`}</span>
					<p className="job-description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></p>
				</div>
				<div className="main-job-page-company">
					<a href={company_url} target="_blank" rel="noopener noreferrer">
						<img src={company_logo} alt=""/>
					</a>
					<h6>
						{company}
					</h6>
					<h6><a href={company_url} target="_blank" rel="noopener noreferrer">{company_url}</a></h6>
				</div>
				<div className="main-job-page-how-to-apply">
					<h4>
						How to apply
					</h4>
					<p className="how-to-apply" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(how_to_apply) }}></p>
				</div>
			</div>
		);
	}

	else return (
		<JobPageSkeleton />
	);

}

const mapStateToProps = state => ({
	job: state.job,
	loadingUI: state.loadingUI
})

const mapDispatchToProps = (dispatch) => ({
	getJob: (id) => dispatch(getJob(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);