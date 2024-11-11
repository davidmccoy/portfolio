const Skills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 bg-gray-50">
      <div className="py-2 px-4">
        <p className="mb-2">
          <strong>Technologies:</strong>
        </p>
        <ul className="list-disc break-words">
          <li>TypeScript/JavaScript (React, Node.js, Next.js)</li>
          <li>Python (PyTorch, LangChain, FastAPI)</li>
          <li>Ruby/Ruby on Rails</li>
          <li>
            AI/ML (RAG pipelines, knowledge graphs, classifiers,
            nearest-neighbor, etc)
          </li>
          <li>SQL/PostgreSQL</li>
        </ul>
      </div>
      <div className="py-2 px-4">
        <p className="mb-2">
          <strong>Architecture and System Design:</strong>
        </p>
        <ul className="list-disc break-words">
          <li>API design (REST and GraphQL)</li>
          <li>Monolith and micro-service architectures</li>
          <li>Distributed systems built with Docker and Kubernetes</li>
          <li>Domain-driven design</li>
          <li>CI/CD</li>
        </ul>
      </div>
      <div className="py-2 px-4">
        <p className="mb-2">
          <strong>Leadership:</strong>
        </p>
        <ul className="list-disc break-words">
          <li>
            Building high performance cultures by emphasizing ownership and
            accountability
          </li>
          <li>Leading and managing distributed engineering teams</li>
          <li>Technical and cross-functional leadership</li>
          <li>Agile project management</li>
        </ul>
      </div>
      <div className="py-2 px-4">
        <p className="mb-2">
          <strong>Personal:</strong>
        </p>
        <ul className="list-disc break-words">
          <li>High sense of ownership and and very self-motivated</li>
          <li>Growth mindset: never stop learning</li>
          <li>
            Commitment to building business, domain, and product expertise{' '}
          </li>
          <li>Excellent writing (both technical and non-technical)</li>
          <li>Planning (everything, not just projects!)</li>
          <li>
            Strong interpersonal communication and relationship-building, even
            in remote teams
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
