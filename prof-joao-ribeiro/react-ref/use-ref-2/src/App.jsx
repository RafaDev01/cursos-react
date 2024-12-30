import { useRef } from 'react'
import { useState } from 'react'

function App() {

  const [texto, setTexto] = useState(() => '')
  const inputRef = useRef()
  const input2Ref = useRef()

  function focus1() {
    inputRef.current.focus()
  }

  function alterar_texto_2() {
    input2Ref.current.value = "Rafael Nascimento"
    input2Ref.current.focus()
  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input ref={inputRef} type="text" value={texto} onChange={e => setTexto(e.target.value)} />
      <br />
      <input ref={input2Ref} type="text" />
      <hr />
      <button onClick={focus1}>Focus 1</button>
      <button onClick={alterar_texto_2}>alterar texto do input 2</button>
    </>
  )
}

export default App
