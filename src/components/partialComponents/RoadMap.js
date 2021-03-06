import React from 'react';
import coffee from '../../assets/EXCELSO-16-OZ-CON-LINEA.jpg';

export default function RoadMap() {
	return (
		<div className="roadmap" id="roadmap">
			<h2>ROADMAP</h2>
			<h3>PREMINT</h3>
			<ul>
				<li>Build community</li>
				<li>Raffle off presale spots </li>
				<li>Reserve 200 Images for Marketing/Giveaways</li>
			</ul>
			<h3>ROADMAP 1.0</h3>
			<div className="percentages">
				<div className="numberP">25%</div>
				<ul className="listDesc">
					<li>10 BTC Miners will be brought online.</li>
					<li>
						5 NFT’s will be raffled off and airdropped for 25% first holders.
					</li>
					<li>
						Voting for the DAO will be set up and community wallet will start
						accumulating funds.
					</li>
				</ul>
			</div>
			<div className="percentages">
				<div className="numberP">50%</div>
				<ul className="listDesc">
					<li>25 BTC Miners will be brought online.</li>
					<li>
						10 NFT’s will be raffled off and airdropped for 50% first holders.
					</li>
					<li>Merch Store will launch.</li>
					<li>Creation of Donation fund and voting on who to donate to.</li>
					<li>Coffee utility ordered for the NFT holders.</li>
				</ul>
			</div>
			<div className="percentages">
				<div className="numberP">75%</div>
				<ul className="listDesc">
					<li> 50 BTC Miners will be brought online.</li>
					<li>
						15 NFT’s will be raffled off and airdropped for first 75% of
						holders.
					</li>
					<li>Merch Store will launch</li>
					<li>Merch Store Discount to exclusive products.</li>
				</ul>
			</div>
			<div className="percentages">
				<div className="numberP">100%</div>
				<ul className="listDesc">
					<li>100 BTC Miners will be brought online.</li>
					<li>Exclusive merch giveaway raffle for holders.</li>
					<li>Donation of the Dao’s charity of choice.</li>
					<li>Community wallet mining BTC at 100% capacity.</li>
					<li>3% of TiredMom’s resale shared with community wallet</li>
				</ul>
			</div>
			<div className="roadmap2">
				<h3>ROADMAP 2.0</h3>
				<h4>Coffee Utility</h4>
				<p>
					We have partnered with Familia Campillo to offer coffee to all our
					TiredMom holders! If you hold one of our TiredMomsNFT you will have
					special perks and discounts on{' '}
					<a
						href="https://cafecampillo.com/tiredmomsnft/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Familia Campillo
					</a>{' '}
					premier coffee products.
				</p>
				<p>
					As a tired mom, we know that coffee is our lifeblood, getting us from
					the dance recital to the soccer game without fail. Coffee can be a
					refuge when we can sit down and drink it hot. Owning one of our NFTs
					will give you free coffee and discount options on future purchases.
					Verify your ownership and receive exclusive discount code information
					for ordering your coffee directly from Colombia.
				</p>
				<p>
					For more details join our
					<a
						href="https://discord.io/tiredmomsnft"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						discord.
					</a>
				</p>
				<a
					className="coffeeImage"
					href="https://cafecampillo.com/tiredmomsnft/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={coffee} alt="Tired Moms Coffee" />
				</a>
			</div>
		</div>
	);
}
