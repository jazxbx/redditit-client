import { Link, useOutletContext, useParams } from "react-router-dom";
import Button from "../components/Button";

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
            <p>Subredditit empty, create a post!</p>
            <Link to={"/submit"}>
              <Button>Post</Button>
            </Link>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="border-2 border-indigo-500/75 p-7">
              <h2>r/{post.subreddit.name}</h2>
              <p className="text-sm">u/{post.user.username}</p>
              <h1 className="my-3 text-lg font-semibold">{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Subreddit;

// function Subreddit() {

//   return <div>subreddit</div>;
// }

// export default Subreddit;
