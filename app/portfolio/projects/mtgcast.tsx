import Image from 'next/image';

const MTGCast = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/mtgcast-hero.jpeg'}
            alt={'MTGCast'}
            width={400}
            height={380}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a className="text-blue-600 hover:underline font-bold break-all">
              mtgcast.com
            </a>{' '}
          </p>
          <p className="italic">No longer accessible</p>
          <p className="italic">
            View the code on{' '}
            <a
              href="https://github.com/davidmccoy/podcaster"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold mb-4">Background</h2>
        <p>
          <strong>MTGCast</strong> launched in 2014 in order to provide a free,
          shared podcast hosting platform for the <em>Magic: The Gathering</em>{' '}
          community. In 2018, the site experienced a catastrophic failure and
          lost the majority of its data. The operators at the time weren&apos;t
          up to trying to recover the site,{' '}
          <strong>
            so I stepped in and began the painstaking recovery and
            reconstruction of the service.
          </strong>
        </p>

        <h2 className="text-lg font-bold mb-4">
          &quot;Gentlemen, We Can Rebuild Him.&quot;
        </h2>
        <p>
          Unfortunately, the database was irretrievable. I was able recover a
          large portion of the audio files that MTGCast users had uploaded, but
          that was the only data with which I could restore the site&apos;s
          historical data. The result was very incomplete but I managed to
          re-host all of the recovered audio files under properly-organized RSS
          feeds.
        </p>
        <p>
          MTGCast had already been down for a few weeks by the time I got
          involved. Given the level of data loss, I decided that rebuilding the
          basic functionality of MTGCast from scratch would be faster than
          recreating the previous WordPress-based version that had already begun
          to come apart at the seams. Speed was still important, though,{' '}
          <strong>
            so I chose Rails to quickly scaffold out the podcast creation,
            episode upload, and RSS feed features.
          </strong>
        </p>

        <h2 className="text-lg font-bold mb-4">Functionality</h2>
        <p>
          After restoring service,{' '}
          <strong>
            the immediate flood of traffic forced me to refine my caching
            techniques
          </strong>{' '}
          ahead of schedule, particularly for the RSS feeds I was
          programmatically generating for each podcast. I then proceeded to
          flesh out the podcast management side of things by adding{' '}
          <strong>
            a second database to store records individual downloads, which were
            then processed asynchronously into aggregated analytics data.
          </strong>{' '}
          I also added{' '}
          <strong>
            a file compression service to reduce my AWS data costs
          </strong>{' '}
          and expanded the content types to include text posts, which required
          upgrading the text editor to use{' '}
          <a
            href="https://tiptap.dev/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            tiptap
          </a>
          .
        </p>
        <p>
          The service continued to evolve over the next few years but never
          really recovered from the initial failure. I stopped actively
          developing the site in 2022.
        </p>
      </div>
    </>
  );
};

export default MTGCast;
