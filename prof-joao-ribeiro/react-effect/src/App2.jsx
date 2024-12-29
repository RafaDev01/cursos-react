import { useEffect, useState } from 'react'

function App() {

    const [valor, setValor] = useState(() => 100)
    const [valor2, setValor2] = useState(() => 1000)

    function alterar() {
        console.log('teste')
        setValor(va => va + 10)
    }

    function alterar2() {
        console.log('teste2')
        setValor2(va => va + 10)
    }

    useEffect(() => {
        console.log('alterado')
    }, [valor])

    return (
        <>
            <h1>React Hooks - useEffect</h1>
            <h3>valor: {valor}</h3>
            <button onClick={alterar}>Alterar</button>
            <h3>valor2: {valor2}</h3>
            <button onClick={alterar2}>Alterar</button>
        </>
    )
}

export default App
