import { Link, useOutletContext } from "react-router-dom";

function DisplaySubreddits() {
  const { subreddits } = useOutletContext();

  return (
    <div>
      <h1 className="mb-3 text-sm">Trending Communities</h1>
      {subreddits.map((subreddit) => (
        <div className="hover:bg-slate-200" key={subreddit.id}>
          <Link to={`/subreddit/${subreddit.id}`}>r/{subreddit.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DisplaySubreddits;
