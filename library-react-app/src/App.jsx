import { useState } from "react";

function App() {
  const [books, setBooks] = useState(["Clean Code", "Harry Potter", "The Alchemist","Mastery"]);

  function handleAddBook(){
    setBooks([...books,"New Book"]);
  }
  return (
    <div>
      <h1>Library Management App</h1>
      <h2>Book List</h2>

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