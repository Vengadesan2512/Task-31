

import React, { useState } from 'react'
import { API_URL } from '../Constants/Api'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { bookSchema } from '../Constants/Schema'
import {useFormik} from 'formik'
function Create() {
  
   const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [isbn,setIsbn]=useState("")
  const [publication,setBublication]=useState("")
  const [birth,setBirth]=useState("")
  const [notes,setNotes]=useState("")
  const navigate = useNavigate();
  // ---------------------------------------------
  const{values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched
}=useFormik({
  initialValues:{
  title:"",
    isbn:"",
    birth:"",
    author:'',
    publication:"",
    notes:""
   
  },
  validationSchema:bookSchema,
  onSubmit:async (values) => {
            try {
                await postData(values);
                navigate('/read');
            } catch (error) {
                console.error('Error creating book:', error);
                // Handle error
            }
        }
    });
  // ---------------------------------------------------


const postData=async()=>{

     await axios.post(API_URL,{
    title,
    isbn,
    birth,
    author,
    publication,
    notes
   });
  navigate('/')

    
  }
  

  return (
  <div className='create-m'>
    <form onSubmit={handleSubmit} onChange={handleChange} >
    <h1>LIBRARY MANAGEMENT</h1>
<div className='cinput'>
      <div className="wave-group">
  <input id="title"  value={values.title} onBlur={handleBlur}  onChange={event=>setTitle(event.target.value)} required="" type="text" className="input"  />
  <span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{ '--index': 0 }}>T</span>
    <span className="label-char" style={{ '--index': 1 }}>I</span>
    <span className="label-char" style={{ '--index': 2 }}>T</span>
    <span className="label-char" style={{ '--index': 3 }}>L</span>
     <span className="label-char" style={{ '--index': 0 }}>E</span>
   
  </label>
</div>
{touched.title && errors.title?(
<div className="text-red-400" style={{color:'red'}} >{errors.title}</div>
  ):(
    ""
    )}

<br/>

<br/>
   <div className="wave-group">
  <input id="author" value={values.author} onBlur={handleBlur} onChange={event=>setAuthor(event.target.value)} className="input" />
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

{touched.author && errors.author?(
<div className="text-red-400"style={{color:'red'}}>{errors.author}</div>
  ):(
    ""
    )}
<br/>

<br/>
 <div className="wave-group">
  <input id="isbn" value={values.isbn} onBlur={handleBlur}  onChange={event=>setIsbn(event.target.value)} className="input" />
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

{touched.isbn && errors.isbn?(
<div className="text-red-400"style={{color:'red'}}>{errors.isbn}</div>
  ):(
    ""
    )}
<br/>

<br/>
   <div className="wave-group">
  <input id="publication" value={values.publication} onBlur={handleBlur}  onChange={event=>setBublication(event.target.value)} className="input" />
  <span className="bar"></span>
  <label className="label">
     <span className="label-char" style={{ '--index': 0 }}>I</span>
    <span className="label-char" style={{ '--index': 1 }}>S</span>
    <span className="label-char" style={{ '--index': 2 }}>B</span>
     <span className="label-char" style={{ '--index': 0 }}>N</span>
  </label>
</div>

{touched.publication && errors.publication?(
<div className="text-red-400 "style={{color:'red'}}>{errors.publication}</div>
  ):(
    ""
    )}
<br/><br/>
   <div className="wave-group">
  <input id="birth" value={values.birth} onBlur={handleBlur}  onChange={event=>setBirth(event.target.value)} className="input" />
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

{touched.birth && errors.birth?(
<div className="text-red-400"style={{color:'red'}}>{errors.birth}</div>
  ):(
    ""
    )}
<br/>
  
<br/>
   <div className="wave-group" >
  <textarea id="nodes" value={notes}  onChange={event=>setNotes(event.target.value)} className="input" />
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
{touched.notes && errors.notes?(
<div className="text-red-400"style={{color:'red'}}>{errors.notes}</div>
  ):(
    ""
    )}

</div>  
<div>
  |<button onClick={postData} type='submit' className='btn'>Create</button>
</div>
    </form>
 </div>


 
  )
}

export default Create
