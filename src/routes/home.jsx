import Button from "../components/Button";
import Post from "../components/Posts"

function Home() {
  return (
    <>
      <form className="flex justify-center">
      <input className="border-2 border-slate-700 " type="text" placeholder="create post" />
      <Button>Create a Post</Button>
      </form>
      <Post/>
    </>
  );
}

export default Home;
