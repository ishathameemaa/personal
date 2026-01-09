import { useNavigate } from "react-router-dom";

export default function HappyBirthday() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 text-black">
      <div className="w-full max-w-3xl text-center space-y-6 sm:space-y-8 animate-[var(--animate-fade-in)]">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Happy Birthday  
          <span className="block text-pink-600 mt-1">Bebby 🎂❤️</span>
        </h1>

        {/* MESSAGE */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 px-1 sm:px-0">
          You are the calm my heart searched for without knowing it needed.
          Through distance, silence, fights, and healing, you stayed—and that
          means everything to me. Loving you taught me patience, strength, and
          trust. Even when we couldn’t talk every day, even when life became
          heavy, my heart always felt safe with you. You are not just the person
          I love; you are my comfort, my shelter, and my peace. I’m grateful for
          your care, your patience, and the way you choose us every single day.
          May this year bring you happiness, success, and all the dreams you’re
          working so hard for. No matter where life takes us, my heart walks with
          you—always. 🤍
        </p>

        {/* BUTTON */}
        <div className="pt-4">
          <button
            onClick={() => navigate("/memories")}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-3.5 
                       rounded-full text-white text-base sm:text-lg font-medium
                       bg-gradient-to-r from-pink-500 to-red-500
                       hover:from-pink-600 hover:to-red-600
                       active:scale-95 transition-all duration-300 shadow-lg"
          >
            Our Memories 💕 →
          </button>
        </div>

      </div>
    </div>
  );
}
