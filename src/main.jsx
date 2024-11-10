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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";

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
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead />,
        loader: () => fetch('/booksData.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>
);
