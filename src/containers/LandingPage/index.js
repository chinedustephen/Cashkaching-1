import React from "react";

import SectionOneAndTwoBackground from "../../components/LandingPageComponents/SectionOneAndTwoBackground";
import SectionThree from "./LandingPageSections/SectionThree";
import SectionFour from "./LandingPageSections/SectionFour";
import SectionFive from "./LandingPageSections/SectionFive";
import SectionSix from "./LandingPageSections/SectionSix";
import SectionSeven from "./LandingPageSections/SectionSeven";
import SectionEight from "./LandingPageSections/SectionEight";
import Footer from "./LandingPageSections/Footer";

const LandingPage = () => (
  <div>
    <SectionOneAndTwoBackground />
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
