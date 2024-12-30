import { use } from 'react'
import { useState } from 'react'


function App() {

    /* const [nome, setNome] = useState(() => { return "Rafael" })

    function alterar() {
        setNome(a => { return "Joaquin" })
    }  */

    const [player, setPlayer] = useState({
        name: "Rafael",
        score: 0
    })

    const [playerName, setPlayerName] = useState(() => {
        return "João"
    })

    const [playerScore, setPlayerScore] = useState(() => {
        return 0
    })

    /* function alterar() {
        setPlayer(pa => {
            return {
                ...pa,
                score: pa.score + 1,
            }
        })
    } */

    function alterar() {
        setPlayerScore(score_anterior => { return score_anterior + 1 })
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>
            <button onClick={alterar}>Alterar a pontuação</button>

            {/* <h3>Nome: {nome}</h3>
            <button onClick={alterar}>Alterar</button> */}
        </>
    )
}

export default App
