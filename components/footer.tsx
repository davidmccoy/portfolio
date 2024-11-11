import { Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-8 text-xs text-gray-500 flex items-center">
      <span
        title='Not really! It might be closer to "Nginx/1.27.2 (Linux) Node.js/20.18.0 Server at github.com Port 443" in reality.'
        className="cursor-pointer"
      >
        <Info className="w-4 h-4 mr-2" />
      </span>
      <span>Apache/2.2.0 (Win32) PHP/5.1.2 Server at localhost Port 80</span>
    </footer>
  );
}
