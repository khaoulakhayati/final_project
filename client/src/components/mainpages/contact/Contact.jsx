import React, { useState } from 'react'
import axios from 'axios'
function Contact() {
  const [email,setEmail]= useState('')
  const [subject,setSubject]= useState('')
  const [message,setMessage]=useState('')
  const sendEmail = async()=>{
    const res= await axios
        .post('/user/sendemail',{email,subject,message})
        .then((res)=>alert(res.data.message))
  }
  return (
    <>
        <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
               
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" 
                onChange={(e=>setEmail(e.target.value))} />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="SUBJECT" 
                onChange={(e=>setSubject(e.target.value))}/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" 
                onChange={(e=>setMessage(e.target.value))}/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button" onClick={sendEmail}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      inspired by
      <a
        className="credits-link"
        href="https://dribbble.com/shots/2666271-Contact"
        target="_blank"
      >
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx={100} cy={100} r={90} strokeWidth={20} />
            <path
              d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
              strokeWidth={20}
            />
            <path
              d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
              strokeWidth={20}
            />
            <path
              d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
              strokeWidth={20}
            />
          </g>
        </svg>
        Gururaj
      </a>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact