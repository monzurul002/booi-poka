import { useLoaderData, useParams } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoredReadList } from "../../utilities/addTodb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const storedBookLists = getStoredReadList();
    const storeIdListInt = storedBookLists.map((id) => parseInt(id));
    const readBookList = books.filter((book) =>
      storeIdListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  console.log(readList);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center font-bold text-xl">My Read List</h2>
          <div className="grid grid-cols-3 gap-2.5">
            {readList.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-center font-bold text-xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
