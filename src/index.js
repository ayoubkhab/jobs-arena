import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './layout/Topbar';
import Main from './layout/Main';
import JobPage from './layout/JobPage';
import Footer from './layout/Footer';




const App = () => {
	return (
		<Fragment>
			<Router>
				<Topbar/>
				<Switch>
					<Route exact path="/">
						<Main />	
					</Route>
					<Route path="/job-details/:id">
						<JobPage />	
					</Route>
				</Switch>
				<Footer />
			</Router>
		</Fragment>
	);
}



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.querySelector('#root'));