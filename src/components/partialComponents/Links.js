import React from 'react';
import twitter from '../../assets/twitter.png';
import discord from '../../assets/discord.png';
import opensea from '../../assets/opensea-logo.png';

export default function Links() {
	return (
		<ul className="navLinks">
			{/* <li>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<img src={opensea} alt="Opensea icon" />
				</a>
			</li> */}
			<li>
				<a
					href="https://discord.io/tiredmomsnft"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={discord} alt="Discord icon" />
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/tiredmomsnft"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={twitter} alt="Twitter icon" />
				</a>
			</li>
		</ul>
	);
}
