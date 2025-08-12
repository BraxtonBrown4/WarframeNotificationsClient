import { useEffect, useState } from 'react';
import InvasionIcon from '../../assets/InvasionIcon.webp';
import NotificationTimerIcon from '../../assets/NotificationTimerIcon.png';
import VoidFissureIcon from '../../assets/VoidFissureIcon.webp';
import SyndicateIcon from '../../assets/SyndicateIcon.png';
import NavItem from './NavItem';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/.auth/me", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setUser(data.clientPrincipal || null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      }
    }
    checkAuth();
  }, []);

  return (
    <nav className="bg-black w-screen h-[50px] text-white flex fixed z-50">
      <NavItem icon={InvasionIcon} iconAlt='Invasion Icon' url='/Invasions' linkTitle='Active Invasions' />
      <NavItem icon={VoidFissureIcon} iconAlt='Void Fissure Icon' url='/Void-Fissures' linkTitle='Active Void Fissures' />
      <NavItem icon={SyndicateIcon} iconAlt='Syndicate Icon' url='/Syndicate-Missions' linkTitle='Syndicate Missions' />
      <NavItem icon={NotificationTimerIcon} iconAlt='Bell Icon' url='/Notification-Form' linkTitle='Notification Form' />

      {/* Right side: login/logout */}
      <div className="ml-auto flex items-center pr-4">
        {user ? (
          <>
            <a
              href="/.auth/logout"
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </a>
          </>
        ) : (
          <a
            href="/.auth/login/github" // Change provider if needed
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
