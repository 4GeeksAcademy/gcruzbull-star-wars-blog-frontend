import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const PlanetCard = ({ planet }) => {

    const { store, dispatch } = useGlobalReducer()

    const addFavorite = (name) => {
        const favoriteExist = store.favorites.some(favorite => favorite == name)
        if (favoriteExist) {
            dispatch({ type: "set_favorites", payload: store.favorites.filter(favorite => favorite != name) })
        } else {
            dispatch({ type: "set_favorites", payload: [...store.favorites, name] })
        }
    }

    return (
        <div className="my-card mb-4  rounded">
            <div className="card-image h-50">
                <img height="100%" onError={(e) => e.target.src = "https://framerusercontent.com/images/MC2GYJZqZQcgnal1ArZxlXF2E.jpeg"} src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planet.url.split("/")[5]}.jpg`} className="rounded-top card-img-top" alt="starwars img" />
            </div>
            <div className="h-50 d-flex flex-column justify-content-between">
                <div className="description mt-2">
                    <h5 className="card-title m-3">{planet.name} </h5>
                    <div className="m-3">
                        <p className="card-text mb-1">Population: {planet.population}</p>
                        <p className="card-text">Terrain: {planet.terrain}</p>
                    </div>
                </div>

                <div className="m-3 d-flex justify-content-between">
                    <Link to={`/detail/planet/${planet.url.split("/")[5]}`} type="button" className="align-baseline btn btn-outline-primary">Learn More!</Link>
                    <a onClick={() => addFavorite(planet.name)} type="button" className="align-baseline btn btn-outline-warning">
                        {
                            store.favorites && store.favorites.includes(planet.name) ?
                                <i className="fa-solid fa-heart"></i> :
                                <i className="fa-regular fa-heart"></i>
                        }
                    </a>
                </div>
            </div>
        </div>
    );
};