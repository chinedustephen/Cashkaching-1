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
    getLottoData().then(response => {
      console.log(response);
      this.setState({
        activeLottos: [response]
      });
    });
  }
  render() {
    const { activeLottos } = this.state;
    console.log(activeLottos);
    return (
      <div>
        {activeLottos
          .filter(lotto => lotto.status.status === true)
          .map(list => (
            <LottoCard
              key={list.id}
              type={list.description.lottotype}
              bg={list.style.bkColour}
              brb={list.style.border}
              bglabel={list.style.tablabelStyle}
              secbk={list.style.secondBkColour}
              endDate={list.status.end_date}
            />
          ))}
      </div>
    );
  }
}

export default LottoCardsList;
