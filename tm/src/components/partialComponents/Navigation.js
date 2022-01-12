import React from 'react';
import Links from './Links';

// Images
import logo from '../../assets/Logo.png';

export default function Navigation() {
	return (
		<div className="topNav">
			<div className="logoBox">
				<img src={logo} alt="Tired Moms Logo" />
			</div>
			<div className="menuBox">
				<ul>
					<li>
						<a href="#story" rel="noopener noreferrer">
							Story
						</a>
					</li>
					<li>
						<a href="#membershipLink" rel="noopener noreferrer">
							Membership
						</a>{' '}
					</li>
					<li>
						<a href="#roadmap" rel="noopener noreferrer">
							Roadmap
						</a>
					</li>
					<li>
						<a href="#team" rel="noopener noreferrer">
							Team
						</a>
					</li>
					<li>
						<a href="#faq" rel="noopener noreferrer">
							FAQ
						</a>
					</li>
				</ul>
			</div>
			<div className="socialBox">
				<Links />
			</div>
		</div>
	);
}
