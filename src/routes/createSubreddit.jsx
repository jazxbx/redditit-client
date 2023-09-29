import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../lib";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CreateSubreddit() {
  const { token, fetchSubreddits } = useOutletContext();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [newSubredditId, setNewSubredditId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if newSubredditId has a value and then navigate
    if (newSubredditId) {
      navigate(`/subreddit/${newSubredditId}`);
      setNewSubredditId(null);
    }
  }, [newSubredditId, navigate]); // Add navigate to the dependency array

  async function handleSubmit(e) {
    e.preventDefault();

    if (!token) {
      setError(`Please login to post`);
      return;
    }

    const res = await fetch(`${API}/subreddits`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const info = await res.json();

    if (!info.success) {
      return setError(info.error);
    } else {
      setName("");
      fetchSubreddits();
      setError("");
      setNewSubredditId(info.id);
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-start">Create a community</h1>
        <p>Name</p>
        <p>Community names including capitalization cannot be changed</p>
        <form onSubmit={handleSubmit}>
          <input
            className="border"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button>Cancel</Button>
          <Button>Create Community</Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default CreateSubreddit;
