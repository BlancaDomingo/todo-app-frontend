import React from 'react';
import './LoggedIn.scss';

export default function LoggedIn({userName}) {
 
  return (
    <div className='loggedIn-div'>
      <p>Hallo {userName} <button className="ButtonLogout">Ausloggen</button></p>    

    </div>
  )
}

