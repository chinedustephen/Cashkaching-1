/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled, { css } from "styled-components";
import UnlockDrawsCard from "../../components/UnlockDrawsCard";
import LottoCard from "../../components/LottoCard";
import BonusNaira from "../../components/BonusNaira";

const Aside = styled.div`
	@media only screen and (max-width: 1000px) {
		div {
			display: none;
		}
	}
`;
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

const Adplacement = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: minmax(400px, auto);
	margin-top: 3em;
	margin-bottom: 2em;
`;
const Contentwrapper = styled.div`
	display: grid;
	grid-template-columns: 20% 57.5% 20%;
	grid-column-gap: 1em;
	@media only screen and (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	}
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
			<Contentwrapper>
				<Aside>
					<Adplacement>ads here</Adplacement>
					<Adplacement>ads here</Adplacement>
				</Aside>
				<Mainpanel>
					<BonusNaira />
					<Headercontent>Lotto</Headercontent>
					<Nested>
						<UnlockDrawsCard />
						<UnlockDrawsCard />
					</Nested>
					<LottoCard />
				</Mainpanel>
				<Aside>
					<Adplacement>ads here</Adplacement>
					<Adplacement>ads here</Adplacement>
				</Aside>
			</Contentwrapper>
		);
	}
}

export default Lotto;
