

//Desestructuración de Objects in JS 
//Asignación Desestructurante in JS 

export const usContext  = ( {name, key, age, range = 'Capitan'} ) => {
    console.log(name, range);
    return  {
        namekey: key,
        years: age,
        latlgn: {
            lat: 34.5566,
            lgn: -56.66666
        }
    }
}

