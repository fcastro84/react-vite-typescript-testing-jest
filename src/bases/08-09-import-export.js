

//import and export, function of Arrays 

import  heroes  from '../data/heroes';

export const getHeroesById = ( id ) => {
    return heroes.find( value => value.id === id);
}

export const getHeroesByOwner = ( owner ) => heroes.filter( value => value.owner === owner);

