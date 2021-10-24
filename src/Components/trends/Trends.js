import React from "react";
import ImageLightBox from "../ImageLightBox/ImageLightBox";
import "./Trends.css";

const RightSideNav = () => {
  return (
    <div className="Rignt-Side-Nav">
      <div className="main-right">
        <div className="main-search">
          <div className="bottom-border">
            <h5 className="heading-font">Trending Degods Topics</h5>

            <hr />

            <div className="full-right">
              <p className="para-bold">#NFT</p>
              <p className="para-dow">~trending now</p>
              <div className="arrow-down">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <hr />
            </div>

            <div className="full-right">
              <p className="para-bold">#RightChoiceSid</p>
              <p className="para-dow">~trending now</p>
              <div className="arrow-down">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <hr />
            </div>
            <div className="full-right">
              <p className="para-bold">#RightChoiceSid</p>
              <p className="para-dow">~trending now</p>
              <div className="arrow-down">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <hr />
            </div>

            <div className="full-right">
              <p className="para-bold">#RightChoiceSid</p>
              <p className="para-dow">~trending now</p>
              <div className="arrow-down">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <ImageLightBox
      // isOpen={this.state.imagelightBox}
      // onClose={this.onClose}
      />
    </div>
  );
};

export default RightSideNav;
