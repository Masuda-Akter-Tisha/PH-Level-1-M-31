import './App.css';
export default function Book ({book, price}){
    return (
        <li className="book">name: {book}, price:{price}</li>
    )
}