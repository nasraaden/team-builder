import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Nasra Aden",
      email: "myemail@nasra.com",
      location: "Portland, OR",
      role: "Front End Developer"
  }]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      location: member.location,
      role: member.role
    };
    setTeamMember ([...teamMember, newMember]);
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember}/> 
      <Member teamMember={teamMember} />
    </div>
  ); 
}

export default App;
