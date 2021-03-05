import React, {Fragment, useState} from 'react';


const Topbar = () => {

	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = () => {
		return setToggleMenu(!toggleMenu);
	}
	return (
		<Fragment>
			<div className="topbar">
				<h3 className="topbar__logo">Job<span>arena</span></h3>
				<h6>Candidate</h6>
				<h6>Recruiter</h6>
				<div className="topbar__menu--icon" onClick={handleToggleMenu}>
					<div className={`topbar__menu ${toggleMenu ? 'topbar__menu--active' : ''}`}></div>
				</div>
			</div>
			<nav className={`navbar${toggleMenu ? '' : ' navbar--hidden'}`}>
				<ul>
					<li><a href="/">Jobarena</a></li>
					<li><a href="/">Job offers</a></li>
					<li><a href="#Blog">Blog</a></li>
					<li><a href="#Hdiw">How does it work?</a></li>
				</ul>
			</nav>
		</Fragment>
	);
}


export default Topbar;