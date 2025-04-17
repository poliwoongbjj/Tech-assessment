import { useState, useEffect } from "react";
import "./App.css";
import { BookList, Favorites } from "./components";

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch books from the JSON file
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => {
        // Get only the first 20 books as required
        const firstTwentyBooks = data.slice(0, 20);
        setBooks(firstTwentyBooks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setIsLoading(false);
      });
  }, []);

  // Function to toggle a book as favorite
  const toggleFavorite = (book) => {
    if (favorites.some((fav) => fav.title === book.title)) {
      // Remove from favorites if already in the list
      setFavorites(favorites.filter((fav) => fav.title !== book.title));
    } else {
      // Add to favorites
      setFavorites([...favorites, book]);
    }
  };

  // Check if a book is in favorites
  const isFavorite = (book) => {
    return favorites.some((fav) => fav.title === book.title);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="section-container">
          <h1>Books</h1>
          <div className="books-section">
            {isLoading ? (
              <p>Loading books...</p>
            ) : (
              <BookList
                books={books}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            )}
          </div>
        </div>

        <div className="section-container">
          <h1>Favourites</h1>
          <div className="favorites-section">
            <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
