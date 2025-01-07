import { useState, useRef } from 'react'
import './App.css'

function App() {

  //State
  const [listaTarefas, setListaTarefas] = useState(() => [])
  const [tarefa, setTarefa] = useState(() => "")

  //REF
  const idTarefa = useRef(0)
  const inputRef = useRef()

  //Metodos
  const adicionarTarefa = () => {
    setListaTarefas(old => { return [...old, { id: idTarefa.current, texto: tarefa }] })
    idTarefa.current++
    setTarefa("")
    inputRef.current.focus()
  }

  const limparTarefas = () => {
    setListaTarefas((old) => []);
    idTarefa.current = 0
  };

  const removerTarefa = (id) => {
    const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
    setListaTarefas(tmp)
  }

  return (
    <>
      <h3>Gestor de tarefas</h3>
      <hr />
      <input ref={inputRef} type="text" value={tarefa} onChange={(event) => setTarefa(event.target.value)} />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefas}>Limpar tudo</button>
      </div>
      <hr />
      <p>Tarefas: {tarefa}</p>
      {listaTarefas.map((t) => {
        return <p key={t.id}>{t.texto} - <span onClick={() => { removerTarefa(t.id) }}>[x]</span></p>
      })}
    </>
  )
}

export default App
