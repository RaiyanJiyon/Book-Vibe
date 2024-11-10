import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadList, addToWishList } from '../../utility/addToDB';

const BookDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const params = useParams();
    const { bookId } = params;
    const id = parseInt(bookId);

    const loaderData = useLoaderData(); 

    const bookDetail = loaderData.find(data => data.bookId === id);

    const { bookId: bookID, image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail;

    const handleAddToReadBook = (id) => {
        console.log('Add to read book', id);
        addToReadList(id); 
    } 

    const handleAddToWishList = (id) => {
        console.log('Add to wish list', id);
        addToWishList(id);
    } 

    return (
        <div className='w-11/12 mx-auto mt-12 flex flex-col md:flex-row gap-12'>
            <figure className="flex justify-center items-center md:w-1/2 space-y-4 bg-[#F3F3F3] rounded-2xl">
                <img
                    src={image}
                    alt={`Cover of the book: ${image}`}
                    className="w-[80%] p-4" />
            </figure>
            <div className='md:w-1/2 space-y-4'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p className='text-lg font-medium'>By : {author}</p>
                <div className='divider'></div>
                <p className='text-lg font-medium'>{category}</p>
                <p><span className='font-bold'>Review : </span> {review}</p>
                <div className='space-x-4'>
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map((tag, idx) => (
                            <button key={idx} className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A] border-none rounded-[30px] font-medium">{tag}</button>
                        ))
                    }
                </div>
                <div className='divider'></div>
                <div className='grid grid-cols-2'>
                    <p className='text-[#131313B3]'>Number of Pages:</p>
                    <span className='font-bold'>{totalPages}</span>
                    <p className='text-[#131313B3]'>Publisher:</p>
                    <span className='font-bold'>{publisher}</span>
                    <p className='text-[#131313B3]'>Year of Publishing:</p>
                    <span className='font-bold'>{yearOfPublishing}</span>

                    <p className='text-[#131313B3]'>Rating:</p>
                    <span className='font-bold'>{rating}</span>
                </div>
                <div className='space-x-4 pt-4'>
                    <button onClick={() => handleAddToReadBook(bookID)} className="btn btn-outline border-[#1313134D] font-semibold">Read</button>
                    <button onClick={() => handleAddToWishList(bookID)} className="btn bg-[#50B1C9] text-white border-none font-semibold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;