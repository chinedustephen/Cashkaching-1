/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import SectionOneAndTwoBackground from "./LandingPageSections/SectionOneAndTwoBackground";
import SectionThree from "./LandingPageSections/SectionThree";
import SectionFour from "./LandingPageSections/SectionFour";
import SectionFive from "./LandingPageSections/SectionFive";
import SectionSix from "./LandingPageSections/SectionSix";
import SectionSeven from "./LandingPageSections/SectionSeven";
import SectionEight from "./LandingPageSections/SectionEight";
import Footer from "./LandingPageSections/Footer";

class LandingPage extends Component {
  render() {
    return (
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
  }
}

export default LandingPage;
