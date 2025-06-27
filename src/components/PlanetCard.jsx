import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetCard = ({planet}) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            
                <div className="my-card h-100">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planet.url.split("/")[5]}.jpg`} className="card-img-top" alt="starwars img"/>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="description">
                            <h5 className="card-title m-3">{planet.name} </h5>
                            <div className="m-3">
                                <p className="card-text mb-1">Population: {planet.population}</p>
                                <p className="card-text">Terrain: {planet.terrain}</p>
                            </div>
                        </div>
                        
                        
                        <div className="m-3 mt-auto d-flex justify-content-between align-items-end">
                            <Link to={`/detail/planet/${planet.url.split("/")[5]}`} type="button" className="btn btn-outline-primary">Learn More!</Link>
                            <a onClick={() => dispatch({type: "set_favorites", payload: [...store.favorites, planet.name]})} type="button" className="btn btn-outline-warning">
                                {
                                    store.favorites && store.favorites.includes(planet.name) ?
                                    <i className="fa-solid fa-heart"></i> :
                                    <i className="fa-regular fa-heart"></i>
                                }
                            </a>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};