import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import React from "react";
import HomeVideo from "../HomeVideo";
import "../Home.css";

const VideoPost = ({ val, ind }) => {
  return (
    <div className="sub-post-3" key={ind}>
      <div className="individual-posts">
        <div className="post-header">
          <div className="profile-name">
            <div className="pet-discover">
              <img
                className="pet-pic"
                src={
                  "https://cdn.alpha.art/opt/4/1/41ac75c4a7e3efa84e07df55cbeff41927ded201/196.webp"
                }
              />
            </div>

            <div className="name-puppy">
              <h5 className="heading-h4-discover">{val.poster}</h5>
              <p className="para-3">Wed 9, 2020</p>
            </div>
          </div>
          <div>
            <p className="discover-dots">...</p>
          </div>
        </div>

        <div className="post-image-relative">
          <div class="top-right top-right-fixed">
            <div className="icons-all-disc">
              <FavoriteBorderIcon
                className="post-icons"
                style={{ color: "red" }}
              />
            </div>
            <div className="icons-all-disc">
              <ChatOutlinedIcon
                className="post-icons"
                style={{ color: "blue" }}
              />
            </div>
            <div className="icons-all-disc">
              <ShareOutlinedIcon
                className="post-icons"
                style={{ color: "green" }}
              />
            </div>
            <div className="icons-all-disc">
              <BookmarkIcon
                style={{ color: "yellow" }}
                className="post-icons"
              />
            </div>
          </div>

          <div>
            <HomeVideo url={val.url} />
          </div>
        </div>

        <div className="no-comments-yet">
          <div>{val.post}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPost;
