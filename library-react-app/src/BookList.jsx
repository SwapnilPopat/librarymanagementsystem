function BookList({ books, onDelete, onToggleIssued, onEditBook }) {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.issued ? "Issued" : "Available"}{" "}
          <button onClick={() => onToggleIssued(book.id)}>Toggle Status</button>{" "}
          <button onClick={() => onEditBook(book.id)}>Edit</button>{" "}
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;