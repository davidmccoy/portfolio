import Footer from './footer';
import ParentDirectoryLink from './parent-directory-link';

type PageProps = {
  children: React.ReactNode;
  title?: string;
  showParentDirectoryLink?: boolean;
};

const Page = ({
  children,
  title,
  showParentDirectoryLink = true,
}: PageProps) => {
  return (
    <div className="font-mono text-sm p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Index of /david-mccoy/software-engineer{title ? `${title}` : ''}
      </h1>
      {showParentDirectoryLink && <ParentDirectoryLink />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
