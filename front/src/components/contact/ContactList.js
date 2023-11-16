import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {setContact} from '../../store/contactSlice'
import {fetchAllContact} from '../../api/contactapi'
const ContactList = () => {
  const contact = useSelector(state=>state.contactElement)
  console.log('contactElement',contact)

const dispatch = useDispatch()

const getAllContact = async()=>{
  const data = await fetchAllContact()
    console.log('data jeyamil data base',data.contacts)
    dispatch(setContact(data.contacts))
}

useEffect(()=>{
  getAllContact()
},[])

  return (
    <div>
      {
        contact.map((e)=><ContactCard mini={e} getAllContact={getAllContact}/> )
      }
      
    </div>
  )
}

export default ContactList
