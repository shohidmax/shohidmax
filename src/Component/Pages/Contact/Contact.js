// import { EmailJSResponseStatus, emailjs } from "@emailjs/browser";
import React from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const HandleForm = e =>{
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const subject = e.target.subject.value;
    // const message = e.target.message.value;
    // emailjs.sendForm('service_6vg1g8q', 'template_adzj9mo', e.target, 'MiaZ7SuOCvFwskjUv')
    emailjs.sendForm('service_6vg1g8q', 'template_adzj9mo', e.target, 'MiaZ7SuOCvFwskjUv')
      .then((result) => {
          console.log(result.text);
          alert('Thank You For Your Contact');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Someting Is Wrong');
      });

    
  }
  return (
    
      <div className="bg-info p-2 mb-2 text-dark bg-opacity-25 container border bordrt-primary">
          <h2 className="text-wrap text-center ">Contact us</h2>
          <div className="row mb-2">
              <div className="col-md-6">
                  <form className="mt-3" onSubmit={HandleForm}>
                  <div className="mb-3">
                         <input type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="Your Name" required/>
                    </div>
                  <div className="mb-3"> 
                         <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="Your Email" required/>
                    </div>
                  <div className="mb-3">
                         <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Your Comment " required></textarea>
                    </div>
                    <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Contact"/>
                  </form>

              </div>
              <div className="col-md-6">
                  <img className="img-fluid" src="https://i.ibb.co/w6Z30LS/Background.png" alt="" />

              </div>
          </div>
          
        
      </div>
    
  );
};

export default Contact;
