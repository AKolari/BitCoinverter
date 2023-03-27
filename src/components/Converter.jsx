import { useState } from 'react';
import convertValue from '../utils/convertValue';

function Converter({ BitRate }) {
	const [content, setContent] = useState(NaN);
	const contentUpdateHandler = (e) => {
		setContent(e.target.value);
	};

	return (
		<div className="container">
			<h1 data-testid="heading">Currency Converter</h1>
			<div className="row justify-content-center">
				<div className="col input-group mb-3 w-50 justify-content-center">
					<span className="input-group-text border border-2 border-dark rounded-start-3">
						{BitRate.code}
					</span>
					<input
						placeholder={BitRate.description}
						onChange={contentUpdateHandler}
						type="number"
						className="form-control border border-2 border-dark rounded-end-3"
						aria-label="Amount"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{!!content && (
						<h6>
							{' '}
							This is equivalent to {convertValue(
								content,
								BitRate.rate_float
							)} Bitcoin{' '}
						</h6>
					)}
				</div>
			</div>
		</div>
	);
}

export default Converter;
