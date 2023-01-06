import {PickerInput} from "@epam/loveship";
import {useArrayDataSource} from "@epam/uui";
import {type FC, useState} from "react";
import {Link} from "react-router-dom";

import "@epam/uui-components/styles.css";
import "@epam/loveship/styles.css";

type Option = number;

const options: Option[] = [10, 20, 30, 40];

const UUIPage: FC = () => {
	const [selectedValue, setSelectedValue] = useState(options[0]);

	const dataSource = useArrayDataSource(
		{
			items: options,
			getId: (option) => {
				return option;
			},
		},
		[],
	);

	return (
		<>
			<h1>UUI page</h1>

			<main>
				<Link to="/">Home page</Link>

				<br />

				{selectedValue === 20 ? "Equal to 20" : "Unknown number"}

				<br />

				<PickerInput
					dataSource={dataSource}
					value={selectedValue}
					onValueChange={(nextSelectedOption: Option) => {
						setSelectedValue(nextSelectedOption);
					}}
					selectionMode="single"
					valueType="entity"
					searchPosition="none"
					minBodyWidth={120}
					getName={(value) => {
						return String(value);
					}}
					size="30"
					disableClear={true}
					rawProps={{
						input: {
							"data-testid": "selector-container",
							style: {
								width: 120,
							},
						},
					}}
				/>
			</main>
		</>
	);
};

export default UUIPage;
