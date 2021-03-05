import React, {Fragment} from 'react';
import SearchArea from '../components/SearchArea';
import JobsList from '../components/JobsList';
import Companies from '../components/Companies';
import Modal from '../components/Modal';

const Main = (props) => {


	return (
		<Fragment>
			<Modal/>
			<main className="main">
				<SearchArea />
				<JobsList />
				<Companies />
			</main>
		</Fragment>
	);
}


export default Main;