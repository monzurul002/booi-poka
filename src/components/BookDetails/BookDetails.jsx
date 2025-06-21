import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();

  const book = data.find((book) => parseInt(book.bookId) === parseInt(bookId));
  const {
    bookId: id,
    image,
    author,
    bookName,
    category,
    review,
    tags,
    publisher,
    totalPageNumber,
    yearOfPublishing,
    rating,
  } = book;
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
        <div className="py-2 space-y-3">
          <span className="font-bold mr-3">Tag:</span>{" "}
          {tags.map((tag, id) => (
            <div
              key={id}
              className="badge    bg-gray-100 px-4 py-1 text-green-500 font-semibold"
            >
              {tag}
            </div>
          ))}
          <p>Number of Pages: {totalPageNumber}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Publisher:{publisher} </p>
          <p>Rating: {rating}</p>
          <div className="flex gap-x-3">
            <button className="btn">Read </button>
            <button className="bg-cyan-400 px-4 btn rounded-lg text-white">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
