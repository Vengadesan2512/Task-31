import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constants/Api';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [id, setId] = useState('');
   const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [isbn,setIsbn]=useState("")
  const [publication,setBublication]=useState("")
  const [birth,setBirth]=useState("")
  const [notes,setNotes]=useState("")
  const navigate = useNavigate();

  // Function to update user
  const updateUser = async () => {
    await axios.put(API_URL + id, {
      title,
    author,
    isbn,
    publication,
    birth,
    notes
    });
    navigate('/');
  };

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setTitle(localStorage.getItem('title'));
    setAuthor(localStorage.getItem('author'));
    setIsbn(localStorage.getItem('isbn'));
    setBublication(localStorage.getItem('publication'));
    setBirth(localStorage.getItem('birth'));
    setNotes(localStorage.getItem('notes'));
  }, []); // Empty dependency array to run the effect only once after the component mounts

  return (
    <div className='create-m'>
    <h1>BOOK STORE</h1>
    <div>
      <div className="wave-group">
  <input value={title} onChange={event=>setTitle(event.target.value)} required="" type="text" className="input" />
  <span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{ '--index': 0 }}>T</span>
    <span className="label-char" style={{ '--index': 1 }}>I</span>
    <span className="label-char" style={{ '--index': 2 }}>T</span>
    <span className="label-char" style={{ '--index': 3 }}>L</span>
     <span className="label-char" style={{ '--index': 0 }}>E</span>
   
  </label>
</div>
<br/><br/>
   <div className="wave-group">
  <input value={author} required="" type="text" onChange={event=>setAuthor(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>A</span>
    <span className="label-char" style={{ '--index': 1 }}>U</span>
    <span className="label-char" style={{ '--index': 2 }}>T</span>
     <span className="label-char" style={{ '--index': 0 }}>H</span>
    <span className="label-char" style={{ '--index': 1 }}>O</span>
    <span className="label-char" style={{ '--index': 2 }}>R</span>
  </label>
</div>
<br/>
<br/>
 <div className="wave-group">
  <input value={birth} required="" type="text" onChange={event=>setBirth(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>B</span>
    <span className="label-char" style={{ '--index': 1 }}>I</span>
    <span className="label-char" style={{ '--index': 2 }}>R</span>
     <span className="label-char" style={{ '--index': 0 }}>T</span>
    <span className="label-char" style={{ '--index': 1 }}>H</span>
    <span className="label-char" style={{ '--index': 2 }}>D</span>
    <span className="label-char" style={{ '--index': 1 }}>A</span>
    <span className="label-char" style={{ '--index': 1 }}>T</span>
    <span className="label-char" style={{ '--index': 2 }}>E</span>
  </label>
</div>
<br/>
<br/>
   <div className="wave-group">
  <input value={isbn} required="" type="text" onChange={event=>setIsbn(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>I</span>
    <span className="label-char" style={{ '--index': 1 }}>S</span>
    <span className="label-char" style={{ '--index': 2 }}>B</span>
     <span className="label-char" style={{ '--index': 0 }}>N</span>
  </label>
</div>
<br/><br/>
   <div className="wave-group">
  <input value={publication} required="" type="text" onChange={event=>setBublication(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>P</span>
    <span className="label-char" style={{ '--index': 1 }}>U</span>
    <span className="label-char" style={{ '--index': 2 }}>B</span>
     <span className="label-char" style={{ '--index': 0 }}>L</span>
    <span className="label-char" style={{ '--index': 1 }}>I</span>
    <span className="label-char" style={{ '--index': 2 }}>C</span>
      <span className="label-char" style={{ '--index': 0 }}>A</span>
    <span className="label-char" style={{ '--index': 1 }}>T</span>
    <span className="label-char" style={{ '--index': 2 }}>I</span>
     <span className="label-char" style={{ '--index': 0 }}>O</span>
    <span className="label-char" style={{ '--index': 1 }}>N</span>
   
  </label>
</div>
<br/><br/>
   <div className="wave-group">
  <textarea value={notes} id="myTextarea" name="myTextarea" rows="4" cols="30" onChange={event=>setNotes(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>S</span>
    <span className="label-char" style={{ '--index': 1 }}>H</span>
    <span className="label-char" style={{ '--index': 2 }}>O</span>
     <span className="label-char" style={{ '--index': 0 }}>R</span>
    <span className="label-char" style={{ '--index': 1 }}>T</span>
    <span className="label-char" style={{ '--index': 2 }}>N</span>
      <span className="label-char" style={{ '--index': 0 }}>O</span>
    <span className="label-char" style={{ '--index': 1 }}>T</span>
    <span className="label-char" style={{ '--index': 2 }}>E</span>
     <span className="label-char" style={{ '--index': 0 }}>S</span>
   
   
  </label>
</div>
{/* <div className='check'><input onChange={()=>setCheckBox(!checkBox)} checked={checkBox} type="checkbox" defaultChecked className="checkbox" /> Agree terms and conditions */}
</div>   
<div>
  |<button className='btn' onClick={updateUser} >Submit</button>
</div>




    </div>
  );
}

export default Update;

