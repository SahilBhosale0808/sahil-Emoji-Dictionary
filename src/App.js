import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "🚗": "Car",
    "🚓": "Police Car",
    "🚕": "Taxi",
    "🛺": "Auto Rickshaw",
    "🚙": "SUV",
    "🚌": "Bus",
    "🚐": "Mini Bus",
    "🚎": "Trolley Bus",
    "🚑": "Ambulance",
    "🚒": "Fire Engine",
    "🚚": "Delivery Van",
    "🚛": "Articulated Lorry",
    "🚜": "Tractor",
    "🦽": "Manual Wheelchair",
    "🦼": "Motorized Wheelchair",
    "🛹": "SkateBoard",
    "🚲": "Bicycle",
    "🛴": "Kick Scooter",
    "🛵": "Motor Scooter",
    "🏍": "MotorCycle",
    "🏎": "RacinG Car",
    "🚄": "High-speed Train",
    "🚅": "Bullet Train",
    "🚈": "Light Rail",
    "🚝": "Mono Rail",
    "🚃": "Railway Carriage",
    "🚋": "Tram Car",
    "🚆": "Train",
    "🚊": "Tram",
    "🚇": "Metro",
    "🚟": "Suspension Railway",
    "🚠": "Mountain Cableway",
    "🚡": "Aerial Tramway",
    "🚂": "Locomotive",
    "✈": "Aeroplane",
    "🪂": "Parachute",
    "🚁": "Helicopter",
    "🚀": "Rocket",
    "🛸": "Flying Saucer",
    "🛰": "Satellite",
    "⛵": "Sailing Boat",
    "🚤": "Speed Boat",
    "🛥": "Motor Boat",
    "⛴": "Ferry",
    "🛳": "Passenger Shipe",
    "🚢": "Ship"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  let emojiInputHandler = (event) => {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "ERROR 404 : We Dont Have It In The Database";
    }

    setMeaning(meaning);
  };

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>🚗Transport Emoji Dictionary🚗</h1>
      <input onChange={emojiInputHandler}></input>

      <div className="meaningstyle">{meaning}</div>

      <div className="heading">EMOJIS WE KNOW</div>
      <div>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
