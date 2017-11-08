/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled, { css } from "styled-components";

const Smallcardcontainers = styled.div`
	background: #5c0d3c;
	border-radius: 4px;

	${props =>
		props.monthly &&
		css`
			background: #ef8a17;
		`};
`;

const PlaysCounter = styled.p`
	opacity: 0.87;
	font-family: Roboto-Medium;
	font-size: 41px;
	color: #ffffff;
	letter-spacing: 0.73px;
	margin-top: 21px;
	margin-bottom: 24px;
	margin-left: 20px;
	display: inline-block;
`;

const PlaysDescription = styled.p`
	/* Plays to unlocking w: */
	opacity: 0.87;
	font-family: Roboto-Bold;
	font-size: 12px;
	color: #ffffff;
	letter-spacing: 0.21px;
	display: inline-block;
	grid-column-start: 2;
	grid-column-end: 4;
	margin-top: 26px;
`;

const PlaysAmount = styled.p`
	opacity: 0.87;
	font-family: Roboto-Medium;
	font-size: 15px;
	color: #ffffff;
	-webkit-letter-spacing: 0.27px;
	-moz-letter-spacing: 0.27px;
	-ms-letter-spacing: 0.27px;
	letter-spacing: 0.27px;
	grid-column-start: 2;
	grid-column-end: 4;
	margin-top: 24px;
`;
const PlaysContainer = styled.div`
	display: grid;
	grid-template-columns: 28% 1fr 1fr 15%;
	grid-template-rows: 21px 30px 30px 20px;
`;

const LockImg = styled.img`
	margin-top: 10px;
`;

class UnlockDrawsCard extends Component {
	render() {
		return (
			<Smallcardcontainers>
				<PlaysContainer>
					<PlaysCounter>1/4</PlaysCounter>
					<PlaysDescription>Plays to unlocking weekly draw</PlaysDescription>
					<PlaysAmount>Amount: N10 000 000</PlaysAmount>
					<LockImg src={require("./images/Lock.svg")} />
				</PlaysContainer>
			</Smallcardcontainers>
		);
	}
}

export default UnlockDrawsCard;
