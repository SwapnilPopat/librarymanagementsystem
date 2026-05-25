function BookList({books, onDelete, onToggleIssued}){
    return(
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    {book.title} - {book.issued ? "Issued" : "Available"}{" "}
                    <button onClick={() => onToggleIssued(index)}> Toggle Status </button>
                    {" "}
                    <button onClick={() => onDelete(index)} > Delete </button>
                </li>
            ))}
        </ul>
    );
}

export default BookList;