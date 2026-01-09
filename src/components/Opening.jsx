import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ IMPORT IMAGE PROPERLY
import memoryImg from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.34 AM.jpeg"; 
// ⬆️ rename your image to memory.jpeg (no spaces)

export default function Opening() {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  const navigate = useNavigate();
  const fullText = "🎉 Happy Birthday Bebby 😳💖";

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-200 via-rose-300 to-pink-400 text-white overflow-hidden px-4">

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-xl opacity-80 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      {!started ? (
        /* FIRST SCREEN */
        <div className="text-center space-y-6 z-10 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hey You 😌💞
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-95">
            Just a small warning 🤭  
            <br />
            This page may cause  
            <span className="font-semibold text-white">
              unexpected smiling 😳
            </span>
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-4 px-8 py-3 bg-rose-600 rounded-full
                       text-base sm:text-lg font-semibold
                       hover:scale-110 active:scale-95
                       transition-all duration-300 shadow-xl"
          >
            Okay… open it 💝
          </button>
        </div>
      ) : (
        /* AFTER CLICK */
        <div className="max-w-2xl sm:max-w-xl text-center space-y-6 z-10 animate-fade-up">

          {/* TYPING */}
          <h1 className="text-3xl sm:text-4xl font-bold min-h-[60px] animate-soft-glow">
            {text}
            {!doneTyping && <span className="animate-pulse">|</span>}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">
            Okay listen carefully 😌  
            <br />
            Today is your birthday…  
            <br />
            and I just want you to know  
            <br />
            <span className="font-semibold text-white">
              you make my world softer 💗
            </span>
          </p>

          <p className="text-sm sm:text-base opacity-95 leading-relaxed">
            You make me smile without trying 😄  
            <br />
            You make me feel safe 🤍  
            <br />
            You make normal days special ✨  
            <br />
            <span className="font-semibold">
              and yes… you make me blush too 😳
            </span>
          </p>

          {/* IMAGE */}
          <div className="space-y-2 animate-scale-in">
            <img
              src={memoryImg}
              alt="Our Memory"
              className="rounded-2xl shadow-xl mx-auto w-full max-w-xs sm:max-w-sm
                         hover:scale-105 transition duration-500"
            />
            <p className="italic text-sm opacity-90">
              My favorite comfort 💕
            </p>
          </div>

          <p className="text-base sm:text-lg">
            So today…  
            <br />
            smile slowly 😌  
            <br />
            feel loved deeply 💖  
            <br />
            and remember  
            <br />
            <span className="font-bold animate-heartbeat">
              you are very special to me 🫶
            </span>
          </p>

          {doneTyping && (
            <button
              onClick={() => navigate("/our-story")}
              className="mt-4 px-8 py-3 bg-white text-rose-600 rounded-full
                         text-base sm:text-lg font-semibold
                         hover:scale-110 active:scale-95
                         transition shadow-lg animate-bounce-soft"
            >
              Continue… slowly 😳💗
            </button>
          )}
        </div>
      )}
    </div>
  );
}
