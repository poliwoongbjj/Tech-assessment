import BookCard from "./BookCard";
import "./BookList.css";

const BookList = ({ books, toggleFavorite, isFavorite }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite(book)}
        />
      ))}
    </div>
  );
};

export default BookList;
