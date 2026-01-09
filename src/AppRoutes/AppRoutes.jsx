import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Opening from "../components/Opening";
import OurStory from "../components/OurStory";
import FirstMeet from "../components/FirstMeet";
import HappyBirthday from "../components/HappyBirthday";
import Memories from "../components/Memories";
import LoveGame from "../components/LoveGame";
import Enough from "../components/Enough";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening />} />
         <Route path="/our-story" element={<OurStory />} />
         <Route path="/first-meet" element={<FirstMeet />} />
         <Route path="/happy-birthday" element={<HappyBirthday />} />
          <Route path="/memories" element={<Memories />} />
           <Route path="/love-game" element={<LoveGame />} />
        <Route path="/poi-orgh" element={<Enough />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
