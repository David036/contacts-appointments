import React from "react";

export default function Contacts({ deleteContacts, contacts }) {
  return (
    <div className="contacts">
      <div className="contacts-section">
        {contacts.map((el)=> {
            return (
              <div className="contact-item">
          <div className="item-left">
            <h1>{el.contactName}</h1>
          </div>
          <div className="item-right">
            <div className="item-right">
              <h5>{el.contactEmail}</h5>
              <p>{el.contactPhone}</p>
              <button onClick={()=> deleteContacts(el)}>Remove</button>
            </div>
          </div>
        </div>
            )

          })}
        
      </div>
    </div>
  );
}
