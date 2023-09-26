import { useState } from "react";
import { API } from "../lib";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "../components/Button";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setToken, setUser } = useOutletContext();

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    setUser("");

    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(res);

    const info = await res.json();
    if (!info.success) {
      return setError(info.error);
    }
    setToken(info.token);
    localStorage.setItem("token", info.token);

    navigate("/");
  }

  return (
    <>
      <div className="flex w-full max-w-xs justify-center">
        <form
          className="mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md"
          onSubmit={handleRegister}
        >
          <div className="mb-4">
            <input
              className="border"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-4">
            <input
              className="border"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <Button className="bg-blue-600">Register</Button>
          </div>
        </form>
      </div>
      <p>{error}</p>
    </>
  );
}

export default Register;
