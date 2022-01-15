import React, { useState } from 'react';

//  images
import diana from '../../assets/Diana.png';
import giselle from '../../assets/Giselle.png';
import angela from '../../assets/Angela.png';
import ricardo from '../../assets/ricardo.jpg';
import lucas from '../../assets/lucas.jpg';
import julian from '../../assets/Julian.jpg';

//  Illustrations
import dianaM from '../../assets/Diana-M.png';
import giselleE from '../../assets/Giselle-E.png';
import angelaA from '../../assets/Angela-A.png';
import ricardoJ from '../../assets/Ricardo-J.png';
import lucasD from '../../assets/Lucas-D.png';
import julianM from '../../assets/Julian-M.png';

export default function TheTeam() {
	// const [overG, setOverG] = useState(false);
	// const [overA, setOverA] = useState(false);
	// const [overR, setOverR] = useState(false);
	// const [overL, setOverL] = useState(false);
	// const [overJ, setOverJ] = useState(false);

	const [inHover, setHover] = useState(false);
	const [inHoverG, setHoverG] = useState(false);
	const [inHoverA, setHoverA] = useState(false);
	const [inHoverR, setHoverR] = useState(false);
	const [inHoverL, setHoverL] = useState(false);
	const [inHoverJ, setHoverJ] = useState(false);

	return (
		<div className="teamSection" id="team">
			<h2>THE TEAM</h2>
			<div className="team">
				<figure onClick={() => setHover(!inHover)}>
					{inHover ? (
						<img src={diana} alt="Diana - Tired Moms founder" />
					) : (
						<img src={dianaM} alt="Diana - Tired Moms founder" />
					)}

					<figcaption>
						Diana Moreno
						<br />
						<strong>FOUNDER</strong>
					</figcaption>
				</figure>

				<figure onClick={() => setHoverG(!inHoverG)}>
					{inHoverG ? (
						<img src={giselle} alt="Giselle Escandon" />
					) : (
						<img src={giselleE} alt="Giselle Escandon" />
					)}

					<figcaption>
						Giselle Escandon
						<br />
						<strong>ARTIST</strong>
					</figcaption>
				</figure>
				<figure onClick={() => setHoverA(!inHoverA)}>
					{inHoverA ? (
						<img src={angela} alt="Angela Aristizabal" />
					) : (
						<img src={angelaA} alt="Angela Aristizabal" />
					)}

					<figcaption>
						Angela Aristizabal
						<br />
						<strong>UX/UI</strong>
					</figcaption>
				</figure>
				<figure onClick={() => setHoverR(!inHoverR)}>
					{inHoverR ? (
						<img src={ricardo} alt="Ricardo Jaramillo" />
					) : (
						<img src={ricardoJ} alt="Ricardo Jaramillo" />
					)}

					<figcaption>
						Ricardo Jaramillo
						<br />
						<strong>Concept Design </strong>
					</figcaption>
				</figure>
				<figure onClick={() => setHoverL(!inHoverL)}>
					{inHoverL ? (
						<img src={lucas} alt="Lucas Decleva" />
					) : (
						<img src={lucasD} alt="Lucas Decleva" />
					)}

					<figcaption>
						Lucas Decleva
						<br />
						<strong>DEVELOPER</strong>
					</figcaption>
				</figure>
				<figure onClick={() => setHoverJ(!inHoverJ)}>
					{inHoverJ ? (
						<img src={julian} alt="Julian Moreno" />
					) : (
						<img src={julianM} alt="Julian Moreno" />
					)}
					<figcaption>
						Julian Moreno
						<br />
						<strong>DEVELOPER</strong>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
