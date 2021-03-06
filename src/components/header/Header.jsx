import React, { useRef, useEffect } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import { logoutUser } from "../../actions/auth";

import logo from '../../assets/tmovie.png';

const headerNav = [
	{
		display: 'Home',
		path: '/'
	},
	{
		display: 'Movies',
		path: '/movie'
	},
	{
		display: 'TV Series',
		path: '/tv'
	},
	{
		display: 'Login',
		path: '/login'
	},
	{
		display: 'Register',
		path: '/register'
	},
	{
		display: 'logout',
		path: '/'
	}
];

const Header = ({logoutUser}) => {
	const { pathname } = useLocation();
	const headerRef = useRef(null);

	const active = headerNav.findIndex((e) => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		};
		window.addEventListener('scroll', shrinkHeader);
		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		};
	}, []);

	return (
		<div ref={headerRef} className="header">
			<div className="header__wrap container">
				<div className="logo">
					<img src={logo} alt="" />
					<Link to="/">2021</Link>
				</div>
				<ul className="header__nav">
					{headerNav.map((e, i) => (
						<li key={i} className={`${i === active ? 'active' : ''}`}>
							{e.display === 'logout' ? (
								<Link onClick={()=>window.location.reload(true)} to="/" replace>
									{e.display}
								</Link>
							) : (
								<Link to={e.path}>{e.display}</Link>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
