import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {

const [form,setForm]=useState({
name:"",
email:"",
phone:"",
message:""
});

const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:
e.target.value
});

};

const sendMessage=
(e)=>{

e.preventDefault();

emailjs.send(

"service_gdjbdvj",

"template_hl8sws5",

form,

"Wzu2fql2PrUl26liz"

)

.then(()=>{

alert(
"Message Sent 💖"
);

setForm({
name:"",
email:"",
phone:"",
message:""
});

})

.catch(()=>{

alert(
"Failed ❌"
);

});

};

return(

<>

<Navbar/>

<section className="contact-section">

<h1>

Contact Us 📞

</h1>

<p>

We are here to help

</p>

<div className="contact-container">

<form
className="contact-form"
onSubmit={sendMessage}
>

<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
required
/>

<input
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
required
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
required
/>

<button type="submit">

Send Message ✉️

</button>

</form>

<div className="contact-info">

<h3>📍 Address</h3>

<p>Tiruppur, Tamil Nadu</p>

<h3>📧 Email</h3>

<p>srubeecakes@gmail.com</p>

<h3>💬 WhatsApp</h3>

<p>Quick reply available</p>

</div>

</div>

</section>

</>

);

}

export default Contact;