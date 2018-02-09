import React from "react";
import CountDownLottoCard from "../../components/CountDownLotto";

const CountDownCards = [
  {
    id: 1,
    cardLabel: "PLAYED DAILY DRAW",
    bkcolour: "#6ca516",
    border: "8px solid #5e8a1c",
    tablabelStyle: "#5e8a1c",
    second: "#639A11",
    status: true,
    outer: "#5E8A1C",
    mid: "#689F15",
    top: "#6CA516"
  },
  {
    id: 2,
    cardLabel: "PLAYED WEEKLY DRAW",
    bkcolour: "#5C0D3C",
    border: "8px solid #42092B",
    tablabelStyle: "#42092B",
    second: "#5C0D3C",
    status: true,
    outer: "#42092B",
    mid: "#530B35",
    top: "#5C0D3C"
  },
  {
    id: 3,
    cardLabel: "PLAYED MONTHLY DRAW",
    bkcolour: "#EF8A17",
    border: "8px solid #CC740E",
    tablabelStyle: "#CC740E",
    second: "#EF8A17",
    status: true,
    outer: "#CC740E",
    mid: "#E57C04",
    top: "#EF8A17"
  }
];

const CountDownLottoCardsList = () => (
  <div>
    {CountDownCards.filter(lotto => lotto.status === true).map(card => (
      <CountDownLottoCard
        key={card.id}
        cardLabel={card.cardLabel}
        bg={card.bkcolour}
        brb={card.border}
        bglabel={card.tablabelStyle}
        secbk={card.second}
        // timer
        outer={card.outer}
        mid={card.mid}
        top={card.top}
        // GirlSvg
        outerGirl={card.outer}
        topGirl={card.top}
      />
    ))}
  </div>
);

export default CountDownLottoCardsList;
