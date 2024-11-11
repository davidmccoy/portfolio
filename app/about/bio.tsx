import Image from 'next/image';

const text = (classes?: string) => {
  return (
    <p className={classes}>
      I&apos;m a software engineer with{' '}
      <strong>over 10 years of experience</strong> in software development and
      technical leadership. I have extensive experience with the both product
      and software development lifecycles: from ideation, architecture, and
      design to development, testing, deployment, performance, and security.
    </p>
  );
};

const Bio = () => {
  return (
    <div className="grid grid-cols-[minmax(0,128px)_minmax(0,700px)] sm:grid-cols-[minmax(0,300px)_minmax(0,700px)_1fr] bg-gray-50">
      <div className="py-4 px-4 sm:max-w-80">
        <div className="relative w-24 sm:w-full aspect-square">
          <Image
            src="/images/headshot.jpg"
            alt="headshot"
            fill
            sizes="(max-width: 640px) 48px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="py-4 px-4">{text()}</div>
    </div>
  );
};

export default Bio;
