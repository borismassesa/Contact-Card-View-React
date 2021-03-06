import React from "react"
import Contact from "./components/Contact.js"
import "./style.css"
import whiskerson from "./images/mr-whiskerson.png" 
import Fluffykins from "./images/fluffykins.png"
import Felix from "./images/felix.png"
import Pumpkins from "./images/pumpkin.png"

export default function App(){
  return (
    <div className="contacts">
      <div className="contacts">
            <Contact 
                img={whiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={Fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={Felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={Pumpkins}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    </div>
    
  )
}