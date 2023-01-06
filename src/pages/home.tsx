import {type FC} from "react";
import {Link} from "react-router-dom";

const HomePage: FC = () => {
	return (
		<>
			<h1>Home page</h1>

			<main>
				<ul>
					<li>
						<Link to="/ant-design">Ant Design page</Link>
					</li>
					<li>
						<Link to="/bootstrap">Bootstrap page</Link>
					</li>
					<li>
						<Link to="/material-ui">Material UI page</Link>
					</li>
					<li>
						<Link to="/uui">UUI page</Link>
					</li>
				</ul>
			</main>
		</>
	);
};

export default HomePage;
