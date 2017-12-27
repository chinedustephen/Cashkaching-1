/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import UnlockDrawsCard from "../../components/UnlockDrawsCard";
import LottoCard from "../../components/LottoCard";
import PlayedLottoCard from "../../components/PlayedLottoCard";
import CountDownLottoCard from "../../components/CountDownLotto";
import CongratulationsLottoCard from "../../components/CongratulationsLottoCard";
import PlayLottoNumbers from "../../components/PlayLottoNumbers";
import AdvertCard from "../../components/AdvertCard";
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

class Lotto extends Component {
  render() {
    return (
      <div>
        <Mainpanel>
          <BonusNaira />
          <Headercontent>Lotto</Headercontent>
          <Nested>
            <UnlockDrawsCard />
            <UnlockDrawsCard />
          </Nested>

          <LottoCard />
          <PlayedLottoCard />
          <CountDownLottoCard />
          <CongratulationsLottoCard />

          <AdvertCard />
          <PlayLottoNumbers />
        </Mainpanel>
      </div>
    );
  }
}

export default Lotto;
