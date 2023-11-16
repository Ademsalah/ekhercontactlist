import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import ContactList from './components/contact/ContactList';
import UpdateContact from './components/updatecontact/UpdateContact'
import AddContact from './components/addcontact/AddContact';
import {routes , route, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}   />
        <Route path='/home' element={<homepage/>}   />
        <Route path='/contact' element={<ContactList/>}   />
        <Route path='/add' element = {<AddContact/>} />
        <Route path='/update/:id' element={<UpdateContact/>} />
      </Routes>
   
    </div>
  );
}

export default App;
