import React from "react";
import styled from "styled-components";
import UnlockDrawsCard from "../../components/UnlockDrawsCard";
import LottoCard from "../../components/LottoCard";
import PlayedLottoCard from "../../components/PlayedLottoCard";
import CountDownLottoCard from "../../components/CountDownLotto";
import CongratulationsLottoCard from "../../components/CongratulationsLottoCard";
import ShareCard from "../../components/ShareCard";
import BonusNaira from "../../components/BonusNaira";

const Mainpanel = styled.div`
  margin-top: 30px;
  @media only screen and (max-width: 1000px) {
    grid-auto-columns: minmax(700px, auto);
    width: 724px;
  }
  @media only screen and (max-width: 500px) {
    width: 381px;
  }
`;

const Headercontent = styled.h1`
  margin-bottom: 30px;
  opacity: 0.87;
  font-family: Campton-BoldDEMO;
  font-size: 24px;
  color: #212121;
  letter-spacing: 0.43px;
`;

const Nested = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(93px, auto);
  grid-gap: 1em;
  @media only screen and (max-width: 724px) {
    grid-template-columns: 1fr;
  }
`;

const LottoCards = [
  {
    id: 1,
    lottotype: "DAILY DRAW",
    bkcolour: "#6ca516",
    border: "8px solid #5e8a1c",
    tablabelStyle: "#5e8a1c",
    second: "#639A11",
    status: true
  },
  {
    id: 2,
    lottotype: "WEEKLY DRAW",
    bkcolour: "#5C0D3C",
    border: "8px solid #42092B",
    tablabelStyle: "#42092B",
    status: true
  },
  {
    id: 3,
    lottotype: "MONTHLY DRAW",
    bkcolour: "#EF8A17",
    border: "8px solid #CC740E",
    tablabelStyle: "#CC740E",
    status: true
  }
];
const FiteredCards1 = LottoCards.filter(lotto => lotto.status === true).map(
  list => (
    <LottoCard
      key={list.id}
      type={list.lottotype}
      bg={list.bkcolour}
      brb={list.border}
      bglabel={list.tablabelStyle}
      secbk={list.second}
    />
  )
);

const Lotto = () => (
  <div>
    <Mainpanel>
      <BonusNaira />
      <Headercontent>Lotto</Headercontent>
      <Nested>
        <UnlockDrawsCard />
        <UnlockDrawsCard />
      </Nested>

      {FiteredCards1}
      <PlayedLottoCard />
      <CountDownLottoCard />
      <CongratulationsLottoCard />
    </Mainpanel>
  </div>
);

export default Lotto;
