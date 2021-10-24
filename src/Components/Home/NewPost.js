import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";
import React from "react";
import Loader from "react-loader-spinner";
import ReactPlayer from "react-player";
import Emoji from "../Emoji/Emoji";
import HomeBackground from "../HomeBackground/HomeBackground";
import "./NewPost.css";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 0, 3),
    width: "37%",
  },
}));

const NewPost = ({
  setEmoji,
  setPost,
  images,
  video,
  setPostType,
  selectVideo,
  selectImages,
  emoji,
  handleClose,
  isLoading,
  refresh,
  post,
  postType,
  background_selected,
  open,
}) => {
  const classes = useStyles();
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [backgroundPost, setBackgroundPost] = React.useState(true);
  const [selected, setSelected] = React.useState("");
  const close = () => {
    setShowEmoji(false);
  };
  const selectedEmojiFunc = (emoji) => {
    setEmoji(emoji);
    setShowEmoji(false);
  };
  const selectedFunc = (key) => {
    setSelected(key);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => refresh()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={open}
          style={{
            background: "white",
          }}
        >
          <div className={classes.paper}>
            <div className="new-post-header">
              <div className="space-createpost " />
              <h2 id="transition-modal-title" className="createpost">
                Create Post
              </h2>
              <div className="space-createpost createpost-closeicon">
                <img
                  src={require("../../assets/close.png")}
                  onClick={() => refresh()}
                />
              </div>
            </div>
            <hr />
            <div className="pic-drop">
              <div>
                <img
                  className="post-pet"
                  src={
                    "https://cdn.alpha.art/opt/b/c/bcd01c3a0fb34e0a7b38e42b11d7cf8dd9c0091a/340.webp"
                  }
                />
              </div>
              <div className="name-drop">
                <div className="name-emoji">
                  <div className="name-public">
                    <span>782347...w7823</span>
                    <div className="world-public-div">
                      <img
                        className="world-public-icon"
                        src={require("../../assets/world.png")}
                      />
                      <span className="public-text">Public</span>
                    </div>
                  </div>

                  {emoji && emoji !== "" ? (
                    <span className="isfeeling">is feeling {emoji}</span>
                  ) : null}
                </div>
              </div>
            </div>

            {backgroundPost ? (
              <div>
                <div className="form-group">
                  <textarea
                    placeholder="Whats On Your Mind ?"
                    className="form-control input-post"
                    rows="5"
                    id="comment"
                    style={{ fontSize: "16px" }}
                    onChange={setPost}
                  ></textarea>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {images
                    ? images.map((val, ind) => {
                        return (
                          <div key={ind} style={{ margin: "2%" }}>
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={val}
                            />
                          </div>
                        );
                      })
                    : null}
                </div>
                {video ? (
                  <div className="react-player-video">
                    <ReactPlayer
                      url={video}
                      className="react-player-video2"
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div
                className="background-div"
                style={{
                  backgroundImage: `url(${selected})`,
                }}
              >
                <textarea
                  placeholder="Whats On Your Mind?"
                  className="background-div-text"
                  rows="5"
                  onChange={setPost}
                ></textarea>
              </div>
            )}
            <div className="emoji-color">
              {showEmoji ? (
                <Emoji close={close} selectedEmoji={selectedEmojiFunc} />
              ) : null}
              <div className="backgroundicon-div">
                <img
                  onClick={() => {
                    setBackgroundPost(!backgroundPost);
                    setPostType("background-image");
                  }}
                  className="backgroundicon-color"
                  src={require("../../assets/backgroundicon.png")}
                />
              </div>
            </div>

            {!backgroundPost ? (
              <div>
                <HomeBackground
                  background_selected={background_selected}
                  selectedFunc={selectedFunc}
                />
              </div>
            ) : null}
            <div className="icons-addpost post-div">
              <span className="add-to-your-post-text">Add to Your Post</span>
              <div className="icons-flex">
                <div onClick={() => setShowEmoji(true)}>
                  <label className="new-post-icons">
                    <SentimentSatisfiedOutlinedIcon
                      style={{ color: "#FBD771" }}
                    />
                  </label>
                </div>

                <div
                  onClick={() => {
                    setPostType("images");
                  }}
                >
                  <label className="new-post-icons">
                    <PhotoLibraryIcon
                      style={{ color: "lightgreen" }}
                      className="photoLibrary"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={selectImages}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div
                  onClick={() => {
                    setPostType("video");
                  }}
                >
                  <label className="new-post-icons">
                    <VideocamIcon
                      style={{ color: "gray" }}
                      className="photoLibrary"
                    />
                    <input
                      type="file"
                      accept="video/*"
                      multiple
                      onChange={selectVideo}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="post-div">
              {!isLoading ? (
                <button
                  type="button"
                  className="post-button"
                  onClick={() => {
                    if (postType !== "" && post !== "") {
                      handleClose();
                    }
                  }}
                >
                  Post
                </button>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={20}
                    width={20}
                  />
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewPost;

NewPost.propTypes = {
  background_selected: PropTypes.any,
  emoji: PropTypes.string,
  handleClose: PropTypes.func,
  images: PropTypes.shape({
    map: PropTypes.func,
  }),
  isLoading: PropTypes.any,
  post: PropTypes.string,
  postType: PropTypes.string,
  refresh: PropTypes.func,
  selectImages: PropTypes.any,
  selectVideo: PropTypes.any,
  setEmoji: PropTypes.func,
  setPost: PropTypes.any,
  setPostType: PropTypes.func,
  video: PropTypes.any,
  open: PropTypes.any,
};
