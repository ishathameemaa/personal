import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-8 animate-[var(--animate-fade-in)]">
        <h1 className="text-4xl font-bold text-rose-600">
          Our Story 💕
        </h1>

        <p className="text-lg text-gray-700">
          It all started with a simple conversation… <br />
          and somehow turned into my favorite love story ❤️
        </p>

        <button
          onClick={() => navigate("/first-meet")}
          className="px-8 py-3 bg-rose-600 text-white rounded-full text-lg font-semibold hover:scale-110 transition shadow-lg"
        >
          Our First Meet 💖
        </button>
      </div>
    </div>
  );
}
