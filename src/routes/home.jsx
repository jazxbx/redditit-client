import { Link } from "react-router-dom";
import Button from "../components/Button";
import DisplaySubreddits from "../components/DisplaySubreddits";
import DisplayPosts from "../components/DisplayPosts";

import { useOutletContext } from "react-router-dom";

function Home() {
  const { subreddits, posts } = useOutletContext;

  const getPostLink = (subredditId, postId) =>
    `/subreddit/${subredditId}/${postId}`;

  return (
    <>
      <Button>
        <Link to={"/submit"}>Create Post</Link>
      </Button>
      <Button>
        <Link to={"/submit/community"}>Create Community</Link>
      </Button>
      <div className="mx-28 flex gap-3">
        {/* {posts &&
          posts.map((post) => (
            <Link key={post.id} to={getPostLink(post.subredditId, post.id)}>
              <Post />
            </Link>
          ))} */}
        <DisplayPosts />
        <DisplaySubreddits />
      </div>
    </>
  );
}

export default Home;
