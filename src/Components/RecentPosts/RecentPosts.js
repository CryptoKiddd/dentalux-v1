
import { Link } from 'react-router-dom'
import './recentposts.css'

export const RecentPosts = ({ recents }) => {
  console.log(recents)
  return (
    <div className='recentposts-cont'>
      <h6>ხშირად წაკითხვადი</h6>
      {
        recents.map(item => {

          return (
            <Link to={`/blog/${item.id}`} className='rplink'>
              <div className='recentposts-post'>
                <img src={item.coverimg} />
                <span>  {item.name} </span>


              </div>
            </Link>
          )
        }

        )
      }

    </div>
  )
}