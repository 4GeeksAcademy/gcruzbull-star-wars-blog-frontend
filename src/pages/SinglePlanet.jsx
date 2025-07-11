import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const SinglePlanet = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [planet, setPlanet] = useState(null)

    useEffect(() => {
        if (store.planets) {
            if (store.planets.length > 0 && id) {
                const result = store.planets.find(elem => elem.url.split("/")[5] == id)
                if (result) {
                    setPlanet(result)
                } else {
                    setPlanet(false)
                }
            }
        } else {
            async function getData() {
                const url = `https://swapi.info/api/planets/${id}`;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }

                    const json = await response.json();
                    console.log(json);
                    setCharacter(json)
                } catch (error) {
                    console.error(error.message);
                }
            }
            getData()
        }
    }, [id, store.planets])
    return (
        <div className="container">
            <div className="row card d-flex bg-black">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="row mt-3">
                        <div className="col-12 col-lg-6 m-0">
                            <img width={"100%"} onError={(e) => e.target.src = "https://framerusercontent.com/images/MC2GYJZqZQcgnal1ArZxlXF2E.jpeg"} src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planet && planet.url.split("/")[5]}.jpg`} alt="starwars img" />
                        </div>
                        <div className="col-12 col-lg-6 m-0">
                            <div className="bg-secondary p-3 h-100">
                                <div className="text-white">
                                    <h1 className="card-title text-white">
                                        {planet && planet.name}
                                    </h1>
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-4 mt-0 text-white d-flex p-2 g-3 justify-content-between">
                    <div className="col-md-3 pe-2">
                        <h5>
                            Climate
                        </h5>
                        <p className="text-danger">
                            {planet === null ? null : planet.climate}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Diameter
                        </h5>
                        <p className="text-danger">
                            {planet === null ? null : planet.diameter}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Rotation Period
                        </h5>
                        <p className="text-danger">
                            {planet === null ? null : planet.rotation_period}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Orbital Period
                        </h5>
                        <p className="text-danger">
                            {planet === null ? null : planet.orbital_period}
                        </p>
                    </div>
                </div>
            </div>       
        </div>
    )
};