import React from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import corsImg1 from '../styles/cors-1.gif'; 
import corsImg2 from '../styles/cors-2.gif'; 

ReactModal.setAppElement('#root');

const Modal = (props) => {


	return (
		<ReactModal
			isOpen={props.showCorsPrompt}
			className="Modal"
			overlayClassName="Overlay"
		>
			<h2>One little step before we go!</h2>
			<h6>
				In order for the website to retrieve the jobs from the server, <br/>
				please click on the link below:
			</h6>
			<a className="modal-link" href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer"><h5>https://cors-anywhere.herokuapp.com/corsdemo</h5></a>
			<h6>
				then click on the button shown in this picture,
			</h6>
			<img className="cors-image" src={corsImg1} alt=""/>
			<h6>
				then wait until it refreshes and becomes like that:
			</h6>
			<img className="cors-image" src={corsImg2} alt=""/>
			<h6>
				then you can close that site, and finally refresh our site. <br/>
				or click on the button below.
			</h6>
			<button className="button" onClick={() => window.location.reload()}>Refresh</button>
		</ReactModal>
	);
}

const mapStateToProps = (state) => ({
	showCorsPrompt: state.showCorsPrompt
})

export default connect(mapStateToProps)(Modal);