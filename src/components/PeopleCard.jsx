import { Link } from "react-router-dom";

export const PeopleCard = ({character}) => {

    return (
            
                <div className="container">
                    {/* <div className="my-carousel"> */}
                        <div className="my-card rounded">
                            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${character.url.split("/")[5]}.jpg`} className="card-img-top" alt="starwars img" />
                            <div className="card-body">
                                <h5 className="card-title m-3">{character.name}</h5>
                                <div className="m-3">
                                    <p className="card-text mb-1">Gender: {character.gender} </p>
                                    <p className="card-text mb-1">Hair Color: {character.hair_color} </p>
                                    <p className="card-text">Eye Color: {character.eye_color} </p>
                                </div>
                                
                                <div className="m-3 d-flex justify-content-between align-content-center">
                                    <Link to={`/detail/character/${character.url.split("/")[5]}`} type="button" className="btn btn-outline-primary">Learn More!</Link>
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