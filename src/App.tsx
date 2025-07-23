import { Outlet, Route, Routes } from 'react-router-dom'
import { NotificationForm } from './components/NotificationForm'
import Invasions from './components/invasions/Invasions'
import Navbar from './components/nav/Navbar'

function App() {
  return <Routes>
    <Route path="/" element={<><Navbar /> <div className="mt-[50px] px-4 flex-grow"> <Outlet /> </div></>}>
      <Route path="/Invasions" element={<Invasions />} />
      <Route path="/Notification-Form" element={<NotificationForm />} />
    </Route>
  </Routes>
}

export default App