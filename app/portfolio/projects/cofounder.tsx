import Image from 'next/image';

const CoFounder = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-0 sm:py-2 flex flex-row sm:flex-col gap-4">
        <div className="h-fit w-1/2 sm:w-auto">
          <Image
            src={'/images/cofounder-hero.jpeg'}
            alt={'CoFounder'}
            width={400}
            height={240}
            className="min-w-[75px] object-contain sm:mb-4"
          />
        </div>
        <div className="flex-1 flex flex-col w-1/2 sm:w-auto">
          <p>
            <a
              href="https://www.trycofounder.ai"
              target="_blank"
              className="text-blue-600 hover:underline font-bold break-all"
            >
              trycofounder.ai
            </a>
          </p>
          <p className="italic">Code is not public</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p>
          <strong>CoFounder</strong> is an AI platform for startups and small
          businesses. It brings together all of your businesses data to save you
          time, money, and help you run your business.
        </p>
        <p>
          The web application is written in TypeScript/React using the Next.js
          framework and Vercel for hosting. We chose that stack specifically
          because we were optimizing for speed to market and ease of iteration.
        </p>
        <p>
          <strong>
            I spent most of my time on the AI side of the product,
          </strong>{' '}
          which is written in Python using the FastAPI framework and LangChain
          to interface with various foundational models and internal data
          sources.{' '}
          <strong>
            I redesigned our existing RAG pipeline to be modular and support a
            second product and re-wrote our system for adding user data to the
            LLM&apos;s context window.
          </strong>
        </p>
        <p>
          The product was also intended as an exploration of the AI space, so I
          also conducted a few experiments around query augmentation, agents,
          document hierarchies, and more.
        </p>
      </div>
    </>
  );
};

export default CoFounder;
