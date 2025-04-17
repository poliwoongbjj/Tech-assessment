import "./Favorites.css";

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites-list">
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites added yet</p>
      ) : (
        favorites.map((book, index) => (
          <div key={index} className="favorite-book">
            <div className="favorite-content">
              <div className="favorite-author">{book.author}</div>
              <h2 className="favorite-title">{book.title}</h2>
              <div className="favorite-pages">{book.pages} pages</div>
              <div className="favorite-image">
                <img src={`/${book.imageLink}`} alt={book.title} />
              </div>
              <div className="favorite-actions">
                <button className="read-more-btn">READ MORE</button>
                <button
                  className="remove-favorite-btn"
                  onClick={() => toggleFavorite(book)}
                >
                  <span className="btn-icon">-</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
