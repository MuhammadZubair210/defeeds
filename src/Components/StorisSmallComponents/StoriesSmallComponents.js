import React, { useState, useRef, useEffect } from "react";
// import logo from './logo.svg';
import "./StoriesSmallComponents.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Stories from "react-insta-stories";
import FacebookEmoji from "react-facebook-emoji";

import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

import { keyframes } from "styled-components";

var spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

// var styles = {
//   border: "16px solid #eee",
//   borderTop: "16px solid #3ae",
//   borderRadius: "50%",
//   width: "1cm",
//   height: "1cm",
//   animation: `${spin} 2s linear infinite`
// };

function App({ ...props }) {
  const [stories, setStories] = useState([]);
  const [individualStory, setIndividualStory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [animateEmoji, setAnimateEmoji] = useState(false);
  const [top, setTop] = useState(0);
  const [changeStory, setChangeStory] = useState(true);
  // let intervalId = useRef(null);

  if (
    !props.animatedEmoji &&
    props.stories2 !== undefined &&
    props.stories2 !== null &&
    props.stories2.key !== individualStory
  ) {
    let array = [];
    setIndividualStory(props.stories2.key);
    props.stories2.stories.map((val) => {
      if (val.type === "image") {
        array.push(val.url);
      } else if (val.type === "video") {
        array.push({ url: val.url, type: val.type });
      }
    });
    console.log(array);
    setStories(array);
  } else {
    // console.log(props.stories2);
  }

  useEffect(() => {
    let intervalId =null;
    if (props.animatedEmoji) {
      console.log("top",top);
      if ((top%4) ===0 ) {
        props.setAnimatedEmoji(false);
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
          >
            {/* <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1514870262631-55de0332faf6?)`}}></div> */}
            {/* <Stories
              // loop
              defaultInterval={8000}
              stories={stories}
              // onStoryEnd={(s, st) => console.log("story ended", s, st)}
              // onAllStoriesEnd={(s, st) =>
              //   console.log("all stories ended", s, st)
              // }
              // onStoryStart={(s, st) => console.log("story started", s, st)}
            /> */}
          </div>
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
          <div class="input-group mb-3 stori-input">
            <input
              type="text"
              class="form-control inputsto"
              placeholder="Reply....."
              id="demo"
              name="email"
            />
            
          </div>
          {/* {animateEmoji ? ( */}

          {/* ) : null} */}
          <div className="reaction-emojis-div">
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("love");
                setTop(1)
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="love" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("wow");
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="wow" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("yay");
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="yay" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("angry");
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="angry" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("haha");
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="haha" size="xs" />
            </div>
            <div
              className="emojis-click"
              onClick={() => {
                setEmoji("sad");
                props.setAnimatedEmoji(true);
              }}
            >
              <FacebookEmoji type="sad" size="xs" />
            </div>
          </div>
          {/* <div>
            <ThumbUpAltIcon className="thumbsupemoji like" />
            <FavoriteIcon className="thumbsupemoji heart" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
          </div> */}
        </div>
      </div>
      {props.animatedEmoji ? (
      <StyleRoot>

{/* <div
          className="test animated-div"
          style={{
            animation: "x 6s",
            animationName: Radium.keyframes(bounce, "slideInUp"),
            position: "absolute",
            color: "white",
            top: 0,
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
            <div className="emoji-6">
              <FacebookEmoji type={emoji} size="md" />
            </div>
          </div>
        </div>
        <div
          className="test animated-div"
          style={{
            animation: "x 6s",
            animationName: Radium.keyframes(bounce, "slideInUp"),
            position: "absolute",
            color: "white",
            top: 0,
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
            <div className="emoji-1">
              <FacebookEmoji type={emoji} size="md" />
            </div>
            <div className="emoji-2">
              <FacebookEmoji type={emoji} size="md" />
            </div>
          </div>
        </div>

        <div
          className="test animated-div"
          style={{
            animation: "x 6s",
            animationName: Radium.keyframes(bounce, "slideInUp"),
            position: "absolute",
            color: "white",
            top: 500,
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
            <div className="emoji-3">
              <FacebookEmoji type={emoji} size="md" />
            </div>
            <div className="emoji-4">
              <FacebookEmoji type={emoji} size="md" />
            </div>
          </div>
        </div> */}


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

export default App;

const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>You get the control of the story.</h1>
      <p>
        Render your custom JSX by passing just a{" "}
        <code style={{ fontStyle: "italic" }}>content</code> property inside
        your story object.
      </p>
      <p>
        You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
        input to your content function, that can be used to play or pause the
        story.
      </p>
      <h1>{isPaused ? "Paused" : "Playing"}</h1>
      <h4>v2 is out 🎉</h4>
      <p>React Native version coming soon.</p>
    </div>
  );
};

const stories2 = [
  {
    content: (props) => {
      return (
        <div style={{ background: "pink", padding: 20 }}>
          <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>
            We have our good old image and video stories, just the same.
          </h1>
        </div>
      );
    },
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 5000,
  },
  "https://picsum.photos/1080/1920",
  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
  },
  {
    content: Story2,
  },
];

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};
