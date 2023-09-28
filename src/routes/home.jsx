import { Link } from "react-router-dom";
import Button from "../components/Button";
import DisplaySubreddits from "../components/DisplaySubreddits";
import Post from "../components/Posts";

function Home() {
  return (
    <>
      <Button>
        <Link to={"/submit"}>Create a Post</Link>
      </Button>
      <div className="mx-28 flex gap-3">
        <Post />
        <DisplaySubreddits />
      </div>
    </>
  );
}

export default Home;
