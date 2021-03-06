import React from "react";
import CongratulationsLottoCard from "../../components/CongratulationsLottoCard";

const CongratulationsCards = [
  {
    id: 1,
    cardLabel: "DAILY DRAW COUNTDOWN",
    description: "Count down till the daily draw:",
    ammount: "50 000",
    bkcolour: "#6ca516",
    border: "8px solid #5e8a1c",
    tablabelStyle: "#5e8a1c",
    second: "#639A11",
    status: false,
    outer: "#5E8A1C",
    mid: "#689F15",
    top: "#6CA516"
  },
  {
    id: 2,
    cardLabel: "WEEKLY DRAW  COUNTDOWN",
    description: "Count down till the weekly draw:",
    ammount: "100 000",
    bkcolour: "#5C0D3C",
    border: "8px solid #42092B",
    tablabelStyle: "#42092B",
    second: "#5C0D3C",
    status: false,
    outer: "#42092B",
    mid: "#530B35",
    top: "#5C0D3C"
  },
  {
    id: 3,
    cardLabel: "MONTHLY DRAW  COUNTDOWN",
    description: "Count down till the monthly draw:",
    ammount: "500 000",
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

const CongratulationsLottoCardsList = () => (
  <div>
    {CongratulationsCards.filter(lotto => lotto.status === true).map(card => (
      <CongratulationsLottoCard
        key={card.id}
        cardLabel={card.cardLabel}
        cardType={card.description}
        ammount={card.ammount}
        bg={card.bkcolour}
        brb={card.border}
        bglabel={card.tablabelStyle}
        secbk={card.second}
      />
    ))}
  </div>
);

export default CongratulationsLottoCardsList;
