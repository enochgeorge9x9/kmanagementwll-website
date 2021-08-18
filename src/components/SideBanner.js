import banner from '../imgs/banner.svg';

const SideBanner = () => {
	return (
		<div className='banner'>
			<img src={banner} alt='' />

			<div className='banner-infos'>
				<div className='content-1'>
					<h3>
						Welcome <span>Hire</span>
					</h3>
					<h4>Consultation Firm</h4>
				</div>
				<div className='content-2'>
					<h3>
						<span>provide the best</span>
						Services.
					</h3>
					<p>Lorem ipsum dolor sit amet Lorem, ipsum., consectetur adipiscing elit. Phasellus aliquet magna a euismod interdum</p>
				</div>
			</div>
		</div>
	);
};

export default SideBanner;
