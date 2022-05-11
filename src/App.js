import Homepage from './components/Homepage';
import Footer from './components/partialComponents/Footer';
import Navigation from './components/partialComponents/Navigation';
import TagManager from 'react-gtm-module';

function App() {
	const tagManagerArgs = {
		gtmId: 'G-7HP2G31L9C',
	};
	TagManager.initialize(tagManagerArgs);
	return (
		<div className="mainContainer">
			<Navigation />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
