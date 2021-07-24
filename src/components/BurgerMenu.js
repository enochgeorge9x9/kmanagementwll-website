import React, { useState } from 'react';
import logo from '../imgs/logo-light.png';

const Header = () => {
	const socialLinks = {
		facebook: '',
		messenger: '',
		instagram: '',
	};
	const [menu, setMenu] = useState({ checked: false });

	let menuToggle = () => {
		return setMenu(!menu);
	};

	// Icons from Box-Icon
	// Name: Icon_Name

	const NavLinks = {
		About: 'user',
		Services: 'server',
		// Testimonials: 'message-rounded-detail',
		Contact: 'envelope',
		// Portfolio: 'book-content',
	};
	return (
		<header className={menu ? 'burgerMenu' : 'burgerMenu burgerMenu-active'}>
			<div className='d-flex flex-column'>
				<div className='profile'>
					<img src={logo} alt='' className='' />
					<h1 className='text-light'>
						<a href='index.html'>
							<span>Kevin</span> Management
						</a>
					</h1>
					<div className='social-links mt-3 text-center'>
						{Object.entries(socialLinks).map(([name, link]) => {
							return (
								<a href={link} className={name} key={name} target='_blank' rel='noreferrer'>
									<i className={`bx bxl-${name}`}></i>
								</a>
							);
						})}
					</div>
				</div>
			</div>

			{/* ============NavBar==================== */}
			<nav className='nav-menu'>
				<ul>
					<li className='active'>
						<a href='index.html'>
							<i className='bx bx-home'></i>
							<span>Home</span>
						</a>
					</li>
					{Object.entries(NavLinks).map(([key, value]) => {
						return (
							<li>
								<a href={`#${key}`}>
									<i className={`bx bx-${value}`}></i>
									<span>{key}</span>
								</a>
							</li>
						);
					})}
				</ul>
				<button onClick={menuToggle} type='button' className='mobile-nav-toggle d-xl-none'>
					<i className={menu ? 'icofont-navigation-menu' : 'icofont-close'}></i>
				</button>
			</nav>
			<div className='banner-infos-2'>
				<p className='banner-info'>sysmarkbahrain@gmail.com</p>
				<p className='banner-info'>+973 322323232</p>
				<a href='#send-message' className='btn btn-banner btn-secondary'>
					FREE CONSULTATION
				</a>
			</div>
		</header>
	);
};

export default Header;
