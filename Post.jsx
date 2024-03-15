import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import {useState} from 'react';
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [like, setLike] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="post">
      <div className="container">
        {/* User */}
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        {/* Content */}
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        {/* info */}
        <div className="info">
            <div className="item" onClick={()=> setLike(!like)}>
                {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                12 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                12 Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon />
                Share
            </div>
        </div>
           {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;