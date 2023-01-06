import {type FC, useState} from "react";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

type Option = number;

const options: Option[] = [10, 20, 30, 40];

const BootstrapPage: FC = () => {
	const [selectedValue, setSelectedValue] = useState(options[0]);

	return (
		<>
			<h1>Bootstrap page</h1>

			<main>
				<Link to="/">Home page</Link>

				<br />

				{selectedValue === 20 ? "Equal to 20" : "Unknown number"}

				<br />

				<Form.Select
					value={selectedValue}
					onChange={(event) => {
						const {value: nextSelectedValue} = event.target;

						setSelectedValue(Number.parseInt(nextSelectedValue, 10));
					}}
					style={{
						width: 120,
					}}
				>
					{options.map((option) => {
						return (
							<option
								key={option}
								value={option}
							>
								{String(option)}
							</option>
						);
					})}
				</Form.Select>
			</main>
		</>
	);
};

export default BootstrapPage;
