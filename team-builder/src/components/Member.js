import React from "react";

const Member = props => {
  return (
    <div class="member-container">
      {props.teamMember.map((member, index) => (
        <div className= "member-card" key={index}>
          <h2>{member.name}</h2>
          <p>{`Email: ${member.email}`}</p>
          <p>{`Location: ${member.location}`}</p>
          <p>{`Role: ${member.role}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Member;