import { useState } from "react"

interface CounterProps {
    value: number
}

const CounterApp = ({value}: CounterProps) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleSubs = () => {
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

  return (
    <div className="center">
        <h1>CounterApp</h1>
        <span>{ counter }</span>
        <div className="button">
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubs}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
        </div>
      
    </div>
  )
}

export default CounterApp
