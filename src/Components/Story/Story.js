import React from "react";
import "../Home/Home.css";
import "./Story.css";

const storystyle = {
  width: "100%",
  width: "181px",
  height: "7%",
  borderRadius: "10px",
  cursor: "pointer",
  width: "100%",
  padding: "1%",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log("this.props.stories", this.props.stories);
    return (
      <div>
        <span style={{ fontWeight: "bold", margin: "0 3%" }}>
          Defeed Stories
        </span>
        <div class="story-container">
          {this.props.stories.map((val, ind) => {
            return ind < 4 ? (
              <div
                key={ind}
                className="story-div"
                style={storystyle}
                // onClick={() => this.props.gotoStory(ind)}
              >
                {/* <img src={val.profile} alt="Snow" class="top-left" /> */}
                {/* {val.stories[0].type === "image" ? ( */}
                {false ? (
                  <img
                    src={val.stories[0].url}
                    alt="Snow"
                    className="story-imgs"
                    style={storystyle}
                  />
                ) : (
                  // <img src={img[1]} alt="Snow" className="story-imgs" />
                  <img
                    src="https://cdn.alpha.art/opt/f/d/fd1574886749a851c5ec94ff953622b084aa76f7/original.webp"
                    alt="Snow"
                    className="story-imgs"
                    style={storystyle}
                  />
                )}
                <div class="bottom-left">1asfa.13134</div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

export default App;
