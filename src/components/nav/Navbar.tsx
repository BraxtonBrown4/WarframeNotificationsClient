import InvasionIcon from '../../assets/InvasionIcon.webp'
import NotificationTimerIcon from '../../assets/NotificationTimerIcon.png';
import VoidFissureIcon from '../../assets/VoidFissureIcon.webp';
import NavItem from './NavItem';


export default function Navbar() {
  
  return (
    <nav className="bg-black w-screen h-[50px] text-white w flex fixed z-50">
        <NavItem icon={InvasionIcon} iconAlt='Invasion Icon' url='/Invasions' linkTitle='Active Invasions' />
        <NavItem icon={VoidFissureIcon} iconAlt='Void Fissure Icon' url='/Void-Fissures' linkTitle='Active Void Fissures' />
        <NavItem icon={NotificationTimerIcon} iconAlt='Bell Icon' url='/Notification-Form' linkTitle='Notification Form' />
    </nav>
  );
}
