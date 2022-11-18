import { Link } from "react-router-dom"
import "./post.css"

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
            The Mascot
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
            The Georgia Bulldog mascot line goes all the way back to 1956. Each bulldog, named Uga,
            stays on the sidelines during home games. 
        </p>
      </div>

    </div>
  )
}
