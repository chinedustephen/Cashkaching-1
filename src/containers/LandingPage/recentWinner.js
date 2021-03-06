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
      this.setState(recentWinner);
    });
  }

  render() {
    const { recentWinner } = this.state;
    console.log(recentWinner);
    return (
      <div>
        {recentWinner.map((winner, index) => (
          <div key={index}>
            <SectionSix
              recentWinnerImg={winner.image}
              comment={winner.testimonials}
              name={winner.name}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default RecentWinner;
