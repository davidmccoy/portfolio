import Image from 'next/image';

const Hipsters = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/hipsters-hero.jpeg'}
            alt={'Hipsters of the Coast'}
            width={400}
            height={380}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a
              href="https://www.hipstersofthecoast.com"
              target="_blank"
              className="text-blue-600 hover:underline font-bold break-all"
            >
              hipstersofthecoast.com
            </a>
          </p>
          <p className="italic">
            View the code on{' '}
            <a
              href="https://github.com/davidmccoy/hipsters_wp_theme/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p>
          <strong>Hipsters of the Coast</strong> was gaming content and news
          site built on WordPress that reached over 2 million users annually at
          peak and 60% growth year-over-year from 2017-2023.
        </p>
        <p>
          It employed a remote team of 10 and generated $100k+ in revenue,
          mostly through advertising.
        </p>
        <p>
          The site was started by a group of Brooklyn-based friends in 2012 in
          write about our favorite game, <em>Magic: The Gathering</em>. I joined
          in 2013 in order to help my friends transition away from WordPress.com
          to a self-hosted version of WordPress.
        </p>
        <p>
          I took on all of the web-related duties at that point. At a basic
          level I managed our servers and WordPress implementation (eventually
          transitioning to a hosted solution), but{' '}
          <strong>
            I also redesigned and re-branded the site (including the graphic
            design) and built new features (like an advanced card hover plugin).
          </strong>
        </p>
        <p>
          In a non-technical capacity,{' '}
          <strong>
            I helped run the content side of the business between 2017-2023,
            which involved managing our remote team of writers through the
            entire editorial process.
          </strong>
        </p>
        <p>Hipsters of the Coast ceased publication at the end of 2023.</p>
      </div>
    </>
  );
};

export default Hipsters;
