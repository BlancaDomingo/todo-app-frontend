import React from 'react'
import { Footer } from './Footer'
import { Link } from "react-router-dom";

const Help = () => {
    

    return (  <div className="superdiv">
    <div className="App">
        <h2>Hilfe</h2>
      <p>A nam itaque maiores architecto consequatur sunt, odit eligendi atque voluptates, repellat sapiente blanditiis at perferendis vero tempore enim reprehenderit beatae. Nesciunt!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores repellat soluta illum. Itaque recusandae reiciendis voluptate doloribus optio iusto?</p>

      <p>A nam itaque maiores architecto consequatur sunt, odit eligendi atque voluptates, repellat sapiente blanditiis at perferendis vero tempore enim reprehenderit beatae. Nesciunt!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores repellat soluta illum. Itaque recusandae reiciendis voluptate doloribus optio iusto?</p>

      <p>odit eligendi atque voluptates, repellat sapiente blanditiis at perferendis vero tempore enim reprehenderit beatae. Nesciunt!</p>

      <Link className="linkBack" to='/todoApp'>Zurück zum App</Link> 


    </div>
    <Footer />

    
  </div> 
        
        
    )
}
export default Help;
