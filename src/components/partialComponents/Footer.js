import React from 'react';
import Links from './Links';
import tmLogo from '../../assets/Logo-footer.png';

export default function Footer() {
	return (
		<div className="footer">
			<div className="logo">
				<img src={tmLogo} alt="Tired Moms Logo" />
				<Links />
			</div>
		</div>
	);
}
