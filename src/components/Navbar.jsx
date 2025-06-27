import { Link } from "react-router-dom";
import logo from "../assets/img/image.png"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const deleteFavorite = (name) => {
		const favoriteInList = store.favorites.some(favorite => favorite == name)
		if (favoriteInList) {
			dispatch({ type: "set_favorites", payload: store.favorites.filter(favorite => favorite != name) })
		} else {
			dispatch({ type: "set_favorites", payload: [...store.favorites] })
		}
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img width={70} src={logo} alt="logoStarWars" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown" onClick={(e) => e.stopPropagation()}>
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="bg-secondary text-white pe-1 ps-1 m-0 rounded-5">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites == null ? <span>Loading Favorites...</span> :
								store.favorites == false ? <span className="text-danger m-2 p-2">Empty</span> :
									store.favorites && store.favorites.length > 0 && store.favorites.map(favorite => <li className="d-flex justify-content-between align-items-center dropdown-item"><span>{favorite}</span> <a onClick={() => deleteFavorite(favorite)}><i className="fa-solid fa-trash"></i></a></li>)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};