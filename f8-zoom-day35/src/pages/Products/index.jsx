import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Products.module.scss'

const titleCase = s => s ? s[0].toUpperCase() + s.slice(1) : ""
const truncate = (s, n = 100) => s.length > n ? s.slice(0, n) + "…" : s

function Modal({open, onClose, children}) {
  if(!open) return null
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.row} style={{justifyContent: 'space-between'}}>
          <h3 style={{margin: 0}}>Chi tiết bài viết</h3>
          <button onClick={onClose}>Đóng</button>
        </div>
        <div style={{marginTop: 10}}>{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default function Products() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then(r => r.json())
      .then(setPosts)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <div className={styles.card}><p>Đang tải…</p></div>

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>4. Product List</h1>
      <div className={styles.grid}>
        {posts.slice(0, 12).map(p => (
          <div key={p.id} className={styles.productCard}>
            <div className={styles.badge}>ID: {p.id}</div>
            <h3>{titleCase(p.title)}</h3>
            <p className={styles.small}>{truncate(p.body, 100)}</p>
            <button onClick={() => setSelected(p)}>Xem chi tiết</button>
          </div>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <article>
            <h4 style={{marginTop: 0}}>{titleCase(selected.title)}</h4>
            <p style={{whiteSpace: 'pre-wrap'}}>{selected.body}</p>
          </article>
        )}
      </Modal>
    </div>
  )
}