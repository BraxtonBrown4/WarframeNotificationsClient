import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NotificationForm } from './NotificationForm'
import { Invasions } from './Invasions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Invasions/>} />
      <Route path="/form" element={<NotificationForm/>} />
    </Routes>

  )
}

export default App
