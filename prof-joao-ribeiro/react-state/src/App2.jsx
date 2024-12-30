import { useState } from 'react'


function App() {

  function definirvalor() {
    console.log('aqui')
    return 1000
  }

  const [valor, setValor] = useState(() => {
    console.log('aqui V2')
    return 5000
  })

  function diminuir() {
    setValor(valor_antigo => valor_antigo - 1)
  }

  function aumentar() {
    setValor(valor_antigo => valor_antigo + 1)
  }

  return (
    <>
      <h1>React Hooks - useState</h1>
      <button onClick={diminuir}>Diminuir</button>
      <span>{valor}</span>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}

export default App
