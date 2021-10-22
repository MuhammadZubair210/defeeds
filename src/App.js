import * as firebase from "firebase";
import React from "react";
import "./App.css";
import RightSideNav from "./Components/trends/Trends";
import Sidenav from "./Components/SideNav/SideNav";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",

      fullName: "Puppy",
      profilePic: "",
    };
  }

  componentDidMount() {
    // if (!firebase.auth().currentUser) {
    //   this.props.history.pop();
    // }

    firebase
      .database()
      .ref(`users/${this.state.userId}/`)
      .on("value", (val) => {
        console.log(val);
        this.setState({
          fullName: "Puppy",
          profilePic: "https://pbs.twimg.com/media/FCIZXVQWUAMJMDG.jpg",
        });
      });
  }

  render() {
    return (
      <div className="Profile App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} profilePic={this.state.profilePic} />
          {/* ******************* CENTER ********************* */}

          <div className="center">
            <div className="arrow">
              <div className="parent">
                <div className="child">
                  <i className="fa fa-arrow-left back" aria-hidden="true"></i>
                </div>
                <div>
                  <div>
                    <span className="name">{this.state.fullName}</span>
                  </div>
                  <div>
                    <span className="tweets">0 posts</span>
                  </div>
                  {/* <h3 className="h3">Puppy</h3>
                <p className="para">
                  <small>43.6k</small>
                </p> */}
                </div>
              </div>

              {/* center */}

              <img
                className="img"
                src={"https://cdn.alpha.art/c/8nNglnpJEwbKY/xnj6OOdzpQ7WQ.png"}
                alt="img"
              />

              <div>
                <div className="pet-div">
                  <img
                    className="pet"
                    src={
                      "https://cdn.alpha.art/opt/4/1/41ac75c4a7e3efa84e07df55cbeff41927ded201/196.webp"
                    }
                  />
                </div>
                <div>
                  <div className="buttons-follow">
                    <div className="all-btns-head">
                      <button
                        type="button"
                        className="dots-butn btn btn-outline-primary "
                      >
                        <i
                          className=" fa fa-ellipsis-h "
                          aria-hidden="true"
                        ></i>
                      </button>

                      <button
                        type="button"
                        className="dots-butn btn btn-outline-primary "
                      >
                        <i
                          className=" fa fa-envelope-o "
                          aria-hidden="true"
                        ></i>
                      </button>

                      <button
                        type="button"
                        className="dots-butn btn btn-outline-primary "
                      >
                        <span className="view">View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h5 className="heading-h4">{this.state.fullName}</h5>
                  <img
                    src={require("./assets/verified.png")}
                    style={{ width: "1.3rem" }}
                  />
                </div>
                <p className="para-3">@{this.state.fullName}</p>

                <p className="para-5">
                  I have named my little puppy as Lilly. She came home when she
                  was a hungry. I still remember, she could not even open her
                  eyes.
                </p>
                <div className="cal-main">
                  <div>
                    <div className="main-calen-div">
                      <i
                        className="calen fa fa-calendar"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <p className="cal-para">Joined january 2020</p>
                    </div>
                    <div className="main-friend">
                      <p className="friends12">1,234 </p>
                      <p className="fri">Friends</p>

                      <p className="tpost">55 </p>
                      <p className="pname">Posts</p>
                    </div>
                    <div className="para-name">
                      <small>Not posts by any one only you can post</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="nav nav-tabs nav-tab">
              <li className="nav-item nav-itm">
                <a className="nav-link active" href="#">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Photos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Others
                </a>
              </li>
            </ul>

            <div className="pin-para">
              <small>
                <i className="fa fa-thumb-tack pin" aria-hidden="true"></i>
                <p className="par">Pinned Posts</p>
              </small>

              <div>
                <img
                  className="pet2"
                  src={
                    "https://cdn.alpha.art/opt/4/1/41ac75c4a7e3efa84e07df55cbeff41927ded201/196.webp"
                  }
                />
              </div>
            </div>

            <div className="anc-puppy">
              <a className="pup-anc" href="#">
                Degod user
              </a>

              <a className="date" href="#">
                <p className="pupe">adasfh...fjksd</p>
              </a>
              <p className="pupe"> . </p>

              <a className="date" href="#">
                <p className="pupe">Feb 2,2020</p>
              </a>
            </div>

            <div className="">
              <p className="mar">I have named my little puppy as Lilly.</p>
              <p className="mar">I have named my little puppy as Lilly.</p>
              <br />
              <p className="mar">I have named my little puppy as Lilly.</p>
              <br />
              <a className="mar" href="#">
                @Kitty
              </a>
              &nbsp;
              <a className="apr" href="#">
                @Lilly
              </a>
              &nbsp;
              <a className="may" href="#">
                @Alanwalker
              </a>
            </div>

            <div className="border1">
              <div>
                <img className="pet3" src={require("./assets/jp.jpg")} />
              </div>

              <div className="anc-y">
                <a className="pup-anc" href="#">
                  Puppy
                </a>

                <a className="date" href="#">
                  <span className="pupe">23423-24234</span>
                </a>
                <span className="pupe"> . </span>

                <a className="date" href="#">
                  <span className="pupe">Feb 2,2020</span>
                </a>
              </div>

              <div>
                <p className="last-p">
                  Degod Degod Degod Degod Degod Degod Degod Degod Degod Degod
                  Degod Degod Degod Degod Degod Degod Degod Degod Degod Degod
                  Degod Degod Degod Degod Degod Degod Degod Degod
                </p>

                <div>
                  <img
                    className="pet4"
                    src={
                      "https://cdn.alpha.art/opt/4/1/41ac75c4a7e3efa84e07df55cbeff41927ded201/196.webp"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="noti">
              <div className="display">
                <i className="fa fa-comment-o noot" aria-hidden="true"></i>
                &nbsp;
                <p>19</p>
              </div>

              <div className="display">
                <i className="fa fa-heart-o noot" aria-hidden="true"></i>
                &nbsp; <p>23</p>
              </div>

              <div className="display">
                <i className="fa fa-bookmark-o noot" aria-hidden="true"></i>
                &nbsp; <p>49</p>
              </div>

              <div className="display">
                <img
                  className="arrowup noot"
                  src={require("./assets/arrows.png")}
                ></img>
                &nbsp;
                <p>34</p>
              </div>
            </div>

            <div className="br-2"></div>
          </div>

          {/* right hand side */}
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}

export default App;
