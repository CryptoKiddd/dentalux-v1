import { Footer, Navigation, Posts,RecentPosts } from "../../Components"
 import "./blog.css"
 import { posts } from "../../constants/markdownpost"

export const BlogPage = () => {
  const recents = posts.slice(-3)

  
  return (
    <div>
    <Navigation />
    <div className="bloglayout">
        <div className="blogposts">
        <Posts posts={posts} />

        </div>
        <div className="recent-cont">
        <RecentPosts recents={recents}/>

        </div>
    </div>
        <Footer />

    
    </div>
  )
}