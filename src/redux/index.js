import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const intialState = {
	jobs: [], job: {}, loadingUI: false, showCorsPrompt: false, searchInput: {}
}


const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'GET_JOBS':
			return { ...state, jobs: action.payload.jobs, searchInput: action.payload.searchInput}
		case 'GET_JOB':
			return { ...state, job: action.payload.job }
		case 'GET_NEXT_PAGE':
			return { ...state, jobs: action.payload.jobs, searchInput: action.payload.searchInput }
		case 'LOADING_UI':
			return {...state, loadingUI: true}
		case 'STOP_LOADING_UI':
			return {...state, loadingUI: false}
		case 'SHOW_CORS_PROMPT':
			return {...state, showCorsPrompt: true}
		default:
			return state;
	}	
}

const getJobsAction = (jobs, searchInput) => ({
	type: 'GET_JOBS',
	payload: {
		jobs: jobs,
		searchInput: searchInput
	}
})

const getJobAction = (job) => ({
	type: 'GET_JOB',
	payload: {
		job: job
	}
})

const getNextPageAction = (jobs, searchInput) => ({
	type: 'GET_NEXT_PAGE',
	payload: {
		jobs: jobs,
		searchInput: searchInput
	}
})

export const getJobs = (searchInput) => dispatch => {
	dispatch({type: 'LOADING_UI'});
	axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchInput.term}&location=${searchInput.location}&full_time=${searchInput.fullTime}`)
	.then(res => {
		dispatch(getJobsAction(res.data, searchInput))
		dispatch({type: 'STOP_LOADING_UI'})
	})
	.catch(e => {
		if (e.response.status === 403) {
			dispatch({ type: 'SHOW_CORS_PROMPT' })
		}
		console.log("error: ", e)
	})
}

export const getJob = (id) => dispatch => {
	dispatch({type: 'LOADING_UI'});
	axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
	.then(res => {
		dispatch(getJobAction(res.data))
		dispatch({ type: 'STOP_LOADING_UI' })
	})
	.catch(e => {
		if (e.response.status === 403) {
			dispatch({ type: 'SHOW_CORS_PROMPT' })
		}
		console.log('getJob error :', e)
	})
}

export const getNextPage = (searchInput) => dispatch => {
	dispatch({type: 'LOADING_UI'});
	axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchInput.term}&location=${searchInput.location}&full_time=${searchInput.fullTime}&page=${searchInput.page}`)
	.then(res => {
		dispatch(getNextPageAction(res.data, searchInput))
		dispatch({type: 'STOP_LOADING_UI'})
	})
	.catch(e => {
		if (e.response.status === 403) {
			dispatch({ type: 'SHOW_CORS_PROMPT' })
		}
		console.log("error: ", e)
	})
}


export const store = createStore(reducer, intialState, applyMiddleware(thunk));