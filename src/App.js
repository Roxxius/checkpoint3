import logo from './logo.svg';
import './App.css';
import React from 'react'

import imageInSrc from "./imageInSrc.jpg"

import './style.css';

function App() {
  return (
    <div className="App">

     <React.Fragment>

<span>
 <h1 className="title">Your name here</h1>
 </span><br />
 

<span>
 <img src= {imageInSrc} className="im1" alt="im1"/> 
 </span><br />
 
<span>

 <img src="/imageInPublic.jpg" className="im2" alt="im2" />

 </span><br />
         </React.Fragment>

         <video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" >
</source>
</video>

    </div>


  );
}

export default App;
