import InvasionIcon from '../assets/InvasionIcon.webp';
import NotificationTimerIcon from '../assets/NotificationTimerIcon.png';
import NavItem from './NavItem';


export default function Navbar() {
  
  return (
    <nav className="bg-black w-screen h-[50px] text-white w flex fixed z-[9999]">
        <NavItem icon={InvasionIcon} iconAlt='Invasion Icon' URL='/Invasions' linkTitle='Active Invasions' />
        <NavItem icon={NotificationTimerIcon} iconAlt='Bell Icon' URL='/Notification-Form' linkTitle='Notification Form' />
    </nav>
  );
}
