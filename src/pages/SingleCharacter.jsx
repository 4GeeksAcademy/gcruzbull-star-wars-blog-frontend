import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const SingleCharacter = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        if (store.characters) {
            if (store.characters.length > 0 && id) {
                const result = store.characters.find(item => item.url.split("/")[5] == id)
                if (result) {
                    console.log("result: ", result)
                    setCharacter(result)
                } else {
                    setCharacter(false)

                }
            }
        } else {
            async function getData() {
                const url = `https://swapi.info/api/people/${id}`;
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
    }, [id, store.characters])

    return (
        <div className="container">
            <div className="row card m-3 d-flex bg-black">
                <div className="col-md-12 m-3 d-flex justify-content-center">
                    <div className="col-sm-6 me-0">
                        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${character && character.url.split("/")[5]}.jpg`} alt="starwars img" />
                    </div>
                    <div className="col-sm-6 justify-content-start ms-0 me-4 bg-secondary">
                        <div className="m-5 text-white">
                            <h1 className="card-title text-white">
                                {character && character.name}
                            </h1>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-4 mt-0 text-white d-flex p-2 g-3 justify-content-between">
                    <div className="col-md-3 pe-2">
                        <h5>
                            Birth Day
                        </h5>
                        <p className="text-danger">
                            {character === null ? null : character.birth_year}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Height
                        </h5>
                        <p className="text-danger">
                            {character === null ? null : character.height}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Mass
                        </h5>
                        <p className="text-danger">
                            {character === null ? null : character.mass}
                        </p>
                    </div>
                    <div className="col-md-3 pe-2">
                        <h5>
                            Skin Color
                        </h5>
                        <p className="text-danger">
                            {character === null ? null : character.skin_color}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}