import React from "react";

import SectionOneAndTwo from "../../components/LandingPageComponents/SectionOneAndTwo";
import SectionThree from "../../components/LandingPageComponents/SectionThree";
import SectionFour from "../../components/LandingPageComponents/SectionFour";
import SectionFive from "../../components/LandingPageComponents/SectionFive";
import SectionSix from "../../components/LandingPageComponents/SectionSix";
import SectionSeven from "../../components/LandingPageComponents/SectionSeven";
import SectionEight from "../../components/LandingPageComponents/SectionEight";
import Footer from "./LandingPageSections/Footer";

const LandingPage = () => (
  <div>
    <SectionOneAndTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <Footer />
  </div>
);

export default LandingPage;
