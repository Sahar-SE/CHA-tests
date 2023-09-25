import React, { useState } from 'react';

function UserData() {
  const [formData, setFormData] = useState({ name: '', email: '',skill: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server
    fetch('http://localhost:4000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle server response here
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="container">
  <div className="brand-logo"></div>
  <div className="brand-title">Report</div>
  <div className="inputs"></div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

        <select id="programming-language" name="skill" value={formData.skill} onChange={handleChange}>
          <option style={{color:'gray'}} value="">Select a language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
        </select>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />

        
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default UserData;