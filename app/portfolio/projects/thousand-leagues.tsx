import Image from 'next/image';

const ThousandLeagues = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/thousand-leagues-hero.jpeg'}
            alt={'Thousand Leagues'}
            width={400}
            height={380}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a className="text-blue-600 hover:underline font-bold break-all">
              thousandleagues.com
            </a>
          </p>
          <p className="italic">No longer accessible</p>
          <p className="italic">
            View the code on{' '}
            <a
              href="https://github.com/davidmccoy/fantasy-drafter/"
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
          <strong>Thousand Leagues</strong> was a first-of-its-kind esports
          fantasy site focusing on <em>Magic: The Gathering</em> events. It was
          built with Ruby on Rails and React.
        </p>

        <h2 className="text-lg font-bold mb-4">Background</h2>
        <p>
          I have played fantasy football with friends and family for over a
          decade. I love the game and have noticed that it has a very distinct
          ability to increase a fan&apos;s engagement with an individual
          football game by almost always giving them a rooting interest in every
          game.
        </p>
        <p>
          (The NFL certainly noticed, too, and put the full force of its
          marketing behind pushing fantasy football...at least until sports
          gambling was legalized and everything became a gambling commercial.)
        </p>
        <p>
          I wanted to test the hypothesis that a fantasy game would have a
          similar impact on esports, my favorite of which is{' '}
          <em>Magic: The Gathering</em>. Plus, I wanted to learn how to build a
          real-time application, so I chose this project as a way of
          accomplishing both.
        </p>

        <h2 className="text-lg font-bold mb-4">Functionality</h2>
        <p>
          Thousand Leagues supported multiple ways for people to play fantasy{' '}
          <em>Magic</em>. Initially, the primary game mode was focused on
          private leagues, where you could get together with your friends for a
          specific <em>Magic</em> tournament and snake draft your favorite
          players. That format was the inspiration for the project and was{' '}
          <strong>
            powered by web sockets and React to create a real-time drafting
            experience.
          </strong>
        </p>
        <p>
          Later, I introduced the pick &apos;em format for use in public leagues
          that anyone could join. This was by far the most popular way to play
          on Thousand Leagues &mdash; I ran nearly 100 tournaments and gave away
          tons of non-monetary prizes.
        </p>
        <p>
          On Thousand Leagues, a{' '}
          <strong>
            league could choose between two different kinds of
            &quot;players&quot; to draft: actual professional <em>Magic</em>{' '}
            players or specific <em>Magic</em> cards.
          </strong>{' '}
          The player data was sourced from a combination of event registration
          and results from the tournament website, as well as historical data
          and rankings from{' '}
          <a
            href="https://www.mtgeloproject.net"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            The MTG ELO Project
          </a>
          . The card data, on the other hand, was sourced from a combination of
          historical tournament metagame reports from{' '}
          <a
            href="https://www.mtgtop8.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            MTG Top 8
          </a>{' '}
          and the specific decks registered for that particular tournament (if
          publicized by the tournament organizer).{' '}
          <strong>
            I built a flexible ETL pipeline to pull in that player and card
            data, process it, and then load it into the database so it could be
            presented to users during the draft.
          </strong>
        </p>
        <p>
          The results of the actual games of <em>Magic</em> were then
          automatically updated at the end of each round so that fantasy players
          could have as close to a real-time experience as a <em>Magic</em>{' '}
          tournament would allow.
        </p>
        <p>
          I also had the opportunity to partner with a third party to run a
          custom <em>Magic</em>-themed March Madness event on the platform that
          drew thousands of players. Instead of drafting, players would create a
          bracket out of 32 characters from the most recent <em>Magic</em> set
          (called <em>War of the Spark</em>, so the event was called &quot;Spark
          Madness&quot;).{' '}
          <strong>
            This required building a new UI with d3.js to display brackets and
            allow users to predict the winners of each round.
          </strong>{' '}
          My partner then ran polls to determine the round winners and we gave
          prizes to the players with the most accurate brackets.
        </p>
        <p>
          Unfortunately, <em>Magic</em> events went on a long hiatus during the
          COVID-19 pandemic and never returned to their pre-pandemic frequency
          or level of fan interest. As a result, I stopped developing the site
          in 2020.
        </p>
      </div>
    </>
  );
};

export default ThousandLeagues;
