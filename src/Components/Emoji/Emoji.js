import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import "./Emoji.css"
const App = ({...props}) => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.emoji)
        props.selectedEmoji(emojiObject.emoji)
    }

    return (
        <div className="main-div-emoji">
            <div className="cross-emoji" onClick={()=>props.close()}>X</div>
            <Picker onEmojiClick={onEmojiClick}
             disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
             groupNames={{smileys_people:"PEOPLE"}}
            />
            {/* { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>} */}
        </div>
    );
};
export default App;