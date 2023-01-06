import {Select} from "antd";
import {type FC, useState} from "react";
import {Link} from "react-router-dom";

import "antd/dist/reset.css";

type Option = number;

const options: Option[] = [10, 20, 30, 40];

interface OptionObject {
	value: Option;
	label: string;
}

const optionObjects: OptionObject[] = options.map((option) => {
	return {
		value: option,
		label: String(option),
	};
});

const AntDesignPage: FC = () => {
	const [selectedValue, setSelectedValue] = useState(options[0]);

	return (
		<>
			<h1>Ant Design page</h1>

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
					onChange={(nextSelectedOption) => {
						setSelectedValue(nextSelectedOption);
					}}
					options={optionObjects}
					data-testid="selector-container"
				/>
			</main>
		</>
	);
};

export default AntDesignPage;
