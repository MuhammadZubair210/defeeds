import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import MessageBox from "../StoriesSmallComponents/MessageBox";
import StoriesSmallComponents from "../StoriesSmallComponents/StoriesSmallComponents";
import "./Story.css";
import PropTypes from "prop-types";

function Story({ location, history }) {
  const [selectedStories, setSelectedStories] = useState(null);
  const [animatedEmoji, setAnimatedEmoji] = useState(false);
  const [seeUserComments, setSeeUserComments] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <div className="story-center">
          <div className="stori-div">
            <div className="story-back">
              <CloseIcon />
            </div>
            <div className="story-logo">
              <img
                onClick={() => history.push("/home")}
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
            <div className="story-add" onClick={() => history.push("addstory")}>
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
                {location.state.stories.map((val, ind) => {
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
        <StoriesSmallComponents
          stories2={selectedStories}
          setAnimatedEmoji={setAnimatedEmoji}
          animatedEmoji={animatedEmoji}
        />
      </div>
    </div>
  );
}

export default Story;

Story.propTypes = {
  location: PropTypes.any,
  history: PropTypes.any,
};
