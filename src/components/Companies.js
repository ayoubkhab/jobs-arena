import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../redux';



class Companies extends React.Component {


	handleClick = (company) => {
		this.props.getJobs({ term: company, location: '', fullTime: false});

	}
	render() {
		if (!this.props.loadingUI && this.props.jobs.length === 0) {
			return (
				<div></div>
			);
		} else
		return (
			<div className="companies">
				<h4>Companies that are currently hiring!</h4>
				<div className="companies-list">
					{!this.props.loadingUI ? 
						this.props.jobs.map(job => {
						const { company, id, company_logo } = job;
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