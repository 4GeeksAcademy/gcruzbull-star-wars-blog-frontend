export const initialStore=()=>{
  return{
    characters: null, 
    planets: null,
    favorites: [],
  }
}     

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_characters':

      const characters = action.payload

      return {
        ...store,
        characters: characters      // mantengo todo pero cambio character en blanco (lo de arriba)(el de azul son los datos que vienen)
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
