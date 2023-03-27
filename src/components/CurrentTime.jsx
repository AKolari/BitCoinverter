function CurrentTime({
	localTime,
	setLocalTime,
	dataTime,
	fetchAPI,
	fetchTime,
	setFetchTime,
}) {
	function clickHandler() {
		if (localStorage.getItem('myTime')) {
			if (Date.now() / 1000 - localStorage.getItem('myTime') > 300) {
				fetchAPI();
				setFetchTime(Date.now() / 1000);
				setLocalTime(Date());
				localStorage.setItem('myTime', Date.now() / 1000);
				localStorage.setItem('localTime', Date());
			} else {
				alert(
					`You must wait 5 minutes before refreshing. You have ${(
						parseFloat(localStorage.getItem('myTime')) +
						300 -
						Date.now() / 1000
					).toFixed(0)} seconds remaining`
				);
			}
		} else {
			if (Date.now() / 1000 - fetchTime > 300) {
				fetchAPI();
				setFetchTime(Date.now() / 1000);
				setLocalTime(Date());
				localStorage.setItem('myTime', Date.now() / 1000);
				localStorage.setItem('localTime', Date());
			} else {
				alert(
					`You must wait 5 minutes before refreshing. You have ${(
						fetchTime +
						300 -
						Date.now() / 1000
					).toFixed(0)} seconds remaining`
				);
			}
		}
	}

	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<button onClick={clickHandler}>Refresh</button>
			<h4>Time data retrieved: </h4>
			{!localTime && (
				<h6>
					<b>{Date()}</b>
				</h6>
			)}
			{!!localTime && (
				<h6>
					<b>{localTime}</b>
				</h6>
			)}
			<h6>
				<b>{JSON.stringify(dataTime)}</b>
			</h6>
		</div>
	);
}

export default CurrentTime;
