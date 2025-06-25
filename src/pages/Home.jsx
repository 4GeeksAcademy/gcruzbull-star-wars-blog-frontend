import { useEffect } from "react";
import { PeopleCard } from "../components/PeopleCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const getAllPeople = async() => {
		try {
			const response = await fetch("https://swapi.info/api/people")
			if(response.ok) {
				const data = await response.json()
				dispatch({type: "set_characters", payload: data})
				return true
			}
			dispatch({type: "set_characters", payload: false})
		} catch (error) {
			console.log(error)
			dispatch({type: "set_characters", payload: false})
		}
		
	};

	useEffect(() => {
		getAllPeople()
	}, [])

	const getAllPlanet = async() => {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets/")
			if(response.ok) {
				const data = await response.json
				// setPlanet(data.results)
			}
		} catch (error) {
			console.log(error)
		}
		
	};

	useEffect(() => {
		getAllPlanet()
	}, [])

	return (

		<div className="container">
			<h1 className="text-danger m-5">Characters</h1>
			{store.characters == null ? <h1>Loading Characters...</h1> : 
				store.characters == false ? <h1 className="text-danger">Error Loading Characters</h1> :
					store.characters && store.characters.length > 0 && store.characters.map(character => <PeopleCard character={character}/>)} 
			
			{/* <PlanetCard/>			 */}
		</div>
	);
};