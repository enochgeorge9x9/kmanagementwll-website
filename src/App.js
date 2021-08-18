import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header';
import SectionA from './components/Section-a';
import SectionB from './components/Section-b';
import SectionC from './components/Section-c';
import SectionD from './components/Section-d';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import SideBanner from './components/SideBanner';

import './assets/icofont/icofont.min.css';

function App() {
	return (
		<div>
			<body>
				{/* <!-- Header --> */}
				<BurgerMenu />
				<Header />

				{/* <!-- Main Content --> */}
				<main>
					{/* <!-- Side Banner --> */}
					<SideBanner />

					{/* <!-- Section A --> */}
					<SectionA />

					<div className='bg bg-img2 text-position-1'>
						{/* <!-- Section B --> */}
						<div className='bg bg-secondary3'>
							<SectionB />
						</div>

						{/* <!-- Section C --> */}
						<SectionC />
					</div>

					{/* <!-- Section D --> */}
					<SectionD />
				</main>

				{/* <!-- Footer --> */}
				<footer id='footer'>
					<div className='bg-img3'>
						<div className='bg-overlay1'></div>

						{/* <!-- Contact Us/ Info --> */}
						<Contact />

						{/* Footer-Links */}
						<Footer />
					</div>
				</footer>

				{/* <!-- JavaScript --> */}
				<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js' integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4' crossorigin='anonymous'></script>
				<script src='./javascript/app.js'></script>
			</body>
		</div>
	);
}

export default App;
