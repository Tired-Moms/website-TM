import Homepage from './components/Homepage';
import Footer from './components/partialComponents/Footer';
import Navigation from './components/partialComponents/Navigation';

function App() {
	return (
		<div className="mainContainer">
			<Navigation />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
