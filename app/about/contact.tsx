import Link from 'next/link';

const Contact = () => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-2  bg-gray-50`}
    >
      <div></div>
      <div className="p-4">
        Find me{' '}
        <Link href="/find-me" className="text-blue-600 hover:underline">
          here
        </Link>
        .
      </div>
    </div>
  );
};

export default Contact;
