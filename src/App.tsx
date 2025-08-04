import { Outlet, Route, Routes } from 'react-router-dom'
import { NotificationForm } from './components/NotificationForm'
import Invasions from './components/invasions/Invasions'
import Navbar from './components/nav/Navbar'
import VoidFissures from './components/voidFissures/VoidFissures'
import SyndicateMissions from './components/syndicateMissions/SyndicateMissions'


function App() {
  return <Routes>
    <Route path="/" element={<><Navbar /> <div className="mt-[50px] px-4 flex-grow"> <Outlet /> </div></>}>
      <Route path="/Invasions" element={<Invasions />} />
      <Route path="/Void-Fissures" element={<VoidFissures/>} />
      <Route path="/Syndicate-Missions" element={<SyndicateMissions/>} />
      <Route path="/Notification-Form" element={<NotificationForm />} />
    </Route>
  </Routes>
}

export default App