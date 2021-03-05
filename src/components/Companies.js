import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../redux';
import googleLogo from '../styles/google-logo.png';



class Companies extends React.Component {


	handleClick = (company) => {
		this.props.getJobs({ term: company, location: '', fullTime: false});

	}
	render() {
		return (
			<div className="companies">
				<h4>Companies that are currently hiring!</h4>
				<div className="companies-list">
					{!this.props.loadingUI ? 
						this.props.jobs.map(job => {
						const { company, company_url, id, company_logo } = job;
							return job.company_logo === null ? null
							: (<button key={id} onClick={() => this.handleClick(company)} >
								<img src={company_logo} alt="company-logo"/>
							</button>)
					})
					:
					(
						<Fragment>
							<div className="company-logo-skeleton"></div>
							<div className="company-logo-skeleton"></div>
							<div className="company-logo-skeleton"></div>
							<div className="company-logo-skeleton"></div>
							<div className="company-logo-skeleton"></div>
						</Fragment>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	jobs: state.jobs,
	loadingUI: state.loadingUI
});

const mapDispatchToProps = (dispatch) => ({
	getJobs: (companyName) => dispatch(getJobs(companyName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Companies);