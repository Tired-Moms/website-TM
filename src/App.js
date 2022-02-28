import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';
import { fetchMint } from './redux/mint/mintActions';
// import VideoSection from './partialComponents/VideoSection';

// images
import mom from './assets/tired-mom1.jpg';
import hLogo from './assets/Horizontal-logo.png';
import testImg from './assets/momsTest.jpg';
import Gallery from './components/partialComponents/Gallery';
import Faq from './components/partialComponents/Faq';
import RoadMap from './components/partialComponents/RoadMap';
import AboutTheArt from './components/partialComponents/AboutTheArt';
import TheTeam from './components/partialComponents/TheTeam';
import Membership from './components/partialComponents/Membership';

import Footer from './components/partialComponents/Footer';
import Navigation from './components/partialComponents/Navigation';

function App() {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const dataT = useSelector((state) => state?.mint);
	const [claimingNft, setClaimingNft] = useState(false);
	const [feedback, setFeedback] = useState(`Public Mint`);
	const [mintAmount, setMintAmount] = useState(1);
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: '',
		SCAN_LINK: '',
		NETWORK: {
			NAME: '',
			SYMBOL: '',
			ID: 0,
		},
		NFT_NAME: '',
		SYMBOL: '',
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: '',
		MARKETPLACE_LINK: '',
		SHOW_BACKGROUND: false,
	});

	const tm = `url(${mom})`;

	const claimNFTs = async () => {
		let cost = CONFIG.WEI_COST;
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalCostWei = String(cost * mintAmount);
		let totalGasLimited = await blockchain.smartContract.methods
			.mint(mintAmount)
			.estimateGas({ from: blockchain.account, value: totalCostWei });
		let totalGasLimit = Math.floor(parseInt(totalGasLimited * 1.3));
		console.log('Cost: ', totalCostWei);
		console.log('Gas limit: ', totalGasLimit);
		setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
		setClaimingNft(true);
		blockchain.smartContract.methods.mint(mintAmount);
		blockchain.smartContract.methods
			.mint(mintAmount)
			.send({
				gasLimit: String(totalGasLimit),
				to: CONFIG.CONTRACT_ADDRESS,
				from: blockchain.account,
				value: totalCostWei,
			})
			.once('error', (err) => {
				console.log(err);
				setFeedback('Error minting please contact admin.');
				setClaimingNft(false);
			})
			.then((receipt) => {
				console.log(receipt);
				setFeedback(
					`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
				);
				setClaimingNft(false);
				dispatch(fetchData(blockchain.account));
			});
	};

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1;
		if (newMintAmount < 1) {
			newMintAmount = 1;
		}
		setMintAmount(newMintAmount);
	};

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1;
		if (newMintAmount > 8) {
			newMintAmount = 8;
		}
		setMintAmount(newMintAmount);
	};

	const getConfig = async () => {
		const configResponse = await fetch('/config/config.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const config = await configResponse.json();
		SET_CONFIG(config);
	};

	const getData = () => {
		if (blockchain.account !== '' && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	};

	const getMint = () => {
		if (blockchain.account !== '' && blockchain.smartContract !== null) {
			dispatch(fetchMint(blockchain.account));
		}
	};

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		getData();
	}, [blockchain.account]);

	useEffect(() => {
		getMint();
	}, [blockchain.account]);

	console.log('data', blockchain.account);
	return (
		<div className="mainContainer">
			<Navigation />
			<div className="homePage">
				<div style={{ backgroundImage: tm }} className="mainContainerTM">
					<div className="mintingBox">
						{Number(data?.totalSupply) >= CONFIG.MAX_SUPPLY ? (
							<>
								<p>The sale has ended.</p>
								<p>You can still find {CONFIG.NFT_NAME} on</p>

								<a
									target="_blank"
									rel="noreferrer"
									href={CONFIG.MARKETPLACE_LINK}
								>
									{CONFIG.MARKETPLACE}
								</a>
							</>
						) : (
							<>
								{blockchain.account === '' ||
								blockchain.smartContract === null ? (
									<div className="connectBox">
										<h3>Minting Now!!</h3>

										<button
											className="btnConnect"
											onClick={(e) => {
												e.preventDefault();
												dispatch(connect());
												getData();
											}}
										>
											Connect wallet
										</button>
										{blockchain.errorMsg !== '' ? (
											<>
												<h4>{blockchain.errorMsg}</h4>
											</>
										) : null}
									</div>
								) : (
									<div className="mintBox">
										<h3>{feedback}</h3>
										{data?.totalSupply === data?.totalSupply ? (
											<>
												<>
													<h2 className="totalSupply">
														<NumberFormat
															value={data?.totalSupply}
															displayType={'text'}
															thousandSeparator={true}
														/>
														/
														<NumberFormat
															value={CONFIG.MAX_SUPPLY}
															displayType={'text'}
															thousandSeparator={true}
														/>
													</h2>
													<div className="quantityBtns">
														<a
															style={{ lineHeight: 0.4 }}
															disabled={claimingNft ? 1 : 0}
															onClick={(e) => {
																e.preventDefault();
																decrementMintAmount();
															}}
															className="quantityBtnMin"
														>
															-
														</a>

														<p className="amount">{mintAmount}</p>

														<a
															disabled={claimingNft ? 1 : 0}
															onClick={(e) => {
																e.preventDefault();
																incrementMintAmount();
															}}
															className="quantityBtn"
														>
															+
														</a>
													</div>
												</>
												<>
													<h5>
														{(CONFIG.DISPLAY_COST * mintAmount).toFixed(2)}{' '}
														{CONFIG.NETWORK.SYMBOL} + GAS
													</h5>
													<button
														disabled={claimingNft ? 8 : 0}
														onClick={(e) => {
															e.preventDefault();
															claimNFTs();
															getData();
														}}
														className="btnMint"
													>
														{claimingNft ? 'BUSY' : 'Mint'}
													</button>
												</>
											</>
										) : (
											<h2 className="soldOut">Sold Out!!</h2>
										)}
									</div>
								)}
							</>
						)}
					</div>
					<div className="contentContainer">
						<div className="welcomeBox" id="story">
							<h1 title="WELCOME TO TIRED MOMS">WELCOME TO</h1>
							<img src={hLogo} alt="Tired Moms logo" className="hLogo" />
							<img src={testImg} alt="Test" className="colTM" />
							<p>
								TiredMom NFT’s are 11,111 randomly generated & unique art pieces
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
								Having a TiredMom grants you 100% creative and commercial
								rights. You earned it mama!
							</p>
						</div>
						<Membership />
						<Gallery />
						{/* <VideoSection /> */}
						<AboutTheArt />
						<RoadMap />
						<TheTeam />
						<Faq />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
