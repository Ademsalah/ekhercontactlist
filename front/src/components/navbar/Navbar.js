import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
  
  <p data-item="contact App">contact App</p>
  <section>
    <div>Real time example, contact App</div>
    <nav>
      <ul className="menuItems">
        <li>
          <a href="#" data-item="Home">
            <Link to={'/'}>home</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item="ContactList">
          <Link to={'/contact'}>contactList</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item="Addcontact">
          <Link to={'/add'}>addContact</Link>
          </a>
        </li>
        <li>
          <a href="#" data-item="login/logout">
          <Link to={'/update/:id'}>login/logout</Link>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</>

  )
}

export default Navbar
