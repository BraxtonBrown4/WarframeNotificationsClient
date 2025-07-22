interface NavItemProps {
  icon: string;
  id: number;
  lockedId: number | null;
  setLockedId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function NavItem({ icon, id, lockedId, setLockedId }: NavItemProps) {

  return (
    <div
      className="relative group w-fit inline-block rounded overflow-hidden cursor-pointer"
      onClick={() => {setLockedId(id)}}
    >
      <img src={icon} alt="Nav Icon" className="block w-[50px] h-[50px] object-contain" />
      <div
        className={`absolute inset-0 bg-red-500 transition-opacity ${
          lockedId === id ? 'opacity-30' : 'opacity-0 group-hover:opacity-30'
        }`}
      />
    </div>
  );
}
