import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-8 border-t border-white mt-8">
      <Logo size={20} className="mb-2" />
      <div className="flex gap-4 mb-2">
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Facebook</span>
      </div>
      <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} The Athletic Rave. All rights reserved.</span>
    </footer>
  );
} 