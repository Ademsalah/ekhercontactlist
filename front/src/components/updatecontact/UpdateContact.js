import React,{useState} from 'react'
import './UpdateContact.css'
import {UpdateContacts} from '../../api/contactapi'
import { useNavigate,useParams } from 'react-router'

const Updatecontact = () => {

  const navigate = useNavigate()
  const {id} = useParams
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState(0)
  const [email,setEmail]=useState('')
  const [age,setAge]=useState(0)
  
  const handelUpdate=async(values)=>{
    await UpdateContacts(values,id)
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
          <button className="action-button"  type='button' onClick={()=>handelUpdate(id,{name,lastName,age,email})}>Add contact</button>
        </div>
      </form>
      <div className="card-info">
        <p>
          By signing up you are agreeing to our{" "}
          <a href="#">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Updatecontact
