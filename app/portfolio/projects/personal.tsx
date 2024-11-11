import Image from 'next/image';

const Personal = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/personal-hero.jpeg'}
            alt={'Personal website'}
            width={400}
            height={200}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a
              href="https://www.davidmccoy.com"
              target="_blank"
              className="text-blue-600 hover:underline font-bold break-all"
            >
              davidmccoy.com
            </a>
          </p>
          <p className="italic">
            View the code on{' '}
            <a
              href="https://github.com/davidmccoy/davidmccoy.github.io"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold mb-4">It&apos;s Personal</h2>
        <p>
          I came of age on the internet when surfing the web still felt like an
          adventure, when it was so full of <em>new</em> that you never knew
          where you&apos;d end up. Back then, it wasn&apos;t uncommon for
          someone to set up a web server and allow anyone on the internet to
          peruse parts of it as a remote file system &mdash; just from within a
          web browser. Those sections of a website would rarely have an
          index.html file so the server would render the current directory as
          web pages using a &quot;default directory view,&quot; which was
          usually just a white background and a table containing blue links.
        </p>
        <p>
          A part of me misses the aesthetics of that era of the internet, before
          things like Bootstrap or Tailwind popularized certain styles and
          hyper-optimized landing pages all started converging on the same,
          generic look. The look of default directory views is the exact
          opposite kind of convergence &mdash; the internet and websites were so
          new that those white pages and blue links had a feeling closer to
          being on the frontier, exploring the depths of some stranger&apos;s
          web server. (Google initially retained some of that feeling, and in
          fact used the same aesthetic, when it rose to prominence...but it lost
          that sense long ago.)
        </p>
        <p>
          When I bought my personal domain, I wanted to both avoid building a
          generic portfolio and have a little fun with the task in front of me.
          So I did what any sane person would do: I leaned hard into a joke-y,
          nostalgic aesthetic that few people remember. Is it a good idea for
          your personal site to be, quite literally, a joke? Specifically a joke
          that you have to explain? Is it even a good joke if I have to explain
          it?
        </p>
        <p>Probably not, but I enjoyed building it anyway.</p>

        <h2 className="text-lg font-bold mb-4">
          Restrictions Breed Creativity
        </h2>
        <p>
          Programming is, at its core, a creative act. That often gets lost in
          the day-to-day work of software engineering, but it really comes to
          the fore when you are working on personal projects.
        </p>
        <p>
          One of my favorite adages in that vein comes from Mark Rosewater, the
          Head Designer of <em>Magic: The Gathering</em>. For well over a
          decade, he has lived by the philosophy that &quot;
          <a
            href="https://x.com/maro254/status/176046057883578368?lang=en"
            target="_blank_"
            className="text-blue-600 hover:underline"
          >
            restrictions
          </a>{' '}
          <a
            href="https://markrosewater.tumblr.com/post/22705729575/did-you-coin-the-phrase-restriction-breeds"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            breed
          </a>{' '}
          <a
            href="https://magic.wizards.com/en/news/making-magic/twenty-years-twenty-lessons-part-3-2016-06-13"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            creativity
          </a>
          .&quot;
        </p>
        <p>
          &quot;This lesson is tied into a myth about creativity,&quot;
          Rosewater{' '}
          <a
            href="https://magic.wizards.com/en/news/making-magic/twenty-years-twenty-lessons-part-3-2016-06-13"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            writes
          </a>
          . &quot;Many people believe that the more options available, the more
          creative a person can be.&quot;
        </p>
        <p>
          &quot;This is a myth,&quot; he continues, &quot;because it contradicts
          what we know about how the brain works.&quot; If you&apos;re faced
          with a problem and you&apos;ve solved that specific problem before, he
          says, you will likely solve it again in the same way &mdash; the
          opposite of creativity.
        </p>
        <p>
          Instead, Rosewater argues that &quot;[i]f you want your brain to get
          to new places, start from somewhere you&apos;ve never started
          before.&quot; Using a restriction, arbitrary or not, to force your
          brain to start from a new place off of the beaten path will help
          kickstart the creative process.
        </p>
        <p>
          If I&apos;m being honest, this concept is only a small part of why I
          built my personal site as a neo-default directory view and mostly a
          post hoc justification for the time I spent building something that
          isn&apos;t obviously &quot;good.&quot; But, alongside my decision to
          use default directory aesthetics, I decided to try and mirror default
          directory functionality as well. And that is <em>definitely</em> a
          restriction.
        </p>
        <p>
          So I limited myself to a table-like layout with narrow rows and
          columns. Nothing fancy &mdash; no hero images, slideshows, image
          animations, etc &mdash; and a mono font styled with a very basic color
          palette.
        </p>

        <h2 className="text-lg font-bold mb-4">Kitchen Table Issues</h2>
        <p>
          I learned to build my first websites back when those web server
          directories that <em>did</em> have an index.html were forced to use
          tables as the main way to achieve a non-standard layout. It&apos;s an
          absurd thought in today&apos;s age of CSS grid and flexbox, which have
          fully supplanted tables &mdash; even when building actual tables for a
          web page &mdash; but tables used to rule the web. But I never really
          felt like the transition to floats and clearfixes for layouts was{' '}
          <em>that</em> much of an improvement, at least until Bootstrap 3 made
          them predictable enough to commit to.
        </p>
        <p>
          The visual layout of the default directory view is essentially a
          table, so falling back to the familiar old ways of
          table-as-page-layout-device was all to easy. I would obviously come to
          regret using a table...but we&apos;ll get to that later.
        </p>
        <p>
          The basic structure of the site was simple enough to translate to the
          default directory view as that view was literally used to visualize
          the file system of a web server. The top level pages would get their
          own links on the landing page, but figuring out the other parts of the
          site was where the fun was to be had: made-up server signatures in the
          footer, expanding table rows for details, etc.
        </p>

        <h2 className="text-lg font-bold mb-4">The Latest Update</h2>
        <p>
          I think it turned out pretty well &mdash; except for the use of
          tables. As I return to the site more than 10 years after I wrote the
          first iteration, it is clear that the unpredictable nature of the
          table element no longer cuts it. Plus, AI tools have come a long way
          and products like{' '}
          <a
            href="https://v0.dev/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            v0
          </a>
          ,{' '}
          <a
            href="https://claude.ai/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Claude 3.5 Sonnet
          </a>
          , and{' '}
          <a
            href="https://cursor.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Cursor
          </a>{' '}
          make work on my side projects a lot more effective. So I&apos;ve
          re-written the site with the help of those three tools and am quite
          pleased where it ended up.
        </p>
        <p>
          I wanted to play around with Next.js again, so I converted the site
          from HTML and vanilla JavaScript to a static Next.js app served via
          Github pages. v0 helped me translate the classic default directory
          view style into a more modern React and Tailwind setup, while Claude
          and Cursor helped me rewrite the the site to remove the use of tables
          in favor of CSS grid.
        </p>
        <p>
          The site definitely isn&apos;t everyone&apos;s taste but I sure have
          loved working on it over the years. I should probably build a more
          generically good-looking site for those hiring managers (or any other
          poor souls that stumble upon this site) that either don&apos;t get the
          aesthetic joke or just don&apos;t enjoy it. But not today!
        </p>
      </div>
    </>
  );
};

export default Personal;
