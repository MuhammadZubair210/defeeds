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
    padding: theme.spacing(2, 4, 3),
    width: "37%",
  },
}));

export default function TransitionsModal({ ...props }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [secondModal, setSecondModal] = React.useState(false);
  const [emoji, showEmoji] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState("");
  const [showBackground, setShowBackground] = React.useState(false);
  const [backgroundPost, setBackgroundPost] = React.useState(true);
  const [selected, setSelected] = React.useState("");
  const close = () => {
    showEmoji(false);
  };

  const selectedEmojiFunc = (em) => {
    setSelectedEmoji(em);
    showEmoji(false);
    console.log("==", em);
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
        open={props.open}
        onClose={() => props.handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={props.open}
          style={{
            background: "white",
            // opacity: "0.8",
          }}
        >
          <div className={classes.paper}>
            <h2
              id="transition-modal-title"
              className="createpost"
              style={{
                fontSize: "1.6rem",
              }}
            >
              Create Post
            </h2>
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
                  <p>782347...w7823</p>
                  {selectedEmoji !== "" ? (
                    <div>
                      <span className="isfeeling">is feeling</span>
                      {selectedEmoji}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {backgroundPost ? (
              <div>
                <div class="form-group">
                  <textarea
                    placeholder="Whats On Your Mind ?"
                    class="form-control input-post"
                    rows="5"
                    id="comment"
                    style={{ fontSize: "16px" }}
                  ></textarea>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {props.images
                    ? props.images.map((val, ind) => {
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
                {props.video
                  ? props.video.map((val, ind) => {
                      return (
                        <div className="react-player-video">
                          <ReactPlayer
                            url="https://www.youtube.com/watch?v=28xjtYY3V3Q"
                            className="react-player-video2"
                          />
                        </div>
                      );
                    })
                  : null}
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
                  class="background-div-text"
                  rows="5"
                  id="comment"
                ></textarea>
              </div>
            )}
            <div className="emoji-color">
              {emoji ? (
                <Emoji close={close} selectedEmoji={selectedEmojiFunc} />
              ) : null}
              <div>
                {!backgroundPost ? (
                  <span
                    className="color"
                    onClick={() => setBackgroundPost(!backgroundPost)}
                  >
                    close
                  </span>
                ) : (
                  <img
                    onClick={() => setBackgroundPost(!backgroundPost)}
                    className="color"
                    src={require("../../assets/color.jpg")}
                  />
                )}
              </div>
              <div onClick={() => showEmoji(true)}>
                <SentimentSatisfiedOutlinedIcon style={{ color: "gray" }} />
              </div>
            </div>

            {!backgroundPost ? (
              <div>
                <HomeBackground selectedFunc={selectedFunc} />
              </div>
            ) : null}
            <div className="icons-addpost">
              <div className="icons-flex">
                <p>Add to Your Post</p>
              </div>
              <div className="icons-flex">
                <div>
                  <label class="btn">
                    <PhotoLibraryIcon
                      style={{ color: "lightgreen" }}
                      className="photoLibrary"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={props.fileSelectedHandler}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div>
                  <label class="btn">
                    <VideocamIcon
                      style={{ color: "gray" }}
                      className="photoLibrary"
                    />
                    <input
                      type="file"
                      accept="video/*"
                      multiple
                      onChange={props.fileSelectedHandler2}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  props.refresh();
                  props.handleClose();
                }, 4000);
              }}
            >
              {!isLoading ? (
                <button type="button" class="btn btn-primary post-button">
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
}
