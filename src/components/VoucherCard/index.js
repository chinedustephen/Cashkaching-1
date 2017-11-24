/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import VoucherImg1 from "./images/VoucherImg1.png";

const Smallcardcontainers = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 51% 40%;
	background: #fafafa;
	border-radius: 4px;
	border-bottom: 8px solid #eee6e6;
	box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
	margin-top: 2em;
	margin-bottom: 1em;
`;

const ImgContainer = styled.div`
	grid-column: span 5;
	grid-column: 174px;
	background-image: url(${VoucherImg1});
	background-repeat: no-repeat;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`;
const Cardcontent = styled.div`
	grid-column: span 5;
	display: grid;
	grid-template-columns: 50% 50% 1fr 1fr;
`;

const VoucherNameContainer = styled.div`
	grid-column: span 1;
`;
const VoucherNameText = styled.p`
	font-family: Roboto-Regular;
	font-size: 10px;
	color: #666464;
	letter-spacing: 0.13px;
	margin-top: 23px;
	margin-left: 14px;
`;
const VoucherRedeemAmount = styled.div`
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
	max-width: 37px;
	margin-top: 16px;
	margin-left: 61%;
`;
const VoucherDescription = styled.div`
	grid-column: span 5;
	/* Delicious Asun 25% o: */
`;
const VoucherDescriptionText = styled.p`
	font-family: Roboto-Regular;
	font-size: 14px;
	color: #000000;
	letter-spacing: 0.16px;
	margin-left: 14px;
	margin-right: 14px;
`;

const VoucherExpiry = styled.p`
	/* Expires in 21 days(H: */
	font-family: Roboto-Regular;
	font-size: 10px;
	color: #ee452d;
	letter-spacing: 0.11px;
	margin-left: 14px;
	margin-right: 14px;
`;
const VoucherButton = styled.div`
	grid-column: span 5;
`;
const VoucherButtonMain = styled.button`
	background-color: red;
	display: block;
	border: 0px;
	background: #f25500;
	border-radius: 8px;
	border-bottom: 3px solid #c44500;
	color: #ffffff;
	font-family: Campton-BoldDEMO;
	font-size: 12px;
	-webkit-letter-spacing: 0.87px;
	-moz-letter-spacing: 0.87px;
	-ms-letter-spacing: 0.87px;
	letter-spacing: 0.87px;
	width: 120px;
	height: 41px;
	margin-left: 14px;
`;

class VoucherCard extends Component {
	render() {
		return (
			<Smallcardcontainers>
				<ImgContainer />
				<Cardcontent>
					<VoucherNameContainer>
						<VoucherNameText>Junes cuisines</VoucherNameText>
					</VoucherNameContainer>
					<VoucherRedeemAmount>1 000</VoucherRedeemAmount>
					<VoucherDescription>
						<VoucherDescriptionText>Delicious Asun 25% off your first order</VoucherDescriptionText>
						<VoucherExpiry>Expires in 21 days(HURRY limited offer)</VoucherExpiry>
					</VoucherDescription>
					<VoucherButton>
						<VoucherButtonMain>REDEEM</VoucherButtonMain>
					</VoucherButton>
				</Cardcontent>
			</Smallcardcontainers>
		);
	}
}

export default VoucherCard;
