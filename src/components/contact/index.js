import { useState , useEffect } from 'react' 
import "./style.css"
import List from './List'
import Form from './Form'
function Contacts() {
  const [contacts , setContacts] = useState([
    { 
      fullname: 'Emin',
      phone_number: '532532'
    }, {
      fullname: 'Özlem',
      phone_number: '531531'
    }
  
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts])  ;
  return (
    <div id="container">
      <h1>Contacts</h1>
        <Form addContact={setContacts} contacts={contacts}/>
        <List contacts={contacts} /> 
    </div>
  );
}

export default Contacts; 