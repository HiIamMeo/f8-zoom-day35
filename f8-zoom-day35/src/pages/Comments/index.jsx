import { useState, useEffect } from 'react'
import styles from './Comments.module.scss'

export default function Comments() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({name: '', email: '', body: ''})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(r => r.json())
      .then(setItems)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value})
  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, body} = form
    if(!name.trim() || !email.trim() || !body.trim()) return
    setItems(prev => [
      { id: Date.now(), name: name.trim(), email: email.trim(), body: body.trim(), _timeLabel: "vừa xong" },
      ...prev
    ])
    setForm({name: '', email: '', body: ''})
  }

  const timeFake = (idx) => (idx % 5 === 0 ? "1 ngày trước" : idx % 3 === 0 ? "2 giờ trước" : "30 phút trước")

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>5. Comment System</h1>

      <form onSubmit={onSubmit} className={styles.form}>
        <input name="name" placeholder="Tên" value={form.name} onChange={onChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
        <textarea 
          name="body" 
          placeholder="Nội dung" 
          rows="4" 
          value={form.body} 
          onChange={onChange}
          className={styles.textarea}
        />
        <button type="submit">Gửi</button>
      </form>

      {loading ? <p>Đang tải…</p> : (
        <div className={styles.commentsGrid}>
          {items.map((c, idx) => (
            <div key={c.id} className={styles.commentCard}>
              <div className={styles.row}>
                <img 
                  className={styles.avatar} 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random`} 
                  alt={c.name}
                />
                <div>
                  <strong>{c.name}</strong>
                  <div className={styles.small}>{c.email} | {c._timeLabel || timeFake(idx)}</div>
                </div>
              </div>
              <p className={styles.commentBody}>{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}