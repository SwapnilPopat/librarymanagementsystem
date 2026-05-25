import { useState } from "react";
import BookList from "./BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    "Clean Code",
    "Harry Potter",
    "The Alchemist",
  ]);
  const [newBook, setNewBook] = useState("");
  const [search, setSearch] = useState("");

  function handleAddBook() {
    if (newBook.trim() === "") return;
    setBooks([...books, newBook]);
    setNewBook("");
  }

  function handleDeleteBook(indexToDelete) {
    const updatedBooks = books.filter((book, index) => index !== indexToDelete);
    setBooks(updatedBooks);
  }

  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management App</h1>
      <h2>Book List</h2>

      <input
        type="text"
        placeholder="Enter book name"
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>

      <br /><br />

      <input
        type="text"
        placeholder="Search book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filteredBooks} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;