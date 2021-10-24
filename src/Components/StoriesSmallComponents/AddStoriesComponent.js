import PropTypes from "prop-types"
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import React from "react";
// import logo from './logo.svg';
import "./AddStoriesComponent.css";

function App({ fileSelectedHandler }) {
  return (
    <div className="Addstory">
      <div className="both-borders">
        <div className="first-border">
          <label className="btn">
            <div className="full-div">
              <div className="pic">
                <PhotoLibraryOutlinedIcon />
              </div>
              <div>
                <p className="addphoto">Add photo</p>
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={fileSelectedHandler}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="second-border">
          <div className="full-div2">
            <div className="pic2">
              <PhotoLibraryOutlinedIcon />
            </div>
            <div>
              <p className="addphoto">Add Video</p>
            </div>
          </div>
        </div>
      </div>
      {/* {images
          ? images.map((val, ind) => {
              return (
                <div key={ind}>
                  <img
                    src={val}
                    alt="Snow"
                    // class="top-left"
                    style={{
                      width: "170px",
                      height: "200px",
                      borderRadius: "10px",
                      margin: "6%  0%",
                    }}
                  />

                </div>
              );
            })
          : null} */}
    </div>
  );
}

App.propTypes = {
  fileSelectedHandler: PropTypes.any
}

export default App;
