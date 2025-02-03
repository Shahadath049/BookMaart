import React from "react";
import { Link } from "react-router";

const Book = (book) => {
  const { publisher, totalPages, author, image, bookName, bookId } = book;
  return (
    <Link className=" w-full" to={`/projects/${bookId}`}>
         <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ">
    <img src={image} alt={bookName} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-lg font-semibold mb-2">{bookName}</h3>
    <p className="text-sm text-gray-600 mb-4">{author}</p>
      <div className="flex justify-between">
      <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
        </svg>
      </span>
      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
        </svg>
      </span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
          <span className="relative text-base font-semibold">Buy Now ${totalPages}</span>
    </button>
    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">WishList</span>
    </button>
    </div>
  </div>
    </Link>
   
  );
};

export default Book;
