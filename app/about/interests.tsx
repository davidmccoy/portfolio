const Interests = () => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-2  bg-gray-50`}
    >
      <div></div>
      <div className="p-4">
        <p className="mb-2">
          <strong>When not traversing the stack, I am:</strong>
        </p>
        <ul className="list-disc">
          <li>an insatiable reader (news, engineering books/blogs, fiction)</li>
          <li>an occasional writer</li>
          <li>
            an avid consumer of physical media (books, magazines, vinyl records,
            CDs)
          </li>
          <li>a long-suffering Seattle sports fan (#GoHawks, #GoMs, #EBFG)</li>
          <li>
            a social gamer (just the occasional <em>Magic: The Gathering</em>{' '}
            draft with friends these days)
          </li>
          <li>a mediocre photographer</li>
          <li>a fair-weather cyclist</li>
        </ul>
      </div>
    </div>
  );
};

export default Interests;
