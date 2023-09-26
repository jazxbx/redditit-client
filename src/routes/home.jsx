import Button from "../components/Button";
import DisplaySubreddits from "../components/DisplaySubreddits";
import Post from "../components/Posts";

function Home() {
  return (
    <>
      <form className="my-6 flex justify-center">
        <input
          className="border-2 border-slate-700 "
          type="text"
          placeholder="create post"
        />
        <Button>Create a Post</Button>
      </form>
      <div className="mx-28 flex gap-3">
        <Post />
        <DisplaySubreddits />
      </div>
    </>
  );
}

export default Home;
