import InvasionIcon from '../../assets/InvasionIcon.webp';
import NotificationTimerIcon from '../../assets/NotificationTimerIcon.webp';
import VoidFissureIcon from '../../assets/VoidFissureIcon.webp';
import SyndicateIcon from '../../assets/SyndicateIcon.png';
import NavItem from './NavItem';
import { useQuery } from '@tanstack/react-query';

export default function Navbar() {

  const { data: user, isLoading } = useQuery({
    queryKey: ['User'],
    queryFn: () =>
      fetch('/.auth/me', { credentials: 'include' })
        .then(res => res.json())
        .then(data => data.clientPrincipal || null),
    retry: false
  });


  return (
    <nav className="bg-black w-screen h-[50px] flex justify-between items-center fixed z-50 px-4">

        <NavItem icon={InvasionIcon} iconAlt='Invasion Icon' url='/Invasions' linkTitle='Active Invasions' />
        <NavItem icon={VoidFissureIcon} iconAlt='Void Fissure Icon' url='/Void-Fissures' linkTitle='Active Void Fissures' />
        <NavItem icon={SyndicateIcon} iconAlt='Syndicate Icon' url='/Syndicate-Missions' linkTitle='Syndicate Missions' />
        <NavItem icon={NotificationTimerIcon} iconAlt='Bell Icon' url='/Notification-Form' linkTitle='Notification Form' />

      <div className="ml-auto flex items-center pr-4">
        {user ? (
          <button disabled={isLoading} onClick={() => (window.location.href = "/.auth/logout")} className="!bg-red-500 text-black px-4 py-2 rounded disabled:opacity-50">
            Logout
          </button> ) : (
          <button disabled={isLoading} onClick={() => (window.location.href = "/.auth/login/aad")} className="!bg-green-500 text-black px-4 py-2 rounded disabled:opacity-50">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
