import {useOutletContext} from "react-router-dom"

function Posts() {
    const {posts} = useOutletContext();

  return (
    <div className="flex justify-center flex-col gap-2">
    {posts.map((post) => (
      <div key={post.id} className="border-2 border-indigo-500/75">
        <h2>Subreddit: {post.subreddit.name}</h2>
        <p>Username: {post.user.username}</p>
        <p>Title: {post.title}</p>
        <p>Text: {post.text}</p>
        <p>Upvotes: {post.upvotes.length}</p>
        <p>Downvotes: {post.downvotes.length}</p>
      </div>
    ))}
  </div>
  )
}

export default Posts