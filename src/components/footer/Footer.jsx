import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bg})` }}>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<div className="logo">
						<img src={logo} alt="" />
						<Link to="/">2021</Link>
					</div>
				</div>
				<div className="footer__content__menus">
					<div className="footer__content__menu">
						There’s always an exciting new movie coming out that we all want to see, right !? MT puts the
						newest HD movie previews in your hands. Browse trailers, clips, and featurettes for the biggest
						Hollywood blockbusters and independent cinema .
						<footer id="main-footer">
							<p>MT  &copy; 2021, All Rights Reserved</p>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
