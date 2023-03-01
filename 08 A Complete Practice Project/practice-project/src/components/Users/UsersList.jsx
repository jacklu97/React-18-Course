import Card from '../UI/Card'
import User from './User'
import style from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <Card className={style.users}>
      <ul>
        {
          users.map((user) => (
            <User key={user.id} username={user.username} age={user.age} />
          ))
        }
      </ul>
    </Card>
  )
}

export default UsersList
