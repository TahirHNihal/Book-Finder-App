import React from "react";
import StarImg from "../../assets/star.svg";
import BookImg from "../../assets/book.png";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const BookCard = ({ books, onClickFav }) => {
  return (
    <>
      {books.map((book) => (
        <div className="space-y-3" key={book.id}>
          {/* <!-- thumbnail --> */}
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white  p-4">
            <img className="max-w-[144px]" src={book.bookImg} alt="book name" />
          </div>
          {/* <!-- info --> */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
            <p className="text-xs lg:text-sm">
              By : <span>{book.writer}</span>
            </p>
            <p className="text-xs lg:text-sm">
              Published On : <span>{book.publishedDate}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
              {/* <!-- stars --> */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: book.stars }, (_, index) => (
                  <FaStar key={index} className="text-[#ffc700]" />
                ))}
                {/* <FaStar className="text-[#ffc700]" /> */}
                <span className="text-xs lg:text-sm">{`(${book.stars} Star)`}</span>
              </div>
              {/* <!-- stars ends --> */}
            </div>
            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <HiOutlineShoppingCart className="text-[20px]" />
                Add to Cart
              </button>

              <button
                className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-${
                  book.isFavorite ? "[#DC2954]/[14%]" : "[#1C4336]/[14%]"
                } py-1.5 text-${
                  book.isFavorite ? "[#DC2954]" : "[#1C4336]"
                } transition-all hover:bg-${
                  book.isFavorite ? "[#DC2954]/[24%]" : "[#1C4336]/[24%]"
                } lg:py-1.5`}
                onClick={() => onClickFav(book.id)}
              >
                {book.isFavorite ? (
                  <IoHeartSharp className=" text-[18px]" />
                ) : (
                  <IoHeartOutline className=" text-[18px]" />
                )}
                Favorite
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;
