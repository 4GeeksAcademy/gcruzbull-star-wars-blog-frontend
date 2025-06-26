
export const PlanetCard = ({planet}) => {

    return (
        <div className="container">
            {/* <div className="my-carousel"> */}
                <div className="my-card">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planet.url.split("/")[5]}.jpg`} class="card-img-top" alt="starwars img"/>
                    <div className="card-body">
                        <h5 className="card-title m-3">{planet.name} </h5>
                        <div className="m-3">
                            <p className="card-text mb-1">Population: {planet.population}</p>
                            <p className="card-text">Terrain: {planet.terrain}</p>
                        </div>
                        
                        <div className="m-3 d-flex justify-content-between align-content-center">
                            <a type="button" className="btn btn-outline-primary">Learn More!</a>
                            <a type="button" className="btn btn-outline-warning">
                                <i className="fa-regular fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};