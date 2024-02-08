import { getSaludo } from "../../src/bases/02-template-strings";



describe('Test in file template-string', () => {

    test('Test of function getSaludo', () => { 
        
        const name = 'Fidel'
        const message = getSaludo(name)

        expect( message ).toBe( `Hello ${name}` )
    })
    
});