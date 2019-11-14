import React, {useState} from 'react';
import './App.css';
import MemberForm from './components/MemberForm';
import Member from './components/Member';

function App() {
  const [teamMember, setTeamMember] = useState([{}]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
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
      <MemberForm addNewMember={addNewMember}/> 
      <Member teamMember={teamMember} />
    </div>
  ); 
}

export default App;
