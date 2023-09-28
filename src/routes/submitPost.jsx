import { useOutletContext } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { API } from "../lib";
import { useNavigate } from "react-router-dom";

function SubmitPost() {
  const { subreddits, token, fetchPosts } = useOutletContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  //change this this selectSubredditIdId
  const [selectSubredditId, setselectSubredditId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!token) {
      setError(`Please login to post`);
      return;
    }

    if (!selectSubredditId) {
      setError(`Please choose a community.`);
      return;
    }

    const res = await fetch(`${API}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, text, subredditId: selectSubredditId }),
    });

    const info = await res.json();

    if (!info.success) {
      return setError(info.error);
    } else {
      setText("");
      setTitle("");
      fetchPosts();
    }
    setError("");
    navigate(`/subreddit/${selectSubredditId}`);
  }

  //   console.log("subreddits", subreddits);
  console.log(selectSubredditId);

  return (
    <div>
      <div>
        <h1 className="text-start">Create a post</h1>
        <select
          className="my-2 rounded-lg border border-gray-300 p-2"
          onChange={(e) => setselectSubredditId(e.target.value)}
          value={selectSubredditId} //CHECK CHECK
        >
          <option disabled value="">
            Choose a community
          </option>
          {subreddits.map((subreddit) => (
            <option key={subreddit.id} value={subreddit.id}>
              {subreddit.name}
            </option>
          ))}
        </select>
        <div className="mt-5">
          <form action="" onClick={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="rounded-lg border border-gray-300 p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="h-24 w-full rounded-lg border border-gray-300 p-2 focus:outline-none"
              />
            </div>
            <Button>Post</Button>
          </form>
          {/* DELETE THIS CODE AFTERRRRR!! */}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default SubmitPost;
