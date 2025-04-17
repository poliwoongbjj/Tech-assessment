import "./BookCard.css";

const BookCard = ({ book, toggleFavorite, isFavorite }) => {
  return (
    <div className="book-card">
      <div className="book-author">{book.author}</div>
      <h2 className="book-title">{book.title}</h2>
      <div className="book-pages">{book.pages} pages</div>
      <div className="book-image">
        <img src={`/${book.imageLink}`} alt={book.title} />
      </div>
      <div className="book-actions">
        <button className="read-more-btn">READ MORE</button>
        <button className="favorite-btn" onClick={() => toggleFavorite(book)}>
          <span className="btn-icon">+</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
