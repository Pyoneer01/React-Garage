import React from "react";

function Car({ id, name, imgURL, imgAlt, description, sound, isPlaying, onPlaySound }) {

    function playSound() {
        onPlaySound(id, sound);
    }

    return (
        <div className={`car ${isPlaying ? "playing" : ""}`}>
            <h2>{name}</h2>
            <img src={imgURL} alt={imgAlt} />
            <p>{description}</p>
            <button type="button" className="revbtn" onClick={playSound}>
                Rev it up 🔉
            </button>
        </div>
    );
}

export default Car;
