import { getUser, getUserActive } from "../../src/bases/05-functions"

describe('Test to the file 05-functions', () => {
  
    test('Test of function getUser ', () => {
      
        const testUser = {
            uid: 'ABCDE',
            username: 'El_papi1502'
        }

        const user = getUser()

        expect( user ).toEqual( testUser )
    })

    test('Test of function getUserActive ', () => {
      
        const name = 'Fidel'
        
        const testUser = {
            uuid: 'ABCD12345',
            username: 'Fidel'
        }

        const user = getUserActive( name )

        expect( user ).toEqual( testUser )
    })
    
})
