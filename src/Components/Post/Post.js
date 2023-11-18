import { Link } from "react-router-dom"

  

import './post.css'
  export const Post = ({post})=>{
   
    return (
        <div className="postcard"> 
          <div className="postcard-img-cont" >
            <img src={post.coverimg} />
          </div>
          <div className="post-desc">

          <h2 className="post-title">{post.name}</h2>
          <p>{post.slug.slice(0,60)}...</p>
          <p className="post-date">{post.date}</p>
          </div>

         
            <Link to={`/blog/${post.id}`}  className="post-link">
            
            ვრცლად
            </Link>
            
         
        </div>
    )
  }