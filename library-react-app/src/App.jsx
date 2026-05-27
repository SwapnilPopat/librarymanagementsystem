import { useState, useEffect , useMemo } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import SearchBar from "./SearchBar";
import "./App.css";


function App() {
const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks
      ? JSON.parse(savedBooks)
      : [
          { id: 1, title: "Clean Code", issued: false },
          { id: 2, title: "Harry Potter", issued: true },
          { id: 3, title: "The Alchemist", issued: false },
        ];
  });

  const [newBook, setNewBook] = useState("");
  const [search, setSearch] = useState("");

  const totalBooks = books.length;
  const issuedBooks = books.filter((book) => book.issued).length;
  const availableBooks = books.filter((book) => !book.issued).length;

  const filteredBooks = useMemo(() => {
  return books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
}, [books, search]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  
function handleAddBook() {
    if (newBook.trim() === "") return;

    const bookToAdd = {
      id: Date.now(),
      title: newBook,
      issued: false,
    };

    setBooks([...books, bookToAdd]);
    setNewBook("");
  }

function handleDeleteBook(idToDelete) {
  const updatedBooks = books.filter((book) => book.id !== idToDelete);
  setBooks(updatedBooks);
}

function toggleIssued(idToToggle) {
  const updatedBooks = books.map((book) =>
    book.id === idToToggle ? { ...book, issued: !book.issued } : book
  );
  setBooks(updatedBooks);
}

function handleEditBook(idToEdit) {
  const updatedTitle = prompt("Enter new book title:");
  if (!updatedTitle || updatedTitle.trim() === "") return;

  const updatedBooks = books.map((book) =>
    book.id === idToEdit ? { ...book, title: updatedTitle } : book
  );

  setBooks(updatedBooks);
}


  return (
    <div className="container">
      <h1>Library Management App</h1>
      <h2>Book List</h2>

      <BookForm
        newBook={newBook}
        setNewBook={setNewBook}
        onAddBook={handleAddBook}
      />

      <br /><br />

      <SearchBar search={search} setSearch={setSearch} />

      <p>Total: {totalBooks}</p>
      <p>Issued: {issuedBooks}</p>
      <p>Available: {availableBooks}</p>

      <BookList
        books={filteredBooks}
        onDelete={handleDeleteBook}
        onToggleIssued={toggleIssued}
        onEditBook={handleEditBook}
      />
    </div>
  );
}

export default App;