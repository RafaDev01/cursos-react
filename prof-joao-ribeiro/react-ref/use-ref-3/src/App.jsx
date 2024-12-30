import { useState, useEffect, useRef } from 'react'

function App() {

  const [texto, setTexto] = useState('')
  const anterior = useRef('')

  useEffect(() => {
    anterior.current = texto
  }, [texto])

  function executar() {

  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input type="text" onChange={e => setTexto(e.target.value)} />
      <hr />
      <button onClick={executar}>Executar</button>
      <p>Texto: {texto} (anteriomente) {anterior.current}</p>
    </>
  )
}

export default App
