import PropTypes from "prop-types";
import React from "react";
import "../Home/Home.css";
import "./Story.css";

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <span className="defeed-stories-text">Defeed Stories</span>
        <div className="story-container">
          {this.props.stories.map((val, ind) => {
            return ind < 4 ? (
              <div key={ind} className="story-div">
                {/* {false ? (
                  <img
                    src={val.stories[0].url}
                    alt="Snow"
                    className="story-imgs"
                  />
                ) : ( */}
                <img
                  src="https://cdn.alpha.art/opt/f/d/fd1574886749a851c5ec94ff953622b084aa76f7/original.webp"
                  alt="Snow"
                  className="story-imgs"
                />
                {/* )}  */}
                <div className="bottom-left">1asfa.13134</div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

export default Story;

Story.propTypes = {
  stories: PropTypes.any,
};
