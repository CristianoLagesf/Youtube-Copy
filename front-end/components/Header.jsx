import { useEffect, useState } from 'react'
import { api } from '../src/lib/axios'
import styles from './header.module.css'

export default function Header() {
  const [user, setuser] = useState({})

  useEffect(() => {
    getServeSideProps()
  }, [])

  const getServeSideProps = () => {
    api.get("users").then(res => {
      return setuser(res.data.user)
    })
  }

  return (
    <div>
      <div className={styles.userInfo}>
        <img className={styles.img} src={`https://github.com/${user.gitHub}.png`} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
        </div>
      </div>
    </div>
  )


}