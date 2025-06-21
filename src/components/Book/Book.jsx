import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, tags } = book;
  return (
    <Link to={`book/${bookId}`}>
      <div className="card bg-base-100 border-[1px] border-gray-200 w-96  shadow-sm">
        <div className="p-7 rounded-lg ">
          <figure className="bg-gray-100">
            <img
              src={image}
              className="w-[160px] my-5 py-4 h-[190px] rounded-lg"
              alt={bookName}
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              {tags.map((tag, id) => (
                <div
                  key={id}
                  className="badge    bg-gray-100 px-4 py-1 text-green-500 font-semibold"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="card-title text-2xl">{bookName}</h2>
            <p className="my-2 text-xl font-semibold">By: {author}</p>
            <hr className="w-full border-[1px] border-dashed" />
            <div className="card-actions justify-between mt-5">
              <div className="">{category}</div>
              <div className="flex gap-2">
                <div>
                  <span className="font-bold text-gray-500">5</span>
                </div>
                <div className="rating ">
                  <div className="mask mask-star" aria-label="5 star"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
