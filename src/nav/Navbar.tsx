import { Link } from 'react-router-dom';
import InvasionIcon from '../assets/InvasionIcon.webp';


export default function Navbar() {
  return (
    <nav className="bg-black text-white flex">
      <Link to="/" title='Invasions' className="flex items-center justify-center">
        <div className="relative group w-full h-full inline-block rounded overflow-hidden">
          <img
            src={InvasionIcon}
            alt="Invasion Icon"
            className="block w-[60px] h-[60px] object-contain"
          />
          <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 transition-opacity" />
        </div>

      </Link>
    </nav>
  );
}
