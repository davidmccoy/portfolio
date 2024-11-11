import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

const ParentDirectoryLink = () => {
  return (
    <div className="mb-4">
      <Link
        href="/"
        className="text-blue-600 hover:underline flex items-center"
      >
        <ChevronUp className="w-4 h-4 mr-1" />
        Parent Directory
      </Link>
    </div>
  );
};

export default ParentDirectoryLink;
