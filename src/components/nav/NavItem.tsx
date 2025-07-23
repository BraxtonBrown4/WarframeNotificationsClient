import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: string;
  iconAlt: string;
  url: string;
  linkTitle: string;
}

export default function NavItem({ icon, iconAlt, url, linkTitle}: NavItemProps) {
  const location = useLocation();

  return (
    <Link to={url} title={linkTitle} className="flex items-center justify-center">
      <div
        className="relative group w-fit inline-block rounded overflow-hidden cursor-pointer">

        <img src={icon} alt={iconAlt} className="block w-[50px] h-[50px] object-contain" />
        <div
          className={`absolute inset-0 bg-red-500 transition-opacity ${url === location.pathname ? 'opacity-30' : 'opacity-0 group-hover:opacity-30'
            }`}
        />
      </div>
    </Link>
  );
}
