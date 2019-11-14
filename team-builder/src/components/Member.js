import React from "react";

const Member = props => {
  return (
    <div>
      {props.teamMember.map((member, index) => (
        <div className= "member-container" key={index}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.location}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Member;