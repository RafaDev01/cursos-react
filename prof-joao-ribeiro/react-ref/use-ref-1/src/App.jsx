import { useState, useEffect, useRef } from 'react'

function App() {

  const [texto, setTexto] = useState(() => '')
  const total = useRef(1)

  useEffect(() => {
    total.current++
  })

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
      <hr />
      <p>O texto é: <strong>{texto}</strong></p>
      <hr />
      <p>Total: {total.current}</p>
    </>
  )
}

export default App
