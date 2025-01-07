import { use } from "react"
import { useState, useRef } from "react"

export default function App() {

    const [listaTarefas, setListaTarefas] = useState(() => [])
    const [tarefa, setTarefa] = useState(() => '')

    //REF
    const idTarefa = useRef(0)
    const inputRef = useRef()

    // METODOS
    function adicionarTarefa() {
        setListaTarefas(old => [...old, { id: idTarefa.current, texto: tarefa }])
        idTarefa.current++
        setTarefa(() => '')
        inputRef.current.focus()
        console.log(listaTarefas)
    }

    function limparTarefas() {
        setListaTarefas(old => [])
        idTarefa.current = 0
    }

    function removerTarefa(id) {
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
            <p>Tarefas: </p>
            {listaTarefas.map((tarefa) => {
                return <p key={tarefa.id}>{tarefa.texto} -id:{tarefa.id} <span onClick={() => removerTarefa(tarefa.id)}>[remover]</span></p>
            })}
        </>
    )
}