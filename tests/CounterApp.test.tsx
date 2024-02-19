 import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../src/CounterApp';
import React from 'react';


describe(' Test in component <CounterApp/>', () => {

    const value = 10

    test('This has make to match with the snapshot ', () => {

      const { container } = render(<CounterApp value={value} />)
      expect( container ).toMatchSnapshot()

    })

    test('this should show 100 as the initial value', () => {

        render(<CounterApp value={100} />)
        expect( screen.getByText(100) ).toBeTruthy()
        
      })

      test('this should add 1 with the button +1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy()
        
      })

      test('this should substract 1 with the button -1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('-1') )
        // screen.debug()
        expect( screen.getByText('9') ).toBeTruthy()
        
      })

      test('the reset button should work', () => {

        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
         
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) )
        // fireEvent.click( screen.getByText('Reset') )
        // screen.debug()
        expect( screen.getByText(value) ).toBeTruthy()
        
      })
    


})