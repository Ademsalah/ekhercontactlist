import axios from 'axios'



export const fetchAllContact = async()=>{
    const {data} = await axios.get('http://localhost:5002/contact/getall')
    return data
}
export const postContact = async(values)=>{
    const addContact = await axios.post('http://localhost:5002/contact/addcontact',{...values})
}

export const UpdateContacts = async (id,values)=>{
    const updateContact = await axios.put(`http://localhost:5002/contact/update/${id}`,values)
}

export const deleteContact = async(id)=>{
    const deletedContact = await axios.delete(`http://localhost:5002/contact/delete/${id}`)
}

export const getuniqueContact = async(id)=>{
    const {data} = await axios.get(`http://localhost:5002/contact/unique/${id}`)
    return data
}
