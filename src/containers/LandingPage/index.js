/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import SectionOneAndTwoBackground from "./LandingPageSections/SectionOneAndTwoBackground";
import SectionThree from "./LandingPageSections/SectionThree";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <SectionOneAndTwoBackground />
        <SectionThree />
      </div>
    );
  }
}

export default LandingPage;
