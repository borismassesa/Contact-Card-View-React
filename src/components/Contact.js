import React from "react"
// import cat from "../images/fluffykins.png"
import phoneIcon from "../images/phone-icon.png"
import emailIcon from "../images/mail-icon.png"

export default function Contact(props){
  return (
    <div className="contacts">
        
            <div className="contact-card">
                <img src={props.img} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phoneIcon} />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={emailIcon} />
                    <p>{props.email}</p>
                </div>
            </div>
    </div>
  )
}