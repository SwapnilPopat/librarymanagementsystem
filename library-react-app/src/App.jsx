function App() {
  const books = ["Clean Code", "Harry Potter", "The Alchemist","Mastery"];

  function handleClick(){
    alert("Book button clicked");
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
      <button onClick={handleClick}>Add Book</button>
    </div>
  );
}

export default App;