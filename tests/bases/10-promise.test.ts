import { getUserAsync } from "../../src/bases/10-promise";


describe('Test of file 10-promise', () => {
    
    test('getUserAsync has return a promise ', ( done ) => {
      
        const id = 1
        getUserAsync(id)
                .then( hero => {

                    expect( hero ).toEqual({
                                id: 1,
                                name: 'Batman',
                                owner: 'DC'
                            })
                    
                    done()
                })
    })

    test('getUserAsync has return an error is no exits the id ', ( done ) => {
      
        const id = 100
        getUserAsync(id)
                .then( hero => {
                    expect( hero ).toBeFalsy()
                    done()
                })
                .catch( error => {
                    expect( error ).toBe( `Not exits heroe fot the Id ${id}` )
                    done()
                })
    })
    
});