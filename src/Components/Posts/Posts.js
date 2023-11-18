import { Post } from "../Post/Post"


import'./posts.css'
export const Posts = ({posts})=>{
   
    return (
        <div className="posts" >
        {
            posts.map((post)=><Post key={post.name} post={post} />)
        }
          </div>
    )
}