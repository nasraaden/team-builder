import React, {useState} from "react";

const MemberForm = (props) =>{

    const [member, setMember] = useState({name: "", email: "", location: "", role: ""});

    const handleChange = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
      };

      const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", location: "", role: ""});
      };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value= {member.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value= {member.email}
            />
            <label htmlFor="location">Location</label>
            <input
                id="location"
                type="text"
                name="location"
                onChange={handleChange}
                value= {member.location}
            />
            <select id="role" name="role" onChange={handleChange} value= {member.role}> 
                <option>Select Role</option>
                <option>Project Manager</option>
                <option>Front End Developer</option>
                <option>Full Stack Developer</option>
                <option>Graphic Artist</option>
                <option>Illustrator</option>
                onChange={handleChange}
                value= {member.role}
            </select>
            <button type="submit">Add Member</button>
    
        </form>
    )
}

export default MemberForm;