import React, { Component } from "react";
import SectionSix from "../../components/LandingPageComponents/SectionSix";
import { getRecentWinnerData } from "../../utils/Apis/LandingApis";

class RecentWinner extends Component {
  constructor() {
    super();
    this.state = { recentWinner: [] };
  }

  componentDidMount() {
    this.getRecentWinner();
  }
  getRecentWinner() {
    getRecentWinnerData().then(recentWinner => {
      this.setState({ recentWinner });
    });
  }

  render() {
    const { recentWinner } = this.state;

    return (
      <div>
        <SectionSix comment="this is what i am saying" name="Gideon" />
      </div>
    );
  }
}

export default RecentWinner;
