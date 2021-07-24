import logoLight from '../imgs/logo-light.png';

const Footer = () => {
	return (
		<section className='footer-links'>
			<div className='bg-overlay2'> </div>
			<div className='container all-footer'>
				{/* <!-- Company Summary --> */}
				<div className='footer-summary'>
					<img className='logo2' src={logoLight} alt='K&M Management Logo' />
					<h3>
						Kevin
						<br />
						<span>Management</span>
					</h3>
					<div className='media-links2'>
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet magna a euismod interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet magna a euismod interdum</p>
				</div>

				{/* <!-- All Links --> */}
				<div className='all-links'>
					<div className='quick-links links'>
						<h4>Quick Links</h4>
						<ul>
							<li>
								<a href='/home'>Home</a>
							</li>
							<li>
								<a href='/about'>About Us</a>
							</li>
							<li>
								<a href='/services'>Services</a>
							</li>
							<li>
								<a href='#send-message'>Contact</a>
							</li>
						</ul>
					</div>
					<div className='services-links links'>
						<h4>Services</h4>
						<ul>
							<li>
								<a href='/consulting'>Consulting</a>
							</li>
							<li>
								<a href='/lawyer'>Lawyer</a>
							</li>
							<li>
								<a href='/leadership'>Leadership</a>
							</li>
							<li>
								<a href='/business'>Business</a>
							</li>
							<li>
								<a href='/development'>Development</a>
							</li>
						</ul>
					</div>
					<div className='contact-info links'>
						<h4>Contact info</h4>
						<ul>
							<li>Sitra, Bahrain</li>
							<li>+973 33332940</li>
							<li>sysmarkbahrain@gmail.com</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- Credits --> */}
			<div className='credits container'>
				<div className='line'></div>
				<p>Copyright by &copy; Kevin Management</p>
			</div>
		</section>
	);
};

export default Footer;
