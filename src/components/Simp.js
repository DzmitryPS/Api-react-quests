import React, { Component } from 'react';


const Simp=({name, image, quote})=> {

  
  

 
    return (
      <div className="Simp">
        <h2>name: {name}</h2>
        <img src={image} alt={name}/>
        <p>{quote}</p>

    
      </div>
    );
  }


export default Simp;

