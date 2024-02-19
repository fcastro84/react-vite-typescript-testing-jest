

// Promise in JS 

import { getHeroesById } from "./08-09-import-export";




export const getUserAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesById(id)
        if( heroe ){
            resolve( heroe )
        } else {
            reject('Not exits heroe fot the Id '+ id);
        }
    }, 2000);
});
} 

