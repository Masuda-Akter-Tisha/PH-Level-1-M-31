import Book from "./Book";

export default function Library ({books}) {
    console.log(books);
    
    return (
       <div>
         <h3>My central national Library</h3>
         <p>MY book collection : {books.length}</p>
         <p>address: </p>
        <ul>
           {books.map (book => <Book key = {book.id} book = {book.name} price = {book.price}></Book>)}
        </ul>
       </div>
    )
}