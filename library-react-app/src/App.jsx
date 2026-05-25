import { useState } from "react";
import BookList from "./BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { title: "Clean Code", issued: false },
    { title: "Harry Potter", issued: true },
    { title: "The Alchemist", issued: false },
  ]);
  const [newBook, setNewBook] = useState("");
  const [search, setSearch] = useState("");

  function handleAddBook() {
    if (newBook.trim() === "") return;

    setBooks([...books, { title: newBook, issued: false }]);
    setNewBook("");
  }

  function handleDeleteBook(indexToDelete) {
    const updatedBooks = books.filter((book, index) => index !== indexToDelete);
    setBooks(updatedBooks);
  }

  function toggleIssued(indexToToggle) {
    const updatedBooks = books.map((book, index) =>
      index === indexToToggle ? { ...book, issued: !book.issued } : book
    );
    setBooks(updatedBooks);
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
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

      <BookList
        books={filteredBooks}
        onDelete={handleDeleteBook}
        onToggleIssued={toggleIssued}
      />
    </div>
  );
}

export default App;