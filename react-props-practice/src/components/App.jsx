import React from "react";
import Contacts from "../contacts.js";
import Avatar from "./avatar.jsx";
import Card from "./card.jsx";

function createCard(Contacts) {
  return (
    <Card
      key={Contacts.id}
      name={Contacts.name}
      img={Contacts.imgURL}
      phoneNumber={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://qphs.fs.quoracdn.net/main-thumb-199337501-200-cicistcuzmveccaybmmbmbccxdmkaigk.jpeg" />

      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
