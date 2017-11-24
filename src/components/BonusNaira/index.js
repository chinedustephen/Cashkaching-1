/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";

const Bonusnaira = styled.div`
	margin-bottom: 30px;
	display: inline;
`;

const BonusFigure = styled.div`
	/* Rectangle 10: */
	background: #f27272;
	border-radius: 4px;
	display: inline-block;
	font-family: Roboto-Medium;
	font-size: 13px;
	color: #fafafa;
	height: 15px;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
`;

const BonusText = styled.p`
	font-family: Roboto-Light;
	font-size: 14px;
	color: #000000;
	display: inline;
	margin-right: 5px;
`;

class BonusNaira extends Component {
	render() {
		return (
			<Bonusnaira>
				<BonusText>Bonus |</BonusText>
				<BonusFigure>N 1000</BonusFigure>
			</Bonusnaira>
		);
	}
}

export default BonusNaira;
