
export const PeopleCard = ({character}) => {

    return (
            
                <div className="container">
                    <div className="my-carousel">
                        <div className="my-card">
                            <img src="..." class="card-img-top" alt="starwars img" />
                            <div class="card-body">
                                <h5 class="card-title">{character.name}</h5>
                                <p className="card-text">Gender: {character.gender} </p>
                                <p className="card-text">Hair Color: {character.hair_color} </p>
                                <p className="card-text">Eye Color: {character.eye_color} </p>
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