import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { API } from "./lib";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [subreddits, setSubreddits] = useState([]);

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    }
  }

  async function fetchPosts() {
    const res = await fetch(`${API}/posts`);
    const info = await res.json();
    if (info.success) {
      setPosts(info.posts);
    }
  }

  async function fetchSubreddits() {
    const res = await fetch(`${API}/subreddits`);
    const info = await res.json();
    if (info.success) {
      setSubreddits(info.subreddits);
    }
  }

  console.log("subreddits", subreddits);

  useEffect(() => {
    fetchUser();
    fetchPosts();
    fetchSubreddits();
  }, [token]);

  // console.log(user, token);
  // console.log(posts);

  return (
    <>
      <Navbar user={user} setToken={setToken} setUser={setUser} />
      <Outlet
        context={{
          fetchPosts,
          posts,
          setToken,
          token,
          user,
          setUser,
          subreddits,
        }}
      />
    </>
  );
}

export default App;
