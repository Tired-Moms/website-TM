import React from 'react';
import videoPH from '../../assets/v-placeholder.png';

export default function VideoSection() {
	return (
		<div className="videoContainer">
			<h2>
				MINT INFO <strong>SECTION</strong>
			</h2>
			<img src={videoPH} alt="Placeholder" className="vPlaceholder" />
		</div>
	);
}
