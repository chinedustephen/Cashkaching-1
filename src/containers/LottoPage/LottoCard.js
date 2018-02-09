import React from "react";
import LottoCard from "../../components/LottoCard";

const LottoCards = [
  {
    id: 1,
    lottotype: "DAILY DRAW",
    bkcolour: "#6ca516",
    border: "8px solid #5e8a1c",
    tablabelStyle: "#5e8a1c",
    second: "#639A11",
    status: false
  },
  {
    id: 2,
    lottotype: "WEEKLY DRAW",
    bkcolour: "#5C0D3C",
    border: "8px solid #42092B",
    tablabelStyle: "#42092B",
    second: "#5C0D3C",
    status: false
  },
  {
    id: 3,
    lottotype: "MONTHLY DRAW",
    bkcolour: "#EF8A17",
    border: "8px solid #CC740E",
    tablabelStyle: "#CC740E",
    second: "#EF8A17",
    status: true
  }
];

const LottoCardsList = () => (
  <div>
    {LottoCards.filter(lotto => lotto.status === true).map(list => (
      <LottoCard
        key={list.id}
        type={list.lottotype}
        bg={list.bkcolour}
        brb={list.border}
        bglabel={list.tablabelStyle}
        secbk={list.second}
      />
    ))}
  </div>
);

export default LottoCardsList;
