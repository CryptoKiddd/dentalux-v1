import { useParams } from "react-router-dom"
import { posts } from "../constants/markdownpost"
import { Footer, Navigation, RecentPosts } from "../Components"

import './postpage.css'
export const PostPage = () => {
    const params = useParams()
    const currentPostArr = posts.filter(post => post.id == params.id)
    const currentPost = currentPostArr[0]
    console.log(currentPost)
    return (

        <>
            <Navigation />
            <div className="postpage-cont">
              <h1>{currentPost.name}</h1>
              <p>{currentPost.intro}</p> 

              <div className="cp-start-text">
                <p>{currentPost.text1}</p>
              </div>
              {
                currentPost.reason1?
                <div className="reason-box"><p className="cp-reason" >1. {currentPost.reason1}</p>
                <p>{currentPost.reason1Answer}</p>
                </div>
                :''
              }
              {
                currentPost.reason2?
                <div className="reason-box"><p className="cp-reason" >2. {currentPost.reason2}</p>
                <p>{currentPost.reason2Answer}</p>
                </div>
                :''
              }
              {
                currentPost.reason3?
                <div className="reason-box"><p className="cp-reason" >3. {currentPost.reason3}</p>
                <p>{currentPost.reason3Answer}</p>
                </div>
                :''
              }

              <div>
                {currentPost.conclusion}
              </div>
           




            </div>
            <Footer />
        </>

    )
}
