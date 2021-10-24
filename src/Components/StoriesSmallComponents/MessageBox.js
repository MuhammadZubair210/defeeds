import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Message2.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [{ text: "Hello", dateTime: new Date() }],
      input: "",
      record: false,
      timer: 0,
      image: false,
      show: false,
    };
    this.messagesEnd = null;
    this.clear = null;
  }

  startRecording = () => {
    this.setState({ record: true });
    this.clear = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  stopRecording = () => {
    this.setState({ record: false, show: true, timer: 0 });

    clearInterval(this.clear);
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  send = (text) => {
    if (text !== "") {
      this.setState({
        chats: [...this.state.chats, { text: text, dateTime: new Date() }],
      });
    }
  };

  fileSelectedHandler = (e) => {
    let array = Array.from(e.target.files);
    console.log("----", array);
    setTimeout(() => {
      this.setState({ image: true });
    }, 3000);
    // if (this.state.images) {
    //   array.map((val) => URL.createObjectURL(val));
    //   this.setState({
    //     images: [...this.state.images, ...array],
    //   });
    // } else {
    //   this.setState({ images: array.map((val) => URL.createObjectURL(val)) });
    // }
  };

  render() {
    return (
      <div className="App2">
        <div>
          <div>
            <div
              className="chats-story"
              ref={(el) => {
                this.messagesEnd = el;
              }}
            >
              <div>
                <div className="sender-div">
                  <div>
                    <span className="sender-text">Hello</span>
                  </div>
                  <span className="sender-date">19:00</span>
                </div>

                <div className="receiver-div">
                  <div>
                    <span className="receiver-text">Test</span>
                  </div>
                  <span className="receiver-date">19:00</span>
                </div>

                <div className="receiver-div">
                  <div>
                    <span className="receiver-text">Test</span>
                  </div>
                  <span className="receiver-date">19:00</span>
                </div>
                <div
                  className={
                    this.state.show ? "audio-container" : "hide-audio-player"
                  }
                >
                  <AudioPlayer
                    src="https://www.computerhope.com/jargon/m/example.mp3"
                    onPlay={() => console.log("onPlay")}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    showJumpControls={false}
                  />
                </div>
                {this.state.image ? (
                  <div className="chat-image-div">
                    <div className="chat-image-subdiv">
                      <img
                        className="chat-image"
                        src="https://www.w3schools.com/w3css/img_lights.jpg"
                      />
                      <span className="sender-date">03:30</span>
                    </div>
                  </div>
                ) : null}
                {this.state.chats.length > 0
                  ? this.state.chats.map((val, ind) => {
                      return (
                        <div key={ind}>
                          {/* {val. */}
                          <div className="sender-div">
                            <div>
                              <span className="sender-text">{val.text}</span>
                            </div>
                            <span className="sender-date">
                              {val.dateTime.getDate() +
                                "/" +
                                (val.dateTime.getMonth() + 1) +
                                "/" +
                                val.dateTime.getFullYear() +
                                " " +
                                val.dateTime.getHours() +
                                ":" +
                                val.dateTime.getMinutes()}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            {/* <div className="abs">
              <div className="all-search-icons">
                <div>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={this.fileSelectedHandler}
                    style={{ display: "none" }}
                    // onMouseOver={() => this.setState({ whiteCamera: true })}
                    // onBlur={()=>this.setState({whiteCamera: false})}
                  />
                </div>

                <hr />
                <div>
                  <SendIcon style={{ color: "#2a2c7c" }} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
