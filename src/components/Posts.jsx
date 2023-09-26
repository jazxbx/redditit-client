import { useOutletContext } from "react-router-dom";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

function Posts() {
  const { posts } = useOutletContext();

  return (
    <div className="flex w-2/3 flex-col justify-center gap-2">
      {posts.map((post) => (
        <div key={post.id} className="border-2 border-indigo-500/75 p-7">
          <h2>r/{post.subreddit.name}</h2>
          <p className="text-sm">u/{post.user.username}</p>
          <h1 className="my-3 text-lg font-semibold">{post.title}</h1>
          <p>{post.text}</p>
          <div className="mt-3">
            <button className="mr-2">
              <ArrowUpward className=" hover:bg-orange-400" />
              <span>{post.upvotes.length}</span>
            </button>
            <button>
              <ArrowDownward className="hover:bg-blue-300" />
              <span>{post.downvotes.length}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
