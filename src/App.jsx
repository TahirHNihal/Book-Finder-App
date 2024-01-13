import React from "react";
import StarImg from "./assets/star.svg";
import BookImg from "./assets/book.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookStore from "./components/BookStore/BookStore";

const App = () => {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Book Store Section */}
      <BookStore />
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
