/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import SectionOneAndTwoBackground from "./LandingPageSections/SectionOneAndTwoBackground";
import SectionThree from "./LandingPageSections/SectionThree";
import SectionFour from "./LandingPageSections/SectionFour";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <SectionOneAndTwoBackground />
        <SectionThree />
        <SectionFour />
      </div>
    );
  }
}

export default LandingPage;
