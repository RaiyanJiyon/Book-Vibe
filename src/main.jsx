import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch('booksData.json')
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
