import { useEffect, useState } from 'react'
import User from './components/User'
import './App.css'

function App() {

  const [users, setUsers] = useState(() => [])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json.users)
        setUsers(json.users)
      })
  }, [])

  return (
    <>
      <h1>Usuários escritos</h1>
      <hr />
      {users.map(user => {
        return <User key={user.id} usuario={user} />
      })}
    </>
  )
}

export default App
