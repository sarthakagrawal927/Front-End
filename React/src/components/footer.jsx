import React from "react"

var dt = new Date();
var year = dt.getFullYear();

function Footer(){
  return(
    <footer><p>Copyright {year}</p></footer>
  );
}

export default Footer;
