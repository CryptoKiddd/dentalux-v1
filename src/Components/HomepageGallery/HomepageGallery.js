import { Link } from "react-router-dom"
import "./HomepageGallery.css"

const HomepageGallery = () => {
    return (
        <div className="homegallery-wrapper">
            <div className="homegallery-header">

        <h1>საუკეთესო გარემო</h1>
            <span>გალერეა</span>
            </div>
          {/* <Link to={'/gallery'}> */}
          
        <div class="gallery">
            <span style={{ "--i": 1 }} >
                <img src="gallery/g15.jpg" alt="" />
            </span>
            <span style={{ "--i": 2 }} >
                <img src="/gallery/g1.jpg" alt="" /> 
             </span>
            <span style={{ "--i": 3 }} >
                <img src="/gallery/g2.jpg" alt="" />
            </span>
            <span style={{ "--i": 4 }} >
                <img src="gallery/g10.jpg" alt="" />
            </span>
            <span style={{ "--i": 5 }} >
                <img src="gallery/g21.jpg" alt="" />
            </span>
            <span style={{ "--i": 6 }} >
                <img src="gallery/g20.jpg" alt="" />
            </span>
            <span style={{ "--i": 7 }} >
                <img src="gallery/g12.jpg" alt="" />
            </span>
            <span style={{ "--i": 8 }} >
                <img src="gallery/g11.jpg" alt="" />
            </span>
        </div>
          {/* </Link> */}
        </div>
    )
}

export default HomepageGallery