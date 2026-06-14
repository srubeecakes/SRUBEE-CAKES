import Navbar from "../components/Navbar";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/18.jpeg";
import img19 from "../assets/19.jpeg";
import img20 from "../assets/20.jpeg";

const cakes=[
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12,
img13,
img14,
img15,
img16,
img17,
img18,
img19,
img20
];

function GalleryPage(){

return(

<>

<Navbar/>

<section className="gallery">

<h2>
Our Collections
</h2>

<div className="gallery-grid">

{cakes.map((cake,index)=>(

<div
className="cake-card"
key={index}
>

<img
src={cake}
alt="cake"
/>

</div>

))}

</div>

</section>

</>

);

}

export default GalleryPage;