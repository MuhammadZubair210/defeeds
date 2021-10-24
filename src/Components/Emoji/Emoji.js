import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import "./Emoji.css";

const Emoji = ({ ...props }) => {
  const wrapperRef = useRef(null);

  const onEmojiClick = (a = "", emojiObject) => {
    console.log(a);
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
export default Emoji;

Emoji.propTypes = {
  selectedEmoji: PropTypes.any,
  close: PropTypes.any,
};
