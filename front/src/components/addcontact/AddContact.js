import React,{useState} from 'react'
 import './AddContact.css'
import { postContact } from '../../api/contactapi'
 import {useNavigate} from 'react-router'
const AddContact = () => {


  const navigate = useNavigate()



  const [name,setName]=useState('')
  const [lastName,setLastName]=useState(0)
  const [email,setEmail]=useState('')
  const [age,setAge]=useState(0)

  const handelAdd = async(value)=>{
    await postContact(value)
    navigate('/contact')
  }
  return (
    <div className="container">
  <div className="card">
    <div className="card-image">
      <h2 className="card-heading">
        Get started
        <small>Let us create your account</small>
      </h2>
    </div>
    <form className="card-form">
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="Alexander Parkinson"
          required=""
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <label className="input-label">name</label>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-field"
          required=""
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label className="input-label">Email</label>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-field"
          required=""
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
        <label className="input-label">Last name</label>
      </div>
      <div className="input">
        <input type="text" className="input-field" required=""  value={age} onChange={(e)=>setAge(e.target.value)} />
        <label className="input-label">age</label>
      </div>
      <div className="action">
        <button className="action-button"  type='button' onClick={()=>handelAdd({name,lastName,age,email})}>Add contact</button>
      </div>
    </form>
   
  </div>
</div>

  )
}

export default AddContact
