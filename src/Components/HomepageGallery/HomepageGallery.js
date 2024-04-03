import { Link } from "react-router-dom"
import "./HomepageGallery.css"

const HomepageGallery = () => {
    return (
        <Link to={"/gallery"}>

       <div className="gallery-wrapper">
         <div className="gallery-header" >

        <h2>გალერია</h2>
         <p>საუკეთესო გარემო</p>
         </div>

<div class="marquee">
  <div class="marquee__group">
    <img src='/galeria/g1.jpg' alt=''/>
    {/* <img src='/galeria/g2.jpg' alt=''/> */}
    <img src='/galeria/g3.jpg' alt=''/>
    <img src='/galeria/g4.jpg' alt=''/>
    <img src='/galeria/g5.jpg' alt=''/>
   
  </div>

  <div aria-hidden="true" class="marquee__group">
  <img src='/galeria/g6.jpg' alt=''/>
    <img src='/galeria/g7.jpg' alt=''/>
    <img src='/galeria/g8.jpg' alt=''/>
    <img src='/galeria/g9.jpg' alt=''/>
    <img src='/galeria/g10.jpg' alt=''/>
  </div>
</div>

<div class="marquee marquee--borders" style={{ "--duration": "100s" }}>
  <div class="marquee__group">
    <p>საუკეთესო გარემო</p>
    <p aria-hidden="true">უახლესი ტექნოლოგია</p>
    <p aria-hidden="true"> პროფესიონალი სტომატოლოგები </p>
  </div>

  <div aria-hidden="true" class="marquee__group">
    <p>პროფესიონალი სტომატოლოგები</p>
    <p>უახლესი ტექნოლოგია</p>
    <p>საუკეთესო გარემო</p>
  </div>
</div>

<div class="marquee marquee--reverse">
  <div class="marquee__group">
  <img src='/galeria/11.jpg' alt=''/>
    <img src='/galeria/g12.jpg' alt=''/>
    <img src='/galeria/g13.jpg' alt=''/>
    <img src='/galeria/g14.jpg' alt=''/>
    <img src='/galeria/g10.jpg' alt=''/>
  </div>

  <div aria-hidden="true" class="marquee__group">
  <img src='/galeria/g15.jpg' alt=''/>
    <img src='/galeria/g16.jpg' alt=''/>
    <img src='/galeria/17.jpg' alt=''/>
    <img src='/galeria/g18.jpg' alt=''/>
    <img src='/galeria/g19.jpg' alt=''/>
  </div>
</div>

        
       </div>
        </Link>
     

    )
}

export default HomepageGallery