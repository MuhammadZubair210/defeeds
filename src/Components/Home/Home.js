import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import HomeIcon from "@material-ui/icons/Home";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { useWallet } from "@solana/wallet-adapter-react";
import * as firebase from "firebase";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";
import { getUserStories, userStories } from "../../store/actions/authActions";
import Sidenav from "../SideNav/SideNav";
import Story from "../Story/Story";
import RightSideNav from "../trends/Trends";
import "./Home.css";
import PhotoPost from "./HomeComponents/PhotoPost";
import VideoPost from "./HomeComponents/VideoPost";
import HomeRecommendations from "./HomeRecommendations";
import NewPost from "./NewPost";

const Home = ({ ...props }) => {
  const [video, setVideo] = useState(false);
  const [images, setImages] = useState([]);
  const [post, setPost] = useState("");
  const [url, setUrl] = useState("");
  const [emoji, setEmoji] = useState(null);
  const [postType, setPostType] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [allPosts, getAllPosts] = useState([]);
  const [stories] = useState([1, 2, 3, 4, 5, 6, 7]);
  const { publicKey } = useWallet();
  let pubKey = publicKey?.toBase58();

  useEffect(() => {
    const Db = firebase.firestore();

    Db.collection("Posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          getAllPosts((posts) => [...posts, data]);
        });
      });
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  });
  const handleClose = useCallback(async () => {
    await newPost();
  });
  const selectImages = useCallback((e) => {
    setPostType("images");

    let array = Array.from(e.target.files);
    if (images.length > 0) {
      array.map((val) => URL.createObjectURL(val));
      setImages((img) => [...img, ...array]);
    } else {
      setImages(array.map((val) => URL.createObjectURL(val)));
    }
  });
  const selectVideo = useCallback((e) => {
    setPostType("video");

    setVideo(URL.createObjectURL(e.target.files[0]));
  });

  const refresh = useCallback(() => {
    setVideo(null);
    setImages([]);
    setIsLoading(false);
    setOpen(false);
  });

  const background_selected = useCallback((_selected) => {
    setUrl(_selected);
  });

  const _setPost = useCallback((e) => {
    setPost(e.target.value);
  });

  const uploadImageAsync = useCallback(async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase
      .storage()
      .ref()
      .child("publicKey?.toBase58()")
      .child(uuid.v4());
    const snapshot = await ref.put(blob);

    let getDownloadURL = await snapshot.ref.getDownloadURL();
    // this.newPost(getDownloadURL);
    return getDownloadURL;
  });

  const savePostDetails = useCallback(async (uploadedAssets) => {
    const Db = firebase.firestore();
    let newPost = {
      emoji: emoji,
      post: post,
      postType: postType,
      url: uploadedAssets,
      poster: publicKey ? publicKey?.toBase58() : "",
      created_date: firebase.database.ServerValue.TIMESTAMP,
    };

    let res = await Db.collection("Posts")
      .add(newPost)
      .then((e) => {
        console.log(e.id);
        setVideo(null);
        setImages([]);
        setIsLoading(false);
        setOpen(false);
      })
      .catch((e) => {
        setVideo(null);
        setImages([]);
        setIsLoading(false);
        setOpen(false);
      });
    return res;
  });

  const newPost = useCallback(async () => {
    setIsLoading(true);
    if (postType === "video") {
      let uploadedVideo = await uploadImageAsync(video);
      savePostDetails(uploadedVideo);
    } else if (postType === "images") {
      let uploadedImages = [];
      let uploadingImages = images.map(async (image) => {
        let uploadedImage = await uploadImageAsync(image);
        uploadedImages.push(uploadedImage);
      });

      return Promise.all(uploadingImages).then(() => {
        savePostDetails(uploadedImages);
      });
    } else if (postType === "background-image") {
      savePostDetails(url);
    } else {
      savePostDetails("");
    }
  });

  console.log(allPosts);

  // render() {
  return (
    <div className="Home">
      <Sidenav {...props} profilePic={""} />
      {/* ******************* CENTER ********************* */}
      <div className="center">
        <div className="home-heading">
          <div className="parent">
            <div className="child">
              <HomeIcon style={{ color: "#3aa1f2" }} />
            </div>
          </div>
        </div>

        {stories !== null && stories.length > 0 ? (
          <Story gotoStory stories={stories} />
        ) : null}
        <div
          className="btn new-post-div"
          onClick={handleOpen}
          style={!pubKey ? { pointerEvents: "none", opacity: "0.5" } : {}}
        >
          <div className="sub-post">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <img
                  src={
                    "https://cdn.alpha.art/opt/b/c/bcd01c3a0fb34e0a7b38e42b11d7cf8dd9c0091a/340.webp"
                  }
                  alt="Snow"
                  class="profile-img"
                />
              </div>
              <div class="form-control post-div-home">
                What's on your mind ?
              </div>
            </div>

            <hr />
            <div className="buttons">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <PhotoSizeSelectActualIcon style={{ color: "#60be63" }} />
                <div className="photos-feelings-heading">Photos</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <EmojiEmotionsIcon style={{ color: "#f6ba33" }} />
                <div className="photos-feelings-heading">Feeling/Activity</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <HomeRecommendations />
        </div>

        <div>
          {allPosts.map((val, ind) => {
            if (val.postType === "images") {
              return <PhotoPost val={val} key={ind} />;
            }
            if (val.postType === "video") {
              return <VideoPost val={val} key={ind} />;
            }
          })}
        </div>
      </div>
      {open ? (
        <NewPost
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          selectImages={selectImages}
          selectVideo={selectVideo}
          images={images}
          video={video}
          refresh={refresh}
          setPost={_setPost}
          setEmoji={setEmoji}
          setPostType={setPostType}
          emoji={emoji}
          isLoading={isLoading}
          postType={postType}
          post={post}
          background_selected={background_selected}
        />
      ) : null}
      <RightSideNav {...props} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  userStories: bindActionCreators(userStories, dispatch),
  getUserStories: bindActionCreators(getUserStories, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
