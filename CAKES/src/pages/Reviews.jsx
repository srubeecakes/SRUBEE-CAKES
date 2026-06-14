import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {

const [reviews,setReviews]=useState([]);

const [form,setForm]=useState({
name:"",
review:""
});

useEffect(()=>{

loadReviews();

},[]);

const loadReviews=async()=>{

const res=
await axios.get(
"https://srubee-cakes-bgsn.onrender.com/reviews");

setReviews(
res.data
);

};

const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:
e.target.value
});

};

const submitReview=
async(e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/reviews",
form
);

setForm({
name:"",
review:""
});

loadReviews();

};

return(

<>

<Navbar/>

<section className="reviews-section">

<h1>

Customer Reviews ⭐

</h1>

<p>

Share your experience

</p>

<form
className="review-form"
onSubmit={submitReview}
>

<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
/>

<textarea
name="review"
placeholder="Write your review..."
value={form.review}
onChange={handleChange}
required
></textarea>

<button type="submit">

Post Review

</button>

</form>

<div className="reviews-container">

{

reviews.map((r)=>(

<div
key={r._id}
className="review-card"
>

<h3>

{r.name}

</h3>

<p>

⭐⭐⭐⭐⭐

</p>

<p>

{r.review}

</p>

</div>

))

}

</div>

</section>

</>

);

}

export default Reviews;