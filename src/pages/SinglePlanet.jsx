import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const SinglePlanet = () => {
    const {store, dispatch} = useGlobalReducer()
    const {id} = useParams()
    const [planet, setPlanet] = useState(null)

    useEffect( () => {
        if (store.planets) {
            if (store.planets.length > 0 && id) {
                const result = store.planets.find(elem => elem.url.split("/")[5] == id)
                if (result) {
                    setPlanet(result)
                } else {
                    setPlanet(false)
                } 
            }
        }
    }, [id, store.planets])
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${planet && planet.url.split("/")[5]}.jpg`} alt="starwars img" />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h1 className="card-title">{planet && planet.name}</h1>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </div>
    )
};