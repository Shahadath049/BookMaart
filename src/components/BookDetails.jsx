import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router";
import Dcard from "./Dcard";

const BookDetails = () => {
  const { bookId } = useParams();

  
    const data = useLoaderData();

    
    const book = data.find((book) => book.bookId ===  parseInt(bookId));
    
  return (
    <div className="container mx-auto">
      <Dcard bookId={bookId} selectedBook={book}></Dcard>
    </div>
  );
};

export default BookDetails;
