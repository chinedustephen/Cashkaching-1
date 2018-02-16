import React, { Component } from "react";
import LottoCard from "../../components/LottoCard";
import { getLottoData } from "../../utils/Apis/LandingApis";

const LottoCards = [
  {
    id: 1,
    lottotype: "DAILY DRAW",
    bkcolour: "#6ca516",
    border: "8px solid #5e8a1c",
    tablabelStyle: "#5e8a1c",
    second: "#639A11",
    status: true,
    endDate: "2018-02-16 05:54:00"
  },
  {
    id: 2,
    lottotype: "WEEKLY DRAW",
    bkcolour: "#5C0D3C",
    border: "8px solid #42092B",
    tablabelStyle: "#42092B",
    second: "#5C0D3C",
    status: true,
    endDate: "2018-02-20 12:30:00"
  },
  {
    id: 3,
    lottotype: "MONTHLY DRAW",
    bkcolour: "#EF8A17",
    border: "8px solid #CC740E",
    tablabelStyle: "#CC740E",
    second: "#EF8A17",
    status: true,
    endDate: "2018-03-04 12:20:00"
  }
];

class LottoCardsList extends Component {
  constructor() {
    super();
    this.state = { activeLottos: [] };
  }

  componentDidMount() {
    this.getLottos();
  }

  getLottos() {
    getLottoData().then(activeLottos => {
      this.setState(activeLottos);
    });
  }
  render() {
    const { activeLottos } = this.state;
    console.log(activeLottos);
    return (
      <div>
        {LottoCards.filter(lotto => lotto.status === true).map(list => (
          <LottoCard
            key={list.id}
            type={list.lottotype}
            bg={list.bkcolour}
            brb={list.border}
            bglabel={list.tablabelStyle}
            secbk={list.second}
            endDate={list.endDate}
          />
        ))}
      </div>
    );
  }
}

export default LottoCardsList;
