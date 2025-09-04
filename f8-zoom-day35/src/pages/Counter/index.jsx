import { useState } from 'react'
import styles from './Counter.module.scss'

export default function Counter() {
  const [count, setCount] = useState(0)
  const colorClass = count > 0 ? styles.positive : count < 0 ? styles.negative : styles.zero
  const status = count > 0 ? 'Dương' : count < 0 ? 'Âm' : 'Bằng không'

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>1. Counter App</h1>
      <div className={`${styles.count} ${colorClass}`}>{count}</div>
      <div className={styles.status}>Trạng thái: <strong>{status}</strong></div>
      <div className={styles.row}>
        <button onClick={()=>setCount(c=>c+1)}>Tăng (+1)</button>
        <button onClick={()=>setCount(c=>c-1)}>Giảm (-1)</button>
        <button onClick={()=>setCount(0)}>Reset (0)</button>
      </div>
    </div>
  )
}
