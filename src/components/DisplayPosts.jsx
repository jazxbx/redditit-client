import { useOutletContext } from "react-router-dom";
import Votes from "./Votes";

function DisplayPosts() {
  const { posts } = useOutletContext();

  const filteredPosts = posts.filter((post) => !post.parentId);

  return (
    <div className="flex w-2/3 flex-col justify-center gap-2">
      {filteredPosts.map((post) => (
        <div key={post.id} className="border-2 border-indigo-500/75 p-7">
          <h2>r/{post.subreddit.name}</h2>
          <p className="text-sm">u/{post.user.username}</p>
          <h1 className="my-3 text-lg font-semibold">{post.title}</h1>
          <p>{post.text}</p>
          <div className="mt-3">
            <Votes post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayPosts;
