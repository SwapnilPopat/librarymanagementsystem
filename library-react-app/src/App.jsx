import { useState } from "react";

function App() {
  const [books, setBooks] = useState(["Clean Code", "Harry Potter", "The Alchemist","Mastery"]);
  const [newBook,setNewBook] = useState("");

  function handleAddBook(){
    if(newBook.trim() === "") return;
    setBooks([...books,newBook]);
    setNewBook("");
  }


  return (
    <div>
      <h1>Library Management App</h1>
      <h2>Book List</h2>
      <input
          type="text"
          placeholder="Enter new book name"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)} />

      <ul>
        {
        books.map((book, index) => (<li key={index}>{book}</li>))
        }
      </ul>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default App;