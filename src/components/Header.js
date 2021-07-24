// Images
import logo from '../imgs/logo-light.png';

const Header = () => {
	return (
		<header id='header'>
			{/* <!-- Hero Banner --> */}
			<div className='hero-banner container'>
				<img src={logo} className='logo banner-logo' alt='logo' />
				<div className='banner-infos'>
					<p className='banner-info'>sysmarkbahrain@gmail.com</p>
					<p className='banner-info'>+973 34436577</p>
					<p className='banner-info'>EN</p>
					<a href='#send-message' className='btn btn-banner btn-secondary'>
						FREE CONSULTATION
					</a>
				</div>
			</div>
			<div className='line line1'></div>

			{/* <!-- NavBar --> */}
			<div className='bg bg-img1'>
				<nav id='navbar' className='container'>
					<ul className='navLinks'>
						<li className='navLink'>
							<a href='/home'>Home</a>
						</li>
						<li className='navLink'>
							<a href='/about'>About</a>
						</li>
						<li className='navLink'>
							<a href='/services'>Services</a>
						</li>
						<li className='navLink'>
							<a href='#footer'>Contact</a>
						</li>
					</ul>
					<div className='mediaLinks'>
						<div className='allMedia'>
							<a className='meidaLink' href='www.whatsapp.com'>
								<i className='bx bxl-messenger'></i>
							</a>
							<a className='meidaLink' href='www.facebook.com'>
								<i className='bx bxl-facebook'></i>
							</a>
							<a className='meidaLink' href='www.instagram.com'>
								<i className='bx bxl-instagram'></i>
							</a>
						</div>
					</div>
					<div className='line line2'></div>
				</nav>
				{/* <!-- Hero-Content --> */}
				<section id='hero' className='container'>
					<div className='content-wrap'>
						<h1 className='content-title'>
							<span>Get the Best</span> business and corporate law services.
						</h1>
						<div className='line line3'></div>
						<p className='content-text'>"We are passionate about helping clients achieve their goals..."</p>
						<div className='hero-link'>
							<a className='round-btn btn-light' href='#section-b'>
								OUR SERVICES
							</a>
							<a className='round-btn btn-trans' href='#section-a'>
								ABOUT US
							</a>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
