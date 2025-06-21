import book from "../../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={book} className="max-w-2/4 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary mt-8">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
