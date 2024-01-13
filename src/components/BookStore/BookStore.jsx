import React, { useState } from "react";
import BookCard from "./BookCard";
import { booksData } from "../../data/booksData";
import SearchBox from "./SearchBox";
import BooksNotFound from "./BooksNotFound";
import FilterBar from "./FilterBar";

const BookStore = () => {
  const [books, setBooks] = useState(booksData);

  //Handle Favorite
  const handleFavorite = (bookId) => {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavorite = !newBooks[bookIndex].isFavorite;
    setBooks(newBooks);
  };
  //Handle Search
  const handleSearch = (searchAction) => {
    if (!searchAction) {
      setBooks(booksData);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchAction.toLowerCase())
      );
      setBooks([...filteredBooks]);
    }
  };
  //Handle Sort
  const [sortCriteria, setSortCriteria] = useState("A-Z");
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    console.log(criteria);
    const sortedBooks = [...books];

    switch (criteria) {
      case "A-Z":
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Oldest":
        sortedBooks.sort(
          (a, b) => new Date(a.publishedDate) - new Date(b.publishedDate)
        );
        break;
      case "Newest":
        sortedBooks.sort(
          (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
        );
        break;
      default:
        break;
    }
    setBooks(sortedBooks);
  };

  return (
    <>
      <main className="my-10 lg:my-14">
        {/* Actions Header */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            {/* <!-- info , title , search --> */}
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2024</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
              {/* <!-- Search Box --> */}
              <SearchBox onSearch={handleSearch} />
            </div>
            {/* <!-- sort - filter --> */}
            <FilterBar sortCriteria={sortCriteria} handleSort={handleSort} />
          </div>
        </header>
        {/* <!-- Book Grid --> */}
        {books.length > 0 ? (
          <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- Book Item --> */}
            <BookCard books={books} onClickFav={handleFavorite} />
          </div>
        ) : (
          <BooksNotFound />
        )}
      </main>
    </>
  );
};

export default BookStore;
