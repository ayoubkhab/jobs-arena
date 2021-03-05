import React from 'react';
import {connect} from 'react-redux';
import { getNextPage } from '../redux';



const Pagination = (props) => {

	const handleNextPage = () => {
		const searchInput = { ...props.searchInput, page: props.searchInput.page + 1 }
		props.getNextPage(searchInput);
		window.scrollTo(0,0);
	}

	const handlePrevPage = () => {
		const searchInput = { ...props.searchInput, page: props.searchInput.page - 1 }
		props.getNextPage(searchInput);
		window.scrollTo(0,0);
	}

	return (
		<div className="pagination">
			<button className="button" onClick={handlePrevPage} disabled={props.searchInput.page === 1 ? true : false}>Prev Page</button>
			<button className="button" onClick={handleNextPage} disabled={props.disabledNext} >Next Page</button>
		</div>
	);
}


const mapStateToProps = state => ({
	searchInput: state.searchInput
})

const mapDispatchToProps = dispatch => ({
	getNextPage: (searchInput) => dispatch(getNextPage(searchInput))
})


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);