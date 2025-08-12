import InvasionIcon from '../../assets/InvasionIcon.webp';
import NotificationTimerIcon from '../../assets/NotificationTimerIcon.webp';
import VoidFissureIcon from '../../assets/VoidFissureIcon.webp';
import SyndicateIcon from '../../assets/SyndicateIcon.png';
import NavItem from './NavItem';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()

  const { data: user, isLoading } = useQuery({
    queryKey: ['User'],
    queryFn: () =>
        fetch('/.auth/me', { credentials: 'include' })
    .then(res => res.json())
    .then(data => data.clientPrincipal || null),
    retry: false
});

  return (
    <nav className="bg-black w-screen h-[50px] text-white flex fixed z-50">
      <NavItem icon={InvasionIcon} iconAlt='Invasion Icon' url='/Invasions' linkTitle='Active Invasions' />
      <NavItem icon={VoidFissureIcon} iconAlt='Void Fissure Icon' url='/Void-Fissures' linkTitle='Active Void Fissures' />
      <NavItem icon={SyndicateIcon} iconAlt='Syndicate Icon' url='/Syndicate-Missions' linkTitle='Syndicate Missions' />
      <NavItem icon={NotificationTimerIcon} iconAlt='Bell Icon' url='/Notification-Form' linkTitle='Notification Form' />

      {user ?
      <button disabled = {isLoading} onClick={() => {navigate("/.auth/logout")}}>Logout</button> :
      <button disabled = {isLoading} onClick={() => {navigate("/.auth/login/aad")}}>Login</button>
      }
    </nav>
  );
}
