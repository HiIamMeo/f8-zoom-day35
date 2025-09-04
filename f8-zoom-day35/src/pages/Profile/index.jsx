import { useState, useEffect } from 'react'
import styles from './Profile.module.scss'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(r => r.json())
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, []) // gọi 1 lần

  if(loading) return <div className={styles.card}><p>Đang tải…</p></div>
  if(!user) return <div className={styles.card}><p>Lỗi tải dữ liệu.</p></div>

  const addr = user.address || {}
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>3. Profile Card</h1>
      <div className={styles.row} style={{gap:16}}>
        <img 
          className={styles.avatar} 
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`} 
          alt={user.name}
        />
        <div>
          <h3 className={styles.userName}>{user.name}</h3>
          <div className={styles.small}>@{user.username}</div>
        </div>
      </div>
      <ul className={styles.infoList}>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
        <li>Website: {user.website}</li>
        <li>Address: {addr.street}, {addr.city}</li>
      </ul>
    </div>
  )
}