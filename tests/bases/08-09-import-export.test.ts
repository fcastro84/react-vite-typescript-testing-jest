import { getHeroesById, getHeroesByOwner } from "../../src/bases/08-09-import-export";
import heroes from "../../src/data/heroes";

describe('test to the file 08-09-import-export', () => {
    
    test('Test with the function getHeroesById return a hero by ID', () => {
      
       const id = 1
       const hero = getHeroesById(id)
       

       expect( hero ).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
        })
    })

    test('Test with the function getHeroesById cannot find hero by ID', () => {
      
        const id = 100
        const hero = getHeroesById(id)
        
        expect( hero ).toBe( undefined )
    })

    //Homework
    //Debe de retornar un arreglo con los heroes de DC
    //Length === 3
    //toEqual al arreglo 

    test('Test with the function getHeroesByOwner return an array of heros by owner DC', () => {
      
        const owner = 'DC'
        const heros = getHeroesByOwner( owner )

        expect( heros.length === 3).toBeTruthy()
        expect( heros.length).toBe(3)

        const dataHeroDC = [ {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    },
                    {
                        id: 3,
                        name: 'Superman',
                        owner: 'DC'
                    },
                    {
                        id: 4,
                        name: 'Flash',
                        owner: 'DC'
                    },
            ]

            expect( heros).toEqual(dataHeroDC)
            expect( heros ).toEqual( heroes.filter(hero => hero.owner === owner))
        
       
    })

    //Debe de retornar un arreglo con los heroes de Marvel
    //Length === 2
    test('Test with the function getHeroesByOwner return an array of heros by owner Marvel', () => {
      
        const owner = 'Marvel'
        const heros = getHeroesByOwner( owner )

        expect( heros.length).toBe(2)
        expect( heros.length === 2).toBeTruthy()

        const dataHeroDC = [ {
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                },
                {
                    id: 5,
                    name: 'Wolverine',
                    owner: 'Marvel'
                }
            ]

            expect( heros).toEqual(dataHeroDC)
        
       
    })
    
    
});