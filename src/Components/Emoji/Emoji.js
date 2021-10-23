import React, { useState, useRef, useEffect } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import "./Emoji.css";
const App = ({ ...props }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const wrapperRef = useRef(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject.emoji);
    props.selectedEmoji(emojiObject.emoji);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      props.close();
    }
  };
  return (
    <div className="main-div-emoji" ref={wrapperRef}>
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: "PEOPLE" }}
        theme="dark"
      />
    </div>
  );
};
export default App;
