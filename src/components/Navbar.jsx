import { Link } from "react-router-dom";
// import { PeopleCard } from "./PeopleCard";

export const Navbar = () => {

	// const { favouritePeople, setFavouritePeople } = useState([])

	// const favouriteList = () => {

	// }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img width={70} src="src/assets/img/image.png" alt="logoStarWars" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown" onClick={(e) => e.stopPropagation()}>
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites (0)
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};