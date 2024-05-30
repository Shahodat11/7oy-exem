import React, {useState} from 'react'
import '../contact/contact.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const BOT_TOKEN = "6343815630:AAFHqRmYuj5TZx_20bP74N4JdVOO1RCUxw8"
const CHAT_ID = "-1002012016821"
const USER_ID = "1427172949"

let initialState = {
  fullname: "" ,
  email: "" ,
}
const Contact = () => {
   let [data, setData] = useState(initialState)
    const handleSubmit = e => {
        e.preventDefault()

        let text = "Buyurtma"
        text += data.fullname
        text += data.email

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
    }   
    return (
    <>
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className="contact-page">
        <div className="contact">
          <h1 className='contact-h1'>Get in touch</h1>
          <h2 className='contact-email'>contact@e-comm.ng</h2>
          <h2 className='contact-tel'>+234 4556 6665 34</h2>
          <p className='contact-p'>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
        </div>
        <div className="contact1" onChange={e => console.log(e.target)}>
          <form onSubmit={handleSubmit}  action="">
            <label htmlFor="text">
              <p className='contact-label'>Fullname</p>
              <input className='contact-input' value={data.fullname} onChange={e=> setData(p =>({...p, fullname: e.target.value}))} type="text" placeholder='James Doe'/>
            </label>
            <label htmlFor="text">
              <p className='contact-label'>Email</p>
              <input className='contact-input' value={data.email} onChange={e=> setData(p =>({...p, email: e.target.value}))} type="email" placeholder='laylo@gmail.com'/>
            </label>
            <button className='contact-button'>Buy now</button>
          </form>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
