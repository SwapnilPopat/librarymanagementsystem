function BookList({books, onDelete}){
    return(
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    {book}{" "} <button onClick={() => onDelete(index)} > Delete </button>
                </li>
            ))}
        </ul>
    );
}

export default BookList;