import React from "react";
import styled from "styled-components";
import BonusNaira from "../../components/BonusNaira";
import LottoCardsList from "./LottoCard";
import PlayedLottoCardsList from "./PlayedLotto";
import CountDownLottoCardsList from "./CountDownLottoCard";
import CongratulationsLottoCardsList from "./CongratulationsLottoCard";
import UnlockedLottoCardsList from "./UnlockedDraws";

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

const Lotto = () => (
  <div>
    <Mainpanel>
      <BonusNaira />
      <Headercontent>Lotto</Headercontent>

      <UnlockedLottoCardsList />

      <LottoCardsList />
      <PlayedLottoCardsList />
      <CountDownLottoCardsList />
      <CongratulationsLottoCardsList />
    </Mainpanel>
  </div>
);

export default Lotto;
