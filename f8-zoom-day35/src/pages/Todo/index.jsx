import { useState } from 'react'
import styles from './Todo.module.scss'

let uniqId = 0

export default function Todo() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = inputValue.trim()
    if(!text) return
    setTodos(prev => [...prev, {id: ++uniqId, text, completed: false}])
    setInputValue('')
  }

  const toggle = (id) => setTodos(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  const remove = (id) => setTodos(prev => prev.filter(t => t.id !== id))

  const total = todos.length
  const done = todos.filter(t => t.completed).length
  const left = total - done

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>2. Todo List App</h1>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Nhập task mới..." 
          className={styles.input}
        />
        <button type="submit">Thêm</button>
      </form>

      {total === 0 ? (
        <div className={styles.empty}>Chưa có task nào. Hãy thêm task đầu tiên!</div>
      ) : (
        <>
          <div className={styles.kpi}>Tổng: {total} task(s), Hoàn thành: {done} task(s), Còn lại: {left} task(s)</div>
          <div className={styles.todoList}>
            {todos.map(t => (
              <div key={t.id} className={styles.todoItem}>
                <div className={styles.todoLeft}>
                  <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
                  <span className={t.completed ? styles.lineThrough : ''}>{t.text}</span>
                </div>
                <button onClick={() => remove(t.id)}>Xóa</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}