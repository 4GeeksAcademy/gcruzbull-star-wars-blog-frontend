export const initialStore=()=>{
  return{
    characters: null, 
    planets: null,
    favorites: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_characters':

      const characters = action.payload

      return {
        ...store,
        characters: characters
      };
    case 'set_planets':

      const planets = action.payload

      return {
        ...store,
        planets: planets
      };
    case 'set_favorites':

      const favorites = action.payload

      return {
        ...store,
        favorites: favorites
      };
    default:
      throw Error('Unknown action.');
  }    
}
