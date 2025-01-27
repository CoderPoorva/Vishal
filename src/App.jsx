import React, { useEffect, useState } from "react";
import "./App.css";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Confetti from "react-confetti";
import Envelope from "../public/image/envelope.png";
import Couple from "../public/image/Couple.jpg";


const App = () => {
  const [step, setStep] = useState(-1);
  const [showButton, setShowButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const nextStep = () => setStep(step + 1);

  const [audio] = useState(new Audio("/Audio/bgmusic.mp3"));

  const startAudio = () => {
    audio.play();
    console.log("audio played");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setStep(step + 1);
    setShowConfetti(true);

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); //
  };

  return (
    <div className="app-container">
      {step === -1 && (
        <div className="welcome-screen">
          <h1>Welcome to a Magical Moment</h1>
          <p style={{ fontSize: "25px", color: "white" }}>
            Your journey begins here...
          </p>
          <button
            className="next-button"
            onClick={nextStep}
            style={{ marginTop: "20px" }}
          >
            Start
          </button>
        </div>
      )}

      {step === 0 && (
        <div className="welcome-screen">
          <h1>Let's Play the Music</h1>
          <div
            className="audio-player"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="Play-btn" onClick={startAudio}>
              <PlayCircleOutlineRoundedIcon style={{ fontSize: "2rem" }} />
            </button>
            {showButton && (
              <button className="next-button" onClick={nextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="question-screen">
          <h2>
            Hey " pasandida aurat " 💗 I want to tell you something. Is your
            excitement the same as mine?
          </h2>
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="question-screen">
          <h2>
            It has been almost five years since we became friends 🤝. It has
            taken me two years to realize I have feelings for you 🥰. Do you
            have that one feeling for me  👉👈?
          </h2>
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="envelope-screen">
          <div className="envelope" onClick={nextStep}>
            <img src={Envelope} alt="" style={{ width: "100px" }} />
          </div>
          <p style={{ fontSize: "25px", color: "white" }}>
            Click the envelope to open a special letter...
          </p>
        </div>
      )}

      {step === 4 && (
        <div className="letter-screen">
          <div className="letter">
            <p>Dear Love,</p>
            <p>
              I want to let you know that I like you more than a friend. We have
              been good friends, but you are more than a friend to me. I like
              you and want our relationship to be more than friendship. I have
              decided not to be shy about saying what I have been feeling for so
              long. I love you....🌻❤️, and I have been hiding it since we met.
              My feelings for you are not worth keeping inside. They need to be
              showcased in front of you. Let me do it...... 🥺 I love you
              Sampurna AKA Golu ( My one and only love ) 😘. Do you love
              me......? If your answer is yes,then visit to the next page. I
              have dedicated a poem for you written by me. If you like it, I
              also deserve a kiss 🥺 .
            </p>
            <p>Will you be mine forever?</p>
            <p>With all my love,</p>
            <p>Vishal</p>
          </div>
          <button onClick={handleClick} className="next-button">
            Next
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="poem-screen">
          {showConfetti && <Confetti />}
          <p>
            তোমার আঙুলে রেখেছি আঙুল ছুঁয়ে <br />
            শহরের ভিড়ে দেখেছি তোমার চোখ ।<br />
            <br />
            বিকল যত অন্ধ চিন্তা আসে <br />
            চাইছি তারা আজকে শুন্য হোক ।<br />
            <br />
            উড়ে যাক সব হিসেবের কালোচিঠি <br />
            এমনিও তুমি বন্যা হয়েই আসো ।<br />
            <br />
            না বলা কথা জড়িয়ে যায় মুখে <br />
            বোঝা যায় তুমি আমাকেই ভালোবাসো ।<br />
            <br />
            আসমানী যত পুরোনো তারার ভিড়ে <br />
            সাজিয়ে রাখবো তোমায় নিজের ঘরে ।<br />
            <br />
            তুমিও পারলে একখানা ছবি রেখো
            <br />
            যাতে যখন তখন আমায় মনে পরে ।<br />
            <br />
            চলো আবার দুজন সাদামাটা প্রেম করি
            <br />
            বেশিকিছু আমি চাইনা তোমার থেকে ।<br />
            <br />
            তোমার ভীষণ ব্যস্ত সময় ঘড়ির জালে <br />
            আমাকে তুমি এক কোণে দিও রেখে ।<br />
            <br />
            রাখবনা আমি মাঝখানে আর কিছু <br />
            মন মানেনা আমার তোমাকে ছাড়া ।<br />
            <br />
            আসলে তোমায় আমি চাইছি এত বেশি <br />
            তোমাকে ছাড়া আমি দিশেহারা ।
            <br />
          </p>
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 6 && (
        <div className="end-screen">
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img src={Couple} alt="Couple" className="couple-image" />
          </div>
          <h1 className="love-text">I LOVE YOU ❤️</h1>
        </div>
      )}
      <footer  style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "5px 0",
        fontSize: "14px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}>
        <p>Made with ❤️ by Poorva</p>
      </footer>
    </div>
  );
};

export default App;
