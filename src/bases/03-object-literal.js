

const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    direction: {
        city: 'New york',
        zip: 354545454,
        lat: 243.46,
        lng: 34.667777
    }
};

//console.table( person );
console.log( person );

const person2 = { ...person };
person2.name = 'Storm';

console.log(person2)
console.log(person)