import React, { useState } from "react"
import Notes from "./note.jsx"
import Books from "../data.js"

function Header() {
    const [value, setValue] = useState(false);

    function toggleState() {
        setValue(!value);
    }

    function toreturn(value){
      if(value) return "fa fa-thumbs-o-up"
      else return "fa fa-thumbs-up"
    }

    return (
      <div>
        <header><h1>Library</h1></header>
        <table className = "table table-striped">
        <tr>
        <th> ID </th>
         <th> Book Name </th>
         <th> Author Name </th>
         <th> Liked </th>
         </tr>
        {Books.map(book => (
          <tr>
                <td><Notes name = {book.id}/></td>
                <td><Notes name = {book.Name}/></td>
                <td><Notes name = {book.Author}/></td>
                <td><Notes name = {<button onClick = {toggleState} className = "btn"><i className = {toreturn(value)} /></button>}/></td>
          </tr>
            ))}
        </table>
        </div>
    );
}

export default Header;
