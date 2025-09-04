import { useState } from 'react'
import styles from './Weather.module.scss'

export default function Weather() {
  const weatherData = {
    "hanoi":  { city: "Hà Nội",  temp: 28, weather: "Nắng",    humidity: 65, icon:"☀️"  },
    "hcm":    { city: "TP.HCM",  temp: 32, weather: "Có mây",  humidity: 78, icon:"☁️" },
    "danang": { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82, icon:"🌧️" }
  }

  const [key, setKey] = useState("hanoi")
  const [data, setData] = useState(weatherData[key])

  const refresh = () => {
    const vary = n => Math.max(0, Math.round(n + (Math.random() * 10 - 5))) // ±5
    setData(d => ({ ...d, temp: vary(d.temp), humidity: vary(d.humidity) }))
  }

  const onChange = (e) => {
    const k = e.target.value
    setKey(k)
    setData(weatherData[k])
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>6. Weather App</h1>

      <div className={styles.row}>
        <select value={key} onChange={onChange} className={styles.select}>
          <option value="hanoi">Hà Nội</option>
          <option value="hcm">TP.HCM</option>
          <option value="danang">Đà Nẵng</option>
        </select>
        <button onClick={refresh}>Làm mới</button>
      </div>

      <div className={styles.weatherData}>
        <h3 className={styles.cityName}>{data.city} {data.icon}</h3>
        <ul className={styles.weatherList}>
          <li>Nhiệt độ: {data.temp}°C</li>
          <li>Thời tiết: {data.weather}</li>
          <li>Độ ẩm: {data.humidity}%</li>
        </ul>
      </div>
    </div>
  )
}