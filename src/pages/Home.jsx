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
			const response = await fetch("https://swapi.info/api/planets")
			if(response.ok) {
				const data = await response.json()
				dispatch({type: "set_planets", payload: data})
				return true 
			}
			dispatch({type: "set_planets", payload: false})
		} catch (error) {
			console.log(error)
			dispatch({type: "set_planets", payload: false})
		}
		
	};

	useEffect(() => {
		getAllPlanet()
	}, [])

	return (
		<div className="container">
			<h1 className="text-danger ps-3 mb-5 mt-5">Characters</h1>
			<div className="my-carousel">
				<div className = "d-flex align-content-center">
				{store.characters == null ? <h1>Loading Characters...</h1> : 
					store.characters == false ? <h1 className="text-danger">Error Loading Characters</h1> :
						store.characters && store.characters.length > 0 && store.characters.map(character => <PeopleCard key={character.name} character={character}/>)} 
				</div>
			</div>
			<h1 className="text-danger ps-3 mb-5 mt-5">Planets</h1>
			<div className="my-carousel">
				<div className = "d-flex align-content-center">
				{store.planets == null ? <h1>Loading Planets...</h1> : 
					store.planets == false ? <h1 className="text-danger">Error Loading Planets</h1> :
						store.planets && store.planets.length > 0 && store.planets.map(planet => <PlanetCard key={planet.name} planet={planet}/>)} 
				</div>
			</div>			
		</div>
	);
};