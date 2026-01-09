import React from "react";
import { Link } from "react-router-dom";

const Enough = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl p-8 text-center">

        <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
          🎉 Once Again Happy Birthday 🎂
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-5">
          വീണ്ടും ഒരിക്കൽ കൂടി പറയാം…  
          <br />
          <span className="font-semibold text-pink-500">
            Happy Birthday 🎉🎂
          </span>
          <br /><br />
           
          മെസേജ് കണ്ടു 📱  
          സ്റ്റാറ്റസ് ഇട്ടു 📸  
          സ്റ്റോറി കണ്ടു 👀  
          wishes എണ്ണി തീർന്നില്ല 🤭  
          <br /><br />
          ഇത്രയും attention നിനക്ക് മതി 😌  
          ഇനി അല്പം കൂടി എടുത്താൽ  
          നേരെ <span className="font-semibold">overload</span> ആവും 😂
        </p>

        <p className="text-gray-600 text-base leading-relaxed mb-5">
          ഇനി ചെയ്യേണ്ട കാര്യങ്ങൾ ശ്രദ്ധിക്കുക 👇  
          <br /><br />
          👉 ഫോൺ പതുക്കെ താഴെ വെക്കുക 📵  
          👉 ലൈറ്റ് ഓഫ് ചെയ്യുക 💡  
          👉 ബെഡിൽ കിടക്കുക 🛏️  
          👉 കണ്ണടയ്ക്കുക 👀  
          👉 brain shutdown mode ON 🧠❌  
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          ഇനി thinking വേണ്ട…  
          past, future, life, universe  
          ഒന്നും analyze ചെയ്യണ്ട 😌  
          <br /><br />
          നാളെ വീണ്ടും birthday feel എടുക്കാം 😏  
          ഇന്നത്തേക്ക്  
          <span className="font-semibold">
            Birthday Celebration Officially Closed 🚫🎂
          </span>
        </p>

        <p className="text-gray-700 mb-6">
          അധികം cute ആവേണ്ട…  
          അധികം emotional ആവേണ്ട…  
          അധികം overthinking വേണ്ട…  
          <br /><br />
          നേരെ പോയി  
          <span className="font-bold text-purple-600 text-lg">
            ഉറങ്ങിക്കോ 🤭
          </span>
          <br /><br />
          അല്ലെങ്കിൽ ഞാൻ തന്നെ വന്ന്  
          <span className="font-semibold">ലൈറ്റ് ഓഫ്</span> ചെയ്യും 😏  
          <br /><br />
          <span className="font-bold text-pink-600 text-lg">
            idiot 😜
          </span>
        </p>

        <div className="text-4xl mb-4">😴💤</div>

        <p className="text-sm text-gray-400">
          — Issued in Public Interest by Birthday Management Thameema 💕
        </p>
         <Link to="/">
  <button
    className="px-6 py-2 bg-pink-500 text-white rounded-xl
               hover:bg-pink-600 transition"
  >
    once Again please
  </button>
</Link>
      </div>
       
    </div>
  );
};

export default Enough;
