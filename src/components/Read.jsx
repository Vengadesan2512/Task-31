import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../Constants/Api'
import Create from './Create';
import {useNavigate} from 'react-router-dom'



function Read() {
  
 const navigate = useNavigate()
  const [apiData , setAPIData]=useState([]);
  const updateUser=({title,author,isbn,publication,birth,notes,id})=>{
    localStorage.setItem('id',id)
     localStorage.setItem('title',title)
      localStorage.setItem('author',author)
       localStorage.setItem('isbn',isbn)
        localStorage.setItem('publication',publication)
      localStorage.setItem('birth',birth)
       localStorage.setItem('notes',notes)
navigate('/update')
  }
    // for delete function
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Ensure correct URL construction
      callGetAPI();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  const callGetAPI = async()=>{
    const resp =await axios.get(API_URL);
    setAPIData(resp.data)
  }
  useEffect(()=>{callGetAPI()},[])
 
  return (
   <div className='mainread'>
     <div className='rpb'>
      <button onClick={()=>navigate('/create')}>ADD DETAILS</button>
       <div className='heading'> <h1>Books Library</h1></div>
<table className="contact-table">
   
      <thead>
        <tr>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>ISBN</th>
          <th>PUBLICATION</th>
          <th>BIRTH</th>
          <th>NOTES</th>
          <th>DELETE</th>
          <th>UPDATE</th>
        </tr>
      </thead>
      <tbody>
     
        {apiData.map(data => (
          <tr key={data.id}> 
            <td>{data.title}</td>
            <td>{data.author}</td>
            <td>{data.isbn}</td>
            <td>{data.publication}</td>
            <td>{data.birth}</td>
            <td>{data.notes}</td>
             <td><button onClick={()=>deleteUser(data.id)} className='d-b'>Delete</button></td>
             <td><button onClick={()=>updateUser(data)}  className='u-b'>UPDATE</button></td>
          </tr>
          
        ))}
      </tbody>
    </table>
    </div>
   </div>
   
   
  )
}

export default Read