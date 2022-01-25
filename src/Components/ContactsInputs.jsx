
import Contacts from "./Contacts";

export default function ContactsInputs({deleteContacts, contactName,contactEmail,contactPhone,nameFunction,phoneFunction,emailFunction,contactsFunction,contacts}) {
  
  
  

  return <div className="contacts-inputs">
    <div className="contacts-inputs-section">
      <input
        onChange={(e) =>  {nameFunction(e)}}
        placeholder="Contact name"
        type="text"
        name=""
        id=""
        value={contactName}
      />
      <input
        onChange={(e) => {phoneFunction(e)}}
        placeholder="Contact phone (ANN-NNN-NNNN)"
        type="number"
        name=""
        id=""
        value={contactPhone}
      />
      <input
        onChange={(e) => {emailFunction(e)}}
        placeholder="Contact email"
        type="email"
        name=""
        id=""
        value={contactEmail}
      />
     
      <button onClick={contactsFunction}>Add Contact</button>
    </div>
    <Contacts deleteContacts={deleteContacts} contacts = {contacts} />
  </div>;
}
