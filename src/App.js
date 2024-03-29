import "./App.css";
import React from "react";
import Profiles from "./components/Profiles";
import Contents from "./components/Contents";
import Intro from "./components/Intro";
import  "bootstrap/dist/css/bootstrap.min.css";

import ContactForm from "./components/ContactForm";


function App() {
  return (
    <div className="App">
 
      <Intro />
      <Contents />
      <div className="Heading">
        <h1>Our Masters</h1>
      </div>
      <div className="MastersProfile">
        <Profiles
          imageSrc="LexFridman.png"
          altText="Lex Fridman"
          Name="Lex Fridman"
        />
        <Profiles
          imageSrc="JeffBezos.jpg"
          altText="Jeff Bezos"
          Name="Jeff Bezos"
        />
        <Profiles
          imageSrc="RiteshAgarwal.jpg"
          altText="Ritesh Agarwal"
          Name="Ritesh Agarwal"
        />
        <Profiles
          imageSrc="BillGates.png"
          altText="Bill Gates"
          Name="Bill Gates"
        />
        <Profiles
          imageSrc="SundarPichai.jpg"
          altText="Sundar Pichai "
          Name="Sundar Pichai"
        />
        <Profiles
          imageSrc="ElonMusk.jpg"
          altText="Elon Musk"
          Name="Elon Musk"
        />
      </div>
    
      <ContactForm/>
    
    </div>
  );
}

export default App;
