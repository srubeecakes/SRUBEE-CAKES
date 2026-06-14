import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Order() {

const [form,setForm]=useState({
name:"",
phone:"",
address:"",
cake:"",
quantity:"",
message:""
});

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const sendOrder=(e)=>{

e.preventDefault();

emailjs.send(
"service_gdjbdvj",

"template_abln5iz",

form,

"Wzu2fql2PrUl26liz"
)

.then(()=>{

alert("Order Sent 🎂");

setForm({
name:"",
phone:"",
address:"",
cake:"",
quantity:"",
message:""
});

})

.catch(()=>{

alert("Failed ❌");

});

};

return(
<>

<Navbar/>

<section className="order-section">

<h1>Place Your Order 🎂</h1>

<p>Fill the form below to customize your cake</p>

<br/>

<form
className="order-form"
onSubmit={sendOrder}
>

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
required
/>

<input
type="text"
name="address"
placeholder="Delivery Address"
value={form.address}
onChange={handleChange}
required
/>

<select
name="cake"
value={form.cake}
onChange={handleChange}
required
>

<option value="">
Select your Cake
</option>

<option>
Birthday
</option>

<option>
Wedding
</option>

<option>
Brownies
</option>

<option>
Cookies
</option>

<option>
Customised
</option>

</select>

<input
type="text"
name="quantity"
placeholder="Quantity (kg or pieces)"
value={form.quantity}
onChange={handleChange}
required
/>

<textarea
name="message"
placeholder="Write your custom message / design idea"
value={form.message}
onChange={handleChange}
/>

<button type="submit">

Order Now 🍰

</button>

</form>

</section>

</>

);

}

export default Order;