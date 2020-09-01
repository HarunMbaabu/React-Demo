import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
        <div className="contactUs" id="contactUs">
            <div className="side">
                <h2 className="logo">React Demo</h2>
                <h2>CONTACT</h2>
                <h4>Contact number</h4>
                <p>+254794598834</p>
                <h4>Email</h4>
                <p>info@luxtechacademy.com</p>
                <div className="icons" id="hlight">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
            <div className="form">
                <div className="main">
                    <h2>CONTACT US</h2>
                    <input type="text" name="" id="txt" placeholder="Your Name" />
                    <br />
                    <input type="text" name="" id="txt" placeholder="Your Mail" />
                    <br />

                    <textarea type="text" name="" id="txt" rows="4" cols="33" placeholder="Your Message" >
                    </textarea>
                    <br />
                    <button type="button"><a href="#">Submit</a></button>
                </div>
            </div>
            </div>
        </div>
   
  );
}

export default App;
