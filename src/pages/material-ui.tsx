import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {type FC, useState} from "react";
import {Link} from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type Option = number;

const options: Option[] = [10, 20, 30, 40];

const MaterialUIPage: FC = () => {
	const [selectedValue, setSelectedValue] = useState(options[0]);

	return (
		<>
			<h1>Material UI page</h1>

			<main>
				<Link to="/">Home page</Link>

				<br />

				{selectedValue === 20 ? "Equal to 20" : "Unknown number"}

				<br />

				<Select
					value={selectedValue}
					style={{
						width: 120,
					}}
					onChange={(event) => {
						const {value: nextSelectedValue} = event.target;

						if (typeof nextSelectedValue === "number") {
							setSelectedValue(nextSelectedValue);
						} else {
							setSelectedValue(Number.parseInt(nextSelectedValue, 10));
						}
					}}
				>
					{options.map((option) => {
						return (
							<MenuItem
								key={option}
								value={option}
							>
								{String(option)}
							</MenuItem>
						);
					})}
				</Select>
			</main>
		</>
	);
};

export default MaterialUIPage;
