function BookForm({ newBook, setNewBook, onAddBook }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter book name"
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button onClick={onAddBook}>Add Book</button>
    </div>
  );
}

export default BookForm;