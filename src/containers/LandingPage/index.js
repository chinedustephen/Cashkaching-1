import React from "react";

import SectionOneAndTwo from "../../components/LandingPageComponents/SectionOneAndTwo";
import SectionThree from "../../components/LandingPageComponents/SectionThree";
import SectionFour from "../../components/LandingPageComponents/SectionFour";
import SectionFive from "../../components/LandingPageComponents/SectionFive";
import RecentWinner from "./recentWinner";
import SectionSix from "../../components/LandingPageComponents/SectionSix";
import SectionSeven from "../../components/LandingPageComponents/SectionSeven";
import SectionEight from "../../components/LandingPageComponents/SectionEight";
import Footer from "../../components/LandingPageComponents/Footer";

const LandingPage = () => (
  <div>
    <SectionOneAndTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <RecentWinner />
    <SectionSeven />
    <SectionEight />
    <Footer />
  </div>
);

export default LandingPage;
