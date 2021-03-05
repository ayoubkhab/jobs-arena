import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getJobs} from '../redux';



class SearchArea extends Component {

	state = {term: '', location: '', fullTime: false, page: 1}

	componentDidMount() {
		this.props.getJobs(this.state);
	}


onSubmit = (event) => {
	event.preventDefault();
	this.props.getJobs(this.state);

}

onChange = (event) => {
	const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
	this.setState({
		[event.target.name]: value
	});
	
}
	render() {
		return (
			<div className="search-area">
				<form className="search-area-form" onSubmit={this.onSubmit}>
					<input className="search-area-input" name="term" placeholder="keywords, job title, skills.." onChange={this.onChange} value={this.state.term}/>
					<input className="search-area-input" name="location" placeholder="location.." onChange={this.onChange} value={this.state.location}/>
					<div className="checkbox-container">
						<input name="fullTime" id="fullTime" type="checkbox" onChange={this.onChange}/>
						<label htmlFor="fullTime">Full Time</label>
					</div>
					<button className="button search-area-button" type="submit" >Search</button>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => ({
	getJobs: (searchInput) => dispatch(getJobs(searchInput))
})

export default connect(null, mapDispatchToProps)(SearchArea);
