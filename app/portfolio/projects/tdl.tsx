import Image from 'next/image';

const TDL = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/tdl-hero.jpeg'}
            alt={'Team Magic League'}
            width={400}
            height={380}
            className="min-w-[75px] object-contain sm:b-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a
              href="https://www.teammagicleague.com"
              target="_blank"
              className="text-blue-600 hover:underline font-bold"
            >
              teammagicleague.com
            </a>
          </p>
          <p className="italic">
            View the code on{' '}
            <a
              href="https://github.com/davidmccoy/teamdraftleague/"
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
          <strong>Team Magic League</strong> (neé Team Draft League) was born in
          2013 when a group of Brooklyn-based <em>Magic: The Gathering</em>{' '}
          players wanted a way to organize and track team drafts. We formed a
          league &mdash; and what does every league need? Schedules, results
          pages, and leaderboards. So I stepped in and built my first
          actually-used-by-real-people side project.
        </p>
        <p>
          Looking back on the code base is an exercise in cringing over and
          over. It&apos;s a basic CRUD Rails app with a lot of poorly thought
          out data modeling, incorrect use (or pure ignorance of) Rails
          conventions, or really any best practices, and just a lot of beginners
          mistakes. But I&apos;m incredibly proud that a group of 20-30 people
          used this site for years to keep our little league going.
        </p>
        <p>
          The core functionality of the app was the creation of a league,
          seasons, teams, and players. Those teams (usually made up of three
          people) would schedule matches against each other, where players would
          play everyone on the other team in 1v1 matches of <em>Magic</em>. The
          results would be reported on the website, aggregated to create
          seasonal leaderboards, personal statistics, etc.
        </p>
        <p>
          I stopped actively developing the site in 2015 as the original
          incarnation of TDL ceased operations.
        </p>
      </div>
    </>
  );
};

export default TDL;
