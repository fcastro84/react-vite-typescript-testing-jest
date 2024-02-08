

// Promise in JS 
import { getHeroesById } from './bases/08-09-import-export';

// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('Ok, correct');
//     }, 2000);
// });

const getUserAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesById( id );
        if( heroe ){
            resolve( heroe );
        } else {
            reject(' Not exits heroe fot the Id');
        }
    }, 2000);
});
} 

getUserAsync(4).then(console.log)
       .catch(console.error)
