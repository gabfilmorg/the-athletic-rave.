import Logo from '../ui/Logo';

export default function Header() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 border-b border-white">
      <Logo size={28} />
      <ul className="flex gap-8 text-sm uppercase font-semibold">
        <li><a href="#packages">Packages</a></li>
        <li><a href="#event">The Event</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
    </nav>
  );
} 