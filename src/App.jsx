import { useState, useEffect } from 'react';
//import React from 'react';

import CurrentRates from './components/CurrentRates';
import CurrentTime from './components/CurrentTime';
import Converter from './components/Converter';

import axios from 'axios';

function App() {
	const [BitRates, setBitRates] = useState({});
	const [dataTime, setDataTime] = useState({});
	const [localTime, setLocalTime] = useState(null);
	const [fetchTime, setFetchTime] = useState(null);
	const [component, setComponent] = useState('conversions');

	const fetchAPIData = async function () {
		const APIData = await axios.get(
			'https://api.coindesk.com/v1/bpi/currentprice.json'
		);
		setDataTime(APIData.data.time.updated);

		const destructuredBPIData = Object.keys(APIData.data.bpi).reduce(function (
			acc,
			currentCode
		) {
			acc[currentCode] = APIData.data.bpi[currentCode];
			return acc;
		},
		{});
		setBitRates(destructuredBPIData);
	};
	useEffect(
		function () {
			fetchAPIData();
			setLocalTime(localStorage.getItem('localTime'));
		},
		[dataTime]
	);

	const conversionHandler = () => {
		setComponent('conversions');
	};
	const USDHandler = () => {
		setComponent('USD');
	};
	const EURHandler = () => {
		setComponent('EUR');
	};
	const GBPHandler = () => {
		setComponent('GBP');
	};

	return (
		<div
			style={{
				textAlign: 'center',
				height: '100vh',
				backgroundColor: 'cadetblue',
			}}
		>
			<nav className="navbar bg-dark ">
				<div className="container-fluid justify-end ">
					<span className="navbar-brand mb-0 h1 text-white justify-content-start ">
						Bitcoin Converter
					</span>
					<span className="d-flex">
						<button className="" onClick={conversionHandler}>
							View Conversions
						</button>

						<div className="dropdown ms-5">
							<button
								className="btn btn-dark dropdown-toggle shadow-lg"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Currency Converter
							</button>

							<ul className="dropdown-menu bg-secondary text-white">
								<button className="dropdown-item" type="button" onClick={USDHandler}>
									USD Converter
								</button>
								<button className="dropdown-item " type="button" onClick={EURHandler}>
									EUR Converter
								</button>
								<button className="dropdown-item " type="button" onClick={GBPHandler}>
									GBP Converter
								</button>
							</ul>
						</div>
					</span>
				</div>
			</nav>

			<div
				style={{
					display: 'flex',
					alignItems: 'flex-end',
					width: '100vw',
				}}
			>
				<div className="py-5 w-100">
					{component === 'conversions' && (
						<CurrentRates
							BitRates={BitRates}
							setBitRates={setBitRates}
						></CurrentRates>
					)}
					{component === 'USD' && <Converter BitRate={BitRates.USD}></Converter>}
					{component === 'EUR' && <Converter BitRate={BitRates.EUR}></Converter>}
					{component === 'GBP' && <Converter BitRate={BitRates.GBP}></Converter>}
				</div>

				<div className="fixed-bottom">
					<CurrentTime
						localTime={localTime}
						setLocalTime={setLocalTime}
						dataTime={dataTime}
						setDataTime={setDataTime}
						fetchAPI={fetchAPIData}
						fetchTime={fetchTime}
						setFetchTime={setFetchTime}
					></CurrentTime>
				</div>
			</div>
		</div>
	);
}

export default App;
