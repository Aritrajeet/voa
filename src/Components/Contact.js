import React from "react";
import "./CSS/Contact.css";
export default function Contact() {
  
  return (
    <section id="Contact">
      <div class="cont" id="img">
        <h1 class="fonth1">Contact Us</h1>
        <p class="fontp">
          *Please fill the details below. We will reach you soon.
        </p>
        <div class="form">
          <form
            action="https://formsubmit.co/aritrajeet123@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Message From Music Website!"
            />
            <input type="hidden" name="_template" value="table" />
            <label>Name</label>
            <input type="text" name="name" />
            <br />
            <label>E-mail</label>
            <input type="email" name="email" />
            <br />
            <label>Contact No.</label>
            <input type="text" name="phone no" />
            <br />
            <label for="messages">How can we help you?</label>
            <textarea name="message" id="messages"></textarea>
            <br />
            <button class="fontbtn">Submit</button>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </div>
    </section>
  );
}
