import React, {useEffect} from 'react';
import GoogleLogo from '../styles/google-logo.png';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getJob} from '../redux';
import JobPageSkeleton from '../components/JobPageSkeleton';


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
		return (
			<div className="main-job-page">
				<div className="main-job-page-description">
					<h3>{props.job.title}</h3>
					<h6>Google Inc.</h6>
					<h6>San Francesco, US</h6>
					<p className="job-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur leo pellentesque aliquet ultricies. Nulla eleifend lorem condimentum tristique mattis. Aliquam scelerisque non odio eu ultrices. In vitae nisi efficitur, rhoncus sapien scelerisque, pulvinar leo. Sed vestibulum scelerisque leo vitae rutrum. Nullam tortor risus, lacinia non neque ac, volutpat vulputate eros. Sed fringilla vel eros eu elementum. Fusce sollicitudin fermentum purus, iaculis pharetra diam feugiat sed. Maecenas ac suscipit metus, a accumsan velit. Vestibulum non tristique purus, ac fermentum sem. Curabitur sit amet aliquam leo, sed venenatis odio.

	Quisque pretium, velit sed faucibus dignissim, felis orci suscipit lacus, a convallis est sapien tristique ligula. In eget libero pulvinar, tincidunt ipsum et, laoreet est. In est elit, dapibus ut tempor eget, elementum eget mauris. Pellentesque id pharetra odio. Etiam enim risus, euismod a bibendum in, interdum in dolor. Sed non est id velit mattis commodo in fringilla turpis. Etiam sed massa sit amet nulla tristique maximus at id mi. Sed pharetra quis lacus id imperdiet. Donec porta sed sapien at lacinia.
					</p>
				</div>
				<div className="main-job-page-company">
					<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
						<img src={GoogleLogo} alt=""/>
					</a>
					<h6>
						Google Inc.
					</h6>
					<h6><a href="#outgoing-link">www.google.com</a></h6>
				</div>
				<div className="main-job-page-how-to-apply">
					<h4>
						How to apply
					</h4>
					<p className="how-to-apply">
						visit this link for further infos
					</p>
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