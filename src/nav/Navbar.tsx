import { Link } from 'react-router-dom';
import InvasionIcon from '../assets/InvasionIcon.webp';
import NotificationTimerIcon from '../assets/NotificationTimerIcon.png';
import { useState } from 'react';
import NavItem from './NavItem';


export default function Navbar() {
  const [lockedId, setLockedId] = useState<number | null>(null);

  return (
    <nav className="bg-black text-white flex">
      <Link to="/Invasions" title='Invasions' className="flex items-center justify-center">
        <NavItem id={1} icon={InvasionIcon} lockedId={lockedId} setLockedId={setLockedId}/>
      </Link>
      <Link to="/Notification-Form" title='Notification Form' className="flex items-center justify-center">
        <NavItem id={2} icon={NotificationTimerIcon} lockedId={lockedId} setLockedId={setLockedId}/>
      </Link>
    </nav>
  );
}
