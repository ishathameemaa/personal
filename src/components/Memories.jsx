import mem1 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.32 AM.jpeg";
import mem2 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.31 AM (1).jpeg";
import mem3 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.32 AM (1).jpeg";
import mem4 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.32 AM (3).jpeg";
import mem5 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.35 AM.jpeg";
import mem6 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.37 AM.jpeg";
import mem7 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.35 AM (1).jpeg";
import mem8 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.39 AM.jpeg";
import mem9 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.38 AM (1).jpeg";
import mem10 from "/assets/us/WhatsApp Image 2026-01-09 at 11.47.36 AM.jpeg";

import { useNavigate } from "react-router-dom";

export default function Memories() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 py-8 sm:py-10 px-3 sm:px-4">

      {/* TEXT SECTION */}
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          Our Memories 💖
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Ten moments. Ten feelings. One love story that lives forever 🤍
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">

        <div className="sm:col-span-4"><MemoryBox img={mem1} /></div>
        <div className="sm:col-span-8"><MemoryBox img={mem2} /></div>

        <div className="sm:col-span-6"><MemoryBox img={mem3} /></div>
        <div className="sm:col-span-6"><MemoryBox img={mem4} /></div>

        <div className="sm:col-span-5"><MemoryBox img={mem5} /></div>
        <div className="sm:col-span-7"><MemoryBox img={mem6} /></div>

        <div className="sm:col-span-3"><MemoryBox img={mem7} /></div>
        <div className="sm:col-span-9"><MemoryBox img={mem8} /></div>

        <div className="sm:col-span-6"><MemoryBox img={mem9} /></div>
        <div className="sm:col-span-6"><MemoryBox img={mem10} /></div>

      </div>

      {/* BACK TO HOME BUTTON */}
      <div className="flex justify-center mt-10 sm:mt-12">
        <button
          onClick={() => navigate("/love-game")}
          className="px-6 sm:px-8 py-3
                     rounded-full
                     bg-gradient-to-r from-pink-500 to-red-500
                     text-white text-sm sm:text-base md:text-lg font-medium
                     shadow-lg hover:shadow-xl
                     hover:scale-105 active:scale-95
                     transition-all duration-300"
        >
          I want to test you 😉😂 
        </button>
      </div>

    </div>
  );
}

/* MEMORY BOX COMPONENT */
function MemoryBox({ img }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden
                 
                 hover:scale-[1.02]
                 transition-transform duration-300
                 bg-transparent"
    >
      <img
        src={img}
        alt="memory"
        className="w-full h-auto max-h-[70vh] object-contain"
      />

      {/* Soft overlay on hover */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition"></div>
    </div>
  );
}
