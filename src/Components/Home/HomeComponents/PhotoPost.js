import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import React from "react";
import "../Home.css";

const testpic =
  "https://cdn.alpha.art/opt/8/c/8cd720171e37aa693bb58064b950d601c67b11d2/340.webp";

const PhotoPost = ({ val, ind }) => {
  return (
    <div className="sub-post-3" key={ind}>
      <div className="individual-posts">
        <div className="post-header">
          <div className="profile-name">
            <div className="pet-discover">
              {/* <img className="pet-pic" src={img[0]} /> */}
              <img className="pet-pic" src={val.url?.[0]} />
            </div>

            <div className="name-puppy">
              <span className="heading-h4-discover">{val.poster}</span>
              <span className="para-3">Wed 9, 2020</span>
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

          <div class="carousel slide2 slide">
            <div class="carousel-inner" style={{ backgroundColor: "black" }}>
              <div class="carousel-item active">
                <img
                  height="400"
                  className="images"
                  src={testpic}
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="no-comments-yet">
          <div>{val.post}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;
