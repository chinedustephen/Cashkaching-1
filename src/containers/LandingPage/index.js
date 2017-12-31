import React from "react";

import SectionOneAndTwo from "../../components/LandingPageComponents/SectionOneAndTwo";
import SectionThree from "../../components/LandingPageComponents/SectionThree";
import SectionFour from "../../components/LandingPageComponents/SectionFour";
import SectionFive from "../../components/LandingPageComponents/SectionFive";
import SectionSix from "./LandingPageSections/SectionSix";
import SectionSeven from "./LandingPageSections/SectionSeven";
import SectionEight from "./LandingPageSections/SectionEight";
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
