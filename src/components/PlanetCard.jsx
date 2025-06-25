import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetCard = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            <div className="my-carousel">
                <div className="my-card">
                    <img src="..." class="card-img-top" alt="starwars img"/>
                    <div class="card-body">
                        <h5 class="card-title">Planet Name: {planet.name} </h5>
                        <p className="card-text">Population:</p>
                        <p className="card-text">Terrain:</p>
                        <div>
                            <a type="button" className="btn btn-outline-primary">Learn More!</a>
                            <a type="button" className="btn btn-outline-warning">
                                <i class="fa-regular fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};