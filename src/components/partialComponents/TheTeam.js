import React from 'react';
//  images
import diana from '../../assets/Diana.png';
import giselle from '../../assets/Giselle.png';
import angela from '../../assets/Angela.png';
import ricardo from '../../assets/ricardo.jpg';
import lucas from '../../assets/lucas.jpg';
import julian from '../../assets/Julian.jpg';

export default function TheTeam() {
	return (
		<div className="teamSection" id="team">
			<h2>THE TEAM</h2>
			<div className="team">
				<figure>
					<img src={diana} alt="Diana - Tired Moms founder" />
					<figcaption>
						Diana Moreno
						<br />
						<strong>FOUNDER</strong>
					</figcaption>
				</figure>
				<figure>
					<img src={giselle} alt="Giselle Escandon" />
					<figcaption>
						Giselle Escandon
						<br />
						<strong>ARTIST</strong>
					</figcaption>
				</figure>
				<figure>
					<img src={angela} alt="Angela Aristizabal" />
					<figcaption>
						Angela Aristizabal
						<br />
						<strong>UX/UI</strong>
					</figcaption>
				</figure>
				<figure>
					<img src={ricardo} alt="Ricardo Jaramillo" />
					<figcaption>
						Ricardo Jaramillo
						<br />
						<strong>&nbsp;</strong>
					</figcaption>
				</figure>
				<figure>
					<img src={lucas} alt="Lucas Decleva" />
					<figcaption>
						Lucas Decleva
						<br />
						<strong>DEVELOPER</strong>
					</figcaption>
				</figure>
				<figure>
					<img src={julian} alt="Julian Moreno" />
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
