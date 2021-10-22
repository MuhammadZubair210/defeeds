// import React, { useState, useEffect } from "react";
// import "../AllStories/Story.css";
// import AddStoriesComponent from "../StorisSmallComponents/AddStoriesComponent";
// import CloseIcon from "@material-ui/icons/Close";
// import Stories from "react-insta-stories";
// import Loader from "react-loader-spinner";

// import {
//   NotificationManager,
//   NotificationContainer,
// } from "react-notifications";

// function App({ ...props }) {
//   const [stories, setStories] = useState(null);
//   const [hover, setHover] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setStories(
//       props.images
//         ? props.images.map((val) => {
//             return {
//               url: val,
//               header: {
//                 heading: props.fullName,
//                 subheading: "Posted 5h ago",
//                 profileImage: props.profilePic,
//               },
//             };
//           })
//         : null
//     );
//   }, [props.images && props.images.length]);

//   const addStory = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       NotificationManager.success("You story successfully added");
//     }, 5000);

//     setTimeout(() => {
//       props.props.history.goBack();
//     }, 8000);
//   };

//   return (
//     <div className="App" style={{ overflow: "hidden" }}>
//       <div className="main">
//         {/* *******************CENTER****************** */}

//         <div className="story-center">
//           <div className="stori-div">
//             <div
//               className="story-back"
//               onClick={() => props.props.history.goBack()}
//             >
//               <CloseIcon />
//             </div>
//             <div className="story-logo">
//               <img
//                 onClick={() => this.props.history.push("/home")}
//                 className="logo-stori"
//                 src={require("../../assets/logo_big.svg")}
//                 alt="slooth"
//               />
//             </div>
//           </div>
//           <hr />
//           <div className="stories-set">
//             <div>
//               <h5>Add Stories</h5>
//             </div>
//           </div>
//           {stories !== null ? (
//             <div>
//               {!isLoading ? (
//                 <div style={{ textAlign: "center", margin: "7% 0%" }}>
//                   <div className="add-to-my-story" onClick={() => addStory()}>
//                     Add to my story
//                   </div>
//                 </div>
//               ) : (
//                 <div style={{ textAlign: "center", margin: "7% 0%" }}>
//                   <div className="add-to-my-story">
//                     <Loader
//                       type="Circles"
//                       color="white"
//                       height={30}
//                       width={30}
//                     />
//                     <div>Adding to your stories...</div>
//                   </div>
//                 </div>
//               )}
//               <p className="stories-set">Selected images and videos</p>
//               <div>
//                 <div className="above-images-div">
//                   {props.images.map((val, ind) => {
//                     return (
//                       <div className="story-images-array">
//                         {hover === ind ? (
//                           <div
//                             onMouseEnter={() => setHover(ind)}
//                             onMouseLeave={() => setHover("")}
//                             style={{ position: "relative" }}
//                           >
//                             <img
//                               key={ind}
//                               src={val}
//                               alt="Snow"
//                               style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 borderRadius: "10px",
//                               }}
//                             />

//                             <div
//                               className="cross-on-image"
//                               onClick={() => props.removeStoryItem(ind)}
//                             >
//                               X
//                             </div>
//                           </div>
//                         ) : (
//                           <img
//                             key={ind}
//                             src={val}
//                             alt="Snow"
//                             style={{
//                               width: "100%",
//                               height: "100%",
//                               borderRadius: "10px",
//                               margin: "6%  1%",
//                             }}
//                             onMouseEnter={() => setHover(ind)}
//                             onMouseLeave={() => setHover("")}
//                           />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div>
//                   <p className="stories-set">Preview</p>

//                   <div
//                     className="stories"
//                     style={{ display: "flex", justifyContent: "center" }}
//                   >
//                     <Stories
//                       loop
//                       defaultInterval={8000}
//                       stories={stories}
//                       onStoryEnd={(s, st) => console.log("story ended", s, st)}
//                       onAllStoriesEnd={(s, st) =>
//                         console.log("all stories ended", s, st)
//                       }
//                       onStoryStart={(s, st) =>
//                         console.log("story started", s, st)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : null}
//           <br />
//         </div>

//         <AddStoriesComponent
//           images={props.images}
//           fileSelectedHandler={props.fileSelectedHandler}
//         />
//       </div>
//       <NotificationContainer />
//     </div>
//   );
// }

// export default App;

// const contentStyle = {
//   background: "salmon",
//   width: "100%",
//   padding: 20,
//   color: "white",
// };




