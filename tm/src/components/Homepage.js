import React from 'react';
import VideoSection from './partialComponents/VideoSection';

// images
import mom from '../assets/tired-mom1.jpg';
import hLogo from '../assets/Horizontal-logo.png';
import testImg from '../assets/momsTest.jpg';
import Gallery from './partialComponents/Gallery';
import Faq from './partialComponents/Faq';
import RoadMap from './partialComponents/RoadMap';
import AboutTheArt from './partialComponents/AboutTheArt';

export default function Homepage() {
	const tm = `url(${mom})`;

	return (
		<div className="homePage">
			<div style={{ backgroundImage: tm }} className="mainContainer">
				<div className="contentContainer">
					<div className="welcomeBox">
						<h1 title="WELCOME TO TIRED MOMS">WELCOME TO</h1>
						<img src={hLogo} alt="Tired Moms logo" className="hLogo" />
						<img src={testImg} alt="Test" className="colTM" />
						<p>
							TiredMom NFT’s are 10,000 randomly generated & unique art pieces
							carefully crafted to represent the world's current vision of a
							Tired Mom. What is a Tired Mom you ask? The mom that grabs the
							groceries, helps with school projects, attends PTA meetings, and
							feeds the baby at 3 a.m. We are the moms that work endlessly to
							make our houses warm and inviting places for our kids and
							significant others.
						</p>

						<p>
							Each of our nft’s is a mom in all her glory. Shuffling all the
							things! Making it work. The best part of these Moms is the
							Utility!{' '}
						</p>

						<p>
							These moms are backed by real world BTC Miners! While they are
							running their crazy households they are making a real income
							passively with Crypto! Isn’t that the dream? Make this your
							reality!{' '}
						</p>
						<br />

						<p>
							Join us on our journey & experience the thrill of growing an NFT
							community that has actual monthly utility!
						</p>

						<p>
							Having a TiredMom grants you 100% creative and commercial rights.
							You earned it mama!
						</p>
					</div>
					<Gallery />
					<VideoSection />
					<AboutTheArt />
					<RoadMap />
					<Faq />
				</div>
			</div>
		</div>
	);
}
