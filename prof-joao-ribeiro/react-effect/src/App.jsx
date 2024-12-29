import { useEffect, useState } from 'react'

function App() {

  const clientes = ["João", "Ana", "Carlos"]
  const produtos = ["Pão", "Manteiga", "Leite"]
  const vendas = ["1 x Pão (João)", "2 x Manteiga (Ana)", "3 x Leite (Carlos)"]

  const [info, setInfo] = useState(() => "Clientes")
  const [valor, setValor] = useState(() => 0)

  useEffect(() => {
    console.clear()
    switch (info) {
      case 'clientes':
        console.table(clientes)
        break;
      case 'produtos':
        console.table(produtos)
        break;
      case 'vendas':
        console.table(vendas)
        break;
    }
  }, [info])

  useEffect(() => {
    console.log('TESTE')
  })

  return (
    <>
      <h1>React Hooks - useEffect</h1>
      <hr />
      <button onClick={() => setInfo('clientes')}>Cliente</button>
      <button onClick={() => setInfo('produtos')}>Produtos</button>
      <button onClick={() => setInfo('vendas')}>Vendas</button>
      <h3>info: {info}</h3>
      <hr />
      <h3>valor: {valor}</h3>
      <button onClick={() => {
        setValor(va => va + 10)
      }}>Aumentar</button>
    </>
  )
}

export default App
