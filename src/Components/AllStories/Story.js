import React, { useState } from "react";
import "./Story.css";
// import StorisSmallComponents from "./StorisSmallComponents";
import StorisSmallComponents from "../StorisSmallComponents/StoriesSmallComponents";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Stories from "react-insta-stories";
import MessageBox from "../StorisSmallComponents/MessageBox";

function App({ ...props }) {
  const [selectedStories, setSelectedStories] = useState(null);
  const [animatedEmoji, setAnimatedEmoji] = useState(false);
  const [seeUserComments, setSeeUserComments] = useState(false);

  return (
    <div className="App">
      {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        {/* *******************CENTER****************** */}

        <div className="story-center">
          <div className="stori-div">
            <div className="story-back">
              <CloseIcon />
            </div>
            <div className="story-logo">
              <img
                onClick={() => this.props.history.push("/home")}
                className="logo-stori"
                src={require("../../assets/logo_big.svg")}
                alt="slooth"
              />
            </div>
          </div>
          <hr />

          <div className="stories-set">
            <div>
              <h5>Stories</h5>
            </div>
            <div>
              <a
                href="#"
                className="setting"
                onClick={() => setSeeUserComments(!seeUserComments)}
              >
                {seeUserComments ? "back" : "See user comments"}
              </a>
            </div>
          </div>

          <p className="stories-set">Your story</p>

          <div className="add-div">
            <div
              className="story-add"
              onClick={() => props.history.push("addstory")}
            >
              <AddIcon />
            </div>
            <div className="add-logo">
              <div className="addtoyourstory">
                <p>Add to your story</p>
              </div>

              <div className="addtoyourstory">
                <p className="writesome">
                  share a photo or video or write some thing
                </p>
              </div>
            </div>
          </div>
          {!seeUserComments ? (
            <div>
              <p className="stories-set">All story</p>
              <br />

              <div className="sto-main">
                {props.location.state.stories.map((val, ind) => {
                  // return <div key={ind} className="all-story" onClick={()=>setSelectedStories(stories2,"../../assets/jp.jpg", "sdnasfjdnfu")}>
                  return (
                    <div
                      key={ind}
                      className="all-story"
                      onClick={() => setSelectedStories(val)}
                    >
                      <div className="story-name-img">
                        <div className="story-width">
                          <img className="story-pet" src={val.profile} />
                        </div>
                        <div className="name-story-div">
                          <p className="name-story">{val.username}</p>
                          <p className="story-hello">Hello</p>
                        </div>
                      </div>
                      <div className="story-now">3m</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <p className="stories-set">Story Comments</p>
              <br />

              <div className="sto-main">
                <MessageBox />
              </div>
            </div>
          )}
        </div>
        <StorisSmallComponents
          stories2={selectedStories}
          setAnimatedEmoji={setAnimatedEmoji}
          animatedEmoji={animatedEmoji}
        />
        {/* <div className="stories">
          <Stories
            loop
            defaultInterval={8000}
            stories={stories2}
            onStoryEnd={(s, st) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            onStoryStart={(s, st) => console.log("story started", s, st)}
          />
        </div> */}
        {/* **********************************right hand side*********************************** */}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// // import './App.css';
// import Stories from "react-insta-stories";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       // this.setState({ stories: stories2 })
//     }, 3000);
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="left">
//           <h2>
//             <code>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://www.npmjs.com/package/react-insta-stories"
//                 target="_blank"
//               >
//                 react-insta-stories [v2.0.3]
//               </a>
//             </code>
//           </h2>
//           <p>Create Instagram like stories on the web using React</p>
//           <br />
//           <code>
//             <span
//               style={{
//                 background: "#eee",
//                 padding: 5,
//                 paddingLeft: 10,
//                 paddingRight: 10,
//                 borderRadius: 5,
//                 width: "auto",
//               }}
//             >
//               npm i react-insta-stories
//             </span>
//           </code>
//           <br />
//           <p>
//             Made with ♥ by{" "}
//             <a
//               rel="noopener noreferrer"
//               href="https://github.com/mohitk05/react-insta-stories"
//               target="_blank"
//             >
//               @mohitk05
//             </a>
//           </p>
//           <br />
//           <div
//             style={{
//               background: "#eee",
//               padding: 5,
//               paddingLeft: 10,
//               paddingRight: 10,
//               borderRadius: 5,
//               width: "auto",
//             }}
//           >
//             <p>◀ Tap left for previous story</p>
//             <p>▶︎ Tap right for next story</p>
//             <p>◉ Press and hold to pause</p>
//           </div>
//           <br />
//           <div className="updates">
//             <p>
//               <mark>
//                 <b>Updates [V2.0.0]</b>
//               </mark>
//             </p>
//             <p>1. Render your own components/JSX in stories</p>
//             <p>
//               2. Create multiple instances to recreate stories by multiple users
//               easily, jump to stories using props
//             </p>
//             <p>3. Prop based control, event callbacks</p>
//             <p>4. Custom JSX gives control to pause/play story</p>
//             <p>5. (for devs) TypeScript 🎉</p>
//             <p>6. (for devs) Updated for easier feature additions, hooks</p>
//             <br></br>
//             <p>
//               <mark>
//                 <b>Updates [V1.4.1]</b>
//               </mark>
//             </p>
//             <p>1. Stories stretch to fill screen by default</p>
//             <p>2. Style story content using 'storyStyles' prop 💅</p>
//             <p>3. Add individual styling to each story</p>
//             <br />
//             <p>
//               <mark>
//                 <b>Updates [V1.4.0]</b>
//               </mark>
//             </p>
//             <p>1. 'See more' feature added 🤳</p>
//             <p>2. Video playback fixes</p>
//             <br />
//             <p>
//               <mark>
//                 <b>Updates [V1.3.0]</b>
//               </mark>
//             </p>
//             <p>1. Video support added 🎉</p>
//             <p>2. babel-polyfill error fix 👾</p>
//             <p>3. Changed progress animation to plain CSS</p>
//             <br />
//             <p>
//               <mark>
//                 <b>Updates [V1.2.0]</b>
//               </mark>
//             </p>
//             <p>1. Now you can add a header to the story</p>
//             <p>2. Image aspect ratio retained if story size changed (fix)</p>
//           </div>
//           <br />
//           <p>
//             Know more about me here:{" "}
//             <a
//               rel="noopener noreferrer"
//               href="https://mohitkarekar.com"
//               target="_blank"
//             >
//               mohitkarekar.com
//             </a>
//           </p>
//         </div>
//         <div className="stories">
//           <Stories
//             loop
//             defaultInterval={8000}
//             stories={stories2}
//             onStoryEnd={(s, st) => console.log("story ended", s, st)}
//             onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
//             onStoryStart={(s, st) => console.log("story started", s, st)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

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
  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
  },
  {
    content: Story2,
  },
];

const stories3 = ["https://picsum.photos/1080/1920"];

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};
