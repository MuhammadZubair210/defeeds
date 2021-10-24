import PropTypes from "prop-types";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Radium, { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { bounce } from "react-animations";
import FacebookEmoji from "react-facebook-emoji";
import "./StoriesSmallComponents.css";

function App({ animatedEmoji, stories2, setStories, setAnimatedEmoji }) {
  const [individualStory, setIndividualStory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [top, setTop] = useState(0);

  if (
    !animatedEmoji &&
    stories2 !== undefined &&
    stories2 !== null &&
    stories2.key !== individualStory
  ) {
    let array = [];
    setIndividualStory(stories2.key);
    stories2.stories.map((val) => {
      if (val.type === "image") {
        array.push(val.url);
      } else if (val.type === "video") {
        array.push({ url: val.url, type: val.type });
      }
    });
    console.log(array);
    setStories(array);
  }
  useEffect(() => {
    let intervalId = null;
    if (animatedEmoji) {
      console.log("top", top);
      if (top % 4 === 0) {
        setAnimatedEmoji(false);
        clearInterval(intervalId);
        setTop(0);
      } else {
        intervalId = setInterval(() => {
          setTop(top + 1);
        }, 1000);
      }
    }
  }, [top]);

  return (
    <div className="Story">
      <div>
        <div className="story2-display">
          {/* <img src={require("../../assets/stori-dog.jpg")} className="stori-dog" /> */}

          <div
            className="stories"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1514870262631-55de0332faf6?"})`,
              height: "90vh",
              width: "40%",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="story-sound">
          <div className="story-play">
            <img className="story2-dog" src={require("../../assets/jp.jpg")} />
            <p className="name-sto">sdnassfjnasf...1h</p>
            <PlayArrowIcon className="name-sto" />
            <VolumeUpIcon className="name-sto" />
            <MoreHorizIcon className="name-sto" />
          </div>
        </div>
        <div className="all-emojis-input">
          <div className="input-group mb-3 stori-input">
            <input
              type="text"
              className="form-control inputsto"
              placeholder="Reply....."
              id="demo"
              name="email"
            />
          </div>
          <div className="reaction-emojis-div">
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("love");
                setTop(1);
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="love" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("wow");
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="wow" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("yay");
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="yay" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("angry");
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="angry" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("haha");
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="haha" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("sad");
                setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="sad" size="xs" />
            </div>
          </div>
        </div>
      </div>
      {animatedEmoji ? (
        <StyleRoot>
          <div
            className="test animated-div"
            style={{
              animation: "x 6s",
              animationName: Radium.keyframes(bounce, "slideInUp"),
              position: "absolute",
              color: "white",
              top: 700,
              background: "transparent !important",
              width: "50%",
              height: "100vh",
              marginLeft: "12%",
            }}
          >
            <div
              className="reaction-emojis-div"
              // key={ind}

              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="emoji-5">
                <FacebookEmoji type={emoji} size="md" />
              </div>
            </div>
          </div>
        </StyleRoot>
      ) : null}
    </div>
  );
}

App.propTypes = {
  animatedEmoji: PropTypes.any,
  setAnimatedEmoji: PropTypes.any,
  setStories: PropTypes.func,
  stories2: PropTypes.any,
};

export default App;
