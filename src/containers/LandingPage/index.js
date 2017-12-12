/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import SectionOneAndTwoBackground from "./LandingPageSections/SectionOneAndTwoBackground";
import SectionThree from "./LandingPageSections/SectionThree";
import SectionFour from "./LandingPageSections/SectionFour";
import SectionFive from "./LandingPageSections/SectionFive";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <SectionOneAndTwoBackground />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    );
  }
}

export default LandingPage;
