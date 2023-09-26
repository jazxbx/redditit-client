import { Link } from "react-router-dom";
import { Home, Search } from "@mui/icons-material";
import Button from "./Button";

export default function Navbar({ user, setToken, setUser }) {
  function handleLogout() {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
  }

  return (
    <nav className="mx-auto flex w-full max-w-screen-xl items-center p-2">
      <ul className="mx-4 flex w-full">
        <li className="flex items-center justify-start gap-2">
          <Link to={"/"}>Redidit</Link>
          <Home />
        </li>
        <form
          action=""
          className="flex flex-grow rounded-md border border-gray-400 p-1 px-4"
        >
          <Search className="h-7 w-7 text-gray-300" />
          <input
            type="text"
            className="block h-6 flex-1  p-1 pl-2 pr-0 text-sm focus:outline-none"
            placeholder="Search Redidit"
          />
        </form>
        {user && user.username ? (
          <>
            <li>
              <span className="mr-2 text-gray-700">
                Welcome, {user.username}
              </span>
            </li>
            <li>
              <Button
                className="ml-2 mr-1 bg-orange-600 text-white"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button className="ml-2 mr-1 bg-orange-600 text-white">
                <Link to={"/login"}>Login</Link>
              </Button>
            </li>
            <li>
              <Button className="mr-2" outline>
                <Link to={"/register"}>Register</Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
