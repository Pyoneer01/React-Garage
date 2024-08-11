import React, { useState, useRef } from 'react';
import Car from "./Car";
import cars from "../cars";

function App() {
    const [currentAudio, setCurrentAudio] = useState(null);
    const [playingCarId, setPlayingCarId] = useState(null);
    const audioRef = useRef(null);

    const handlePlaySound = (carId, sound) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        const newAudio = new Audio(sound);
        setCurrentAudio(newAudio);
        setPlayingCarId(carId);
        newAudio.play();
        newAudio.addEventListener('ended', () => {
            setPlayingCarId(null);
        });
        audioRef.current = newAudio;
    };

    return (
        <>
            <h1 id="heading">React Garage</h1>
            <div id="carlist">
                {cars.map((car, index) => (
                    <Car
                        key={index}
                        id={index}
                        name={car.name}
                        imgURL={car.img}
                        imgAlt={`${car.name} image`}
                        description={car.desc}
                        sound={car.audio}
                        isPlaying={playingCarId === index}
                        onPlaySound={handlePlaySound}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
