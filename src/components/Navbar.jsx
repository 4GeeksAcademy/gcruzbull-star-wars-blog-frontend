import { Link } from "react-router-dom";
import logo from "../assets/img/image.png"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img width={70} src={logo} alt="logoStarWars" />
				</Link>
				<div className="ml-auto">
						<div className="dropdown" onClick={(e) => e.stopPropagation()}>
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites ({store.favorites.length})
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								
			
									
									{store.favorites == null ? <span>Loading Favorites...</span> : 
										store.favorites == false ? <span className="text-danger">Error Loading Favorites</span> :
											store.favorites && store.favorites.length > 0 && store.favorites.map(favorite => <li className="dropdown-item">{favorite}</li>)}
								
								
								
							</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};