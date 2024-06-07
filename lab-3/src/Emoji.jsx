import { useState } from "react";

function Emoji () {
    const [emoji, setEmoji] = useState('\u{1F600}');

    function ChangeMood () {
        setEmoji(emoji == '\u{1F600}' ? '\u{1F641}' : '\u{1F600}');
    }

    return (
        <>
            <h1>{emoji}</h1>
            <button onClick={ChangeMood}>Change Mood</button>
        </>
    )
}

export default Emoji;