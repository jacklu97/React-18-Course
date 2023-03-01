import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    user = {
      ...user,
      id: Math.random().toString()
    }
    setUsers(prev => {
      return [...prev, user]
    })
  }

  return (
    <>
      <AddUser onNewUser={addUserHandler} />
      <UsersList users={users} />
    </>
  )
}

export default App
