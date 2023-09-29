import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useOutletContext } from "react-router-dom";
import Votes from "../components/Votes";

function Subreddit() {
  const { subreddits, posts } = useOutletContext();
  const { subredditId } = useParams();

  const findSubreddit = subreddits.find(
    (subreddit) => subreddit.id === subredditId,
  );

  const filteredPosts = posts.filter(
    (post) => post.subredditId === findSubreddit.id,
  );

  return (
    <div>
      <div>
        {filteredPosts.length === 0 ? (
          <div>
            <p>Subreddit empty, create a post!</p>
            <Link to={"/submit"}>
              <Button>Post</Button>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl">r/{findSubreddit.name}</h1>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="grid border-2 border-indigo-500/75 p-7"
              >
                <div>
                  <p className="text-sm">Posted by u/{post.user.username}</p>
                  <h1 className="my-3 text-lg font-semibold">{post.title}</h1>
                  <p>{post.text}</p>
                </div>
                <div>
                  <Votes post={post} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Subreddit;
