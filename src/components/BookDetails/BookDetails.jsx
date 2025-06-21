import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();

  const book = data.find((book) => parseInt(book.bookId) === parseInt(bookId));
  const { bookId: id, image, author, bookName, category, review } = book;
  return (
    <div className="flex">
      <div className="w-1/2 bg-gray-100 rounded-lg mx-5">
        <img src={image} className="w-1/2 mx-auto py-5" alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p className="text-xl py-2">By : {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p> Review: {review} </p>
      </div>
    </div>
  );
};

export default BookDetails;
