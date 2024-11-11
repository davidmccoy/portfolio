import Image from 'next/image';

const Upright = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/upright-hero.jpeg'}
            alt={'Upright'}
            width={400}
            height={240}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a
              href="https://www.upright.us"
              target="_blank"
              className="text-blue-600 hover:underline font-bold break-all"
            >
              upright.us
            </a>
          </p>
          <p className="italic">Code is not public</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p>
          <strong>Upright</strong> (neé FundThatFlip) is a real estate financing
          and investment platform. It provides loans to established home
          builders and offers institutional and accredited investors the
          opportunity to invest in those loans.
        </p>
        <p>
          The main product was built with Ruby on Rails and React when I worked
          on it, but has changed significantly over the intervening period.
        </p>
        <p>
          One of my biggest accomplishments while working on Upright was{' '}
          <strong>
            helping to design and implement a payment system built directly on
            top of banking APIs that moved $10+ million per day at peak.
          </strong>{' '}
          The business has extremely unique needs when it comes to money
          movement &mdash; it loans millions of dollars to builders through a
          complicated series of legal entities, accepts millions of dollars of
          investment from institutional and accredited investors, and then pays
          interest and principal to those investors on their investments.
        </p>
        <p>
          To support these needs,{' '}
          <strong>
            the payment system needed to be extremely resilient and interface
            directly with banking APIs
          </strong>{' '}
          to programmatically open up new accounts, fund those accounts, and
          perform balance sweeps to ensure the accounts remained in good
          standing. The system would determine which accounts were to be used to
          pay how much to which investor or loan recipient, move that money
          programmatically, ensure the funds settled correctly, and perform any
          necessary dunning.
        </p>
        <p>
          <strong>
            Underlying every payment was a calculation done by a calculation
            engine that I helped design, implement, and thoroughly test.
          </strong>{' '}
          Previously, a given calculation&apos;s logic was written close to
          where the math was needed &mdash; so if it was needed on the front
          end, the calculation lived there; if it was need for both underwriting
          and payments, then it was duplicated in both places. This was an
          inflexible and unreliable system that was impossible to maintain and
          very vulnerable to errors, so we decided to design a set of composable
          calculation objects in the back end that could also be accessed by the
          front end via an API.
        </p>
        <p>
          That design decision significantly improved the calculations we did at
          every level of the application. It allowed us to refactor our loan
          underwriting tool to use the new calculation engine,{' '}
          <strong>
            which significantly increasing the tool&apos;s reliability and
            improving the business&apos;s ability to accurately assess a loan
            applicant.
          </strong>
        </p>
        <p>
          Due the nature of running a financial application, we also spent a
          large amount time identifying and addressing fraud.{' '}
          <strong>
            I designed and built our initial fraud detection system, along with
            the custom algorithm we used to judge each individual user and
            individual transaction
          </strong>{' '}
          to prevent things like spam account sign ups and to significantly
          reduce the likelihood any money was lost to fraud.
        </p>
      </div>
    </>
  );
};

export default Upright;
