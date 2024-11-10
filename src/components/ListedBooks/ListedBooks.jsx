import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getToReadList, getToWishList } from "../../utility/addToDB";
import { Helmet } from "react-helmet-async";
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {
  const [booksList, setBooksList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allBooks = useLoaderData();
  // console.log(allBooks)

  useEffect(() => {
    const storedListBook = getToReadList();
    const storedWishList = getToWishList();
    // console.log(storedListBook);

    const filteredBooksList = allBooks.filter((books) =>
      storedListBook.includes(books.bookId)
    );

    const filteredWishList = allBooks.filter((books) =>
      storedWishList.includes(books.bookId)
    );

    setBooksList(filteredBooksList);
    setWishList(filteredWishList);
  }, [allBooks]);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Helmet>
        <title>Listed Book | Book Vibe</title>
      </Helmet>

      <div className="bg-[#1313130D] rounded-2xl">
        <h2 className="text-2xl font-bold text-center py-8">Books</h2>
      </div>

      {/* sort by button */}
      <div className="dropdown mt-8 mb-14 flex justify-center">
        <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white font-semibold rounded-lg m-1">Sort By <RiArrowDropDownLine className="text-3xl" /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-[#1313130D] rounded-box z-[1] w-52 mt-14 shadow">
          <Link>Rating</Link>
          <Link>Number of pages</Link>
          <Link>Publisher year</Link>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-6 mt-8">
            {booksList.map((book) => (
              <div key={book.bookId} className="flex flex-col md:flex-row justify-center gap-6 border border-[#13131326] rounded-2xl p-6">
                {/* image div */}
                <div className="md:w-1/5 h-[230px] bg-[#F3F3F3] flex justify-center items-center rounded-2xl">
                  <img
                    src={book.image}
                    alt={`Cover of the book: ${book.image}`}
                    className="h-[172px] skew-y-6"
                  />
                </div>
                {/* book details div */}
                <div className="md:w-4/5 space-y-4">
                  <h2 className="text-2xl font-medium text-center md:text-left">
                    {book.bookName}
                  </h2>
                  <h2 className="text-center md:text-left">
                    By : {book.author}
                  </h2>
                  <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                    <span className="text-sm font-bold text-center md:text-left">
                      Tag:{" "}
                    </span>
                    {book.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A] border-none rounded-[30px] font-medium"
                      >
                        {tag}Hello
                      </button>
                    ))}
                    <p className="flex items-center gap-1 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      Year of Publishing: {book.yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <p className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                      Publisher: {book.publisher}
                    </p>
                    <p className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      Page {book.totalPages}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <button className="btn btn-sm bg-[#328EFF26] text-[#328EFF] font-normal rounded-[30px]">
                      Category: {book.category}
                    </button>
                    <button className="btn btn-sm bg-[#FFAC3326] text-[#FFAC33] font-normal rounded-[30px]">
                      Category: {book.rating}
                    </button>
                    <button className="btn btn-sm bg-[#23BE0A] text-white font-normal rounded-[30px]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-6 mt-8">
            {wishList.map((wish) => (
              <div key={wish.bookId} className="flex flex-col md:flex-row justify-center gap-6 border border-[#13131326] rounded-2xl p-6">
                {/* image div */}
                <div className="md:w-1/5 h-[230px] bg-[#F3F3F3] flex justify-center items-center rounded-2xl">
                  <img
                    src={wish.image}
                    alt={`Cover of the book: ${wish.image}`}
                    className="h-[172px] skew-y-6"
                  />
                </div>
                {/* book details div */}
                <div className="md:w-4/5 space-y-4">
                  <h2 className="text-2xl font-medium text-center md:text-left">
                    {wish.bookName}
                  </h2>
                  <h2 className="text-center md:text-left">
                    By : {wish.author}
                  </h2>
                  <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                    <span className="text-sm font-bold text-center md:text-left">
                      Tag:{" "}
                    </span>
                    {wish.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A] border-none rounded-[30px] font-medium"
                      >
                        {tag}Hello
                      </button>
                    ))}
                    <p className="flex items-center gap-1 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      Year of Publishing: {wish.yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <p className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                      Publisher: {wish.publisher}
                    </p>
                    <p className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="hidden sm:flex size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      Page {wish.totalPages}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <button className="btn btn-sm bg-[#328EFF26] text-[#328EFF] font-normal rounded-[30px]">
                      Category: {wish.category}
                    </button>
                    <button className="btn btn-sm bg-[#FFAC3326] text-[#FFAC33] font-normal rounded-[30px]">
                      Category: {wish.rating}
                    </button>
                    <button className="btn btn-sm bg-[#23BE0A] text-white font-normal rounded-[30px]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
