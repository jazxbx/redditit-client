import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./routes/home.jsx";
import Login from "./routes/login.jsx";
import Register from "./routes/register.jsx";
import Subreddit from "./routes/subreddit.jsx";
import SubmitPost from "./routes/submitPost.jsx";
import CreateSubreddit from "./routes/createSubreddit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "submit", element: <SubmitPost /> },
      { path: "submit/community", element: <CreateSubreddit /> },
      { path: "subreddit/:subredditId", element: <Subreddit /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
