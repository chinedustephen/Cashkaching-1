import React, { Component } from "react";
import styled from "styled-components";
import UnlockDrawsCard from "../../components/UnlockDrawsCard";
import { UnlockLottery } from "../../utils/Apis/LottoApi";

const UnlockedLottoCards = [
  {
    id: 1,
    description: "Plays to unlocking weekly draw",
    amount: "N 100 000",
    plays: "4",
    played: "4",
    iconBk: "#F95800",
    bk: "#42092B",
    status: true
  },
  {
    id: 2,
    description: "Plays to unlocking weekly draw",
    amount: "N 100 000",
    plays: "8",
    played: "4",
    iconBk: "#42092B",
    bk: "#EF8A17",
    status: true
  }
];

const Nested = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(93px, auto);
  grid-gap: 1em;
  @media only screen and (max-width: 724px) {
    grid-template-columns: 1fr;
  }
`;

class UnlockedLottoCardsList extends Component {
  constructor() {
    super();
    this.state = { UnlockedLottos: [] };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      this.getUnlocked(token);
    }
  }

  getUnlocked(token) {
    UnlockLottery(token).then(response => {
      console.log(response);
      this.setState({
        UnlockedLottos: [response]
      });
    });
  }

  render() {
    const { Unlocked } = this.state;
    return (
      <div>
        <Nested>
          {UnlockedLottoCards.filter(lotto => lotto.status === true).map(
            card => (
              <UnlockDrawsCard
                key={card.id}
                description={card.description}
                amount={card.amount}
                plays={card.plays}
                played={card.played}
                iconBk={card.iconBk}
                bk={card.bk}
              />
            )
          )}
        </Nested>
      </div>
    );
  }
}

export default UnlockedLottoCardsList;
