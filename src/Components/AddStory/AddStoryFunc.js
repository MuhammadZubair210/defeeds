import React from "react";
import Addstory from "./Addstory";
import * as firebase from "firebase";

class AddStoryFunc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      fullName: "",
      profilePic: "",
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`users/${this.state.userId}/`)
      .on("value", (val) => {
        console.log(val);
        this.setState({
          fullName: val.val().fullName !== "" ? val.val().fullName : "Puppy",
          profilePic: val.val().profilePic,
        });
      });
  }

  fileSelectedHandler = (e) => {
    let array = Array.from(e.target.files);
    if (this.state.images) {
      array.map((val) => URL.createObjectURL(val));
      console.log(array);
      this.setState({
        images: [...this.state.images, ...array],
      });
    } else {
      // console.log("URL.createObjectURL(val",URL.createObjectURL(val))
      array.map((val) => console.log(URL.createObjectURL(val)));
      this.setState({ images: array.map((val) => URL.createObjectURL(val)) });
    }
  };

  removeStoryItem = (ind) => {
      this.state.images.splice(ind,1);
      this.setState({images:this.state.images});
  }
  render() {
    console.log("---", this.state.images);
    return (
      <Addstory
      props={this.props}
        images={this.state.images}
        profilePic={this.state.profilePic}
        fullName={this.state.fullName}
        removeStoryItem={this.removeStoryItem}
        fileSelectedHandler={this.fileSelectedHandler}
      />
    );
  }
}

export default AddStoryFunc;
