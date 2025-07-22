import { Route, Routes } from 'react-router-dom'
import { NotificationForm } from './NotificationForm'
import { Invasions } from './Invasions'
import Navbar from './nav/Navbar'

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/Invasions" element={<Invasions />} />
      <Route path="/Notification-Form" element={<NotificationForm />} />
    </Routes>
  </>
}

export default App