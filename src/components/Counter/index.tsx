import {useState} from "react";

export function Counter(){

    const [counter, setCounter] = useState(0)

    function handleClick(){
        setCounter(counter + 1)
    }

    return (
        <button onClick={handleClick}>Contador : {counter}</button>
    )
}