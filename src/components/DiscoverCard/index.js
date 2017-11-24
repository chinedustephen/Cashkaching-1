/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import ImgBk1 from "./images/imgBk1.png";
import ImgBk2 from "./images/imgBk2.png";
import ImgBk3 from "./images/imgBk3.png";
import ImgBk4 from "./images/imgBk4.png";

const Cardlayout = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;
	background: #fafafa;
	border-bottom: 8px solid #eee6e6;
	box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
	margin-bottom: 30px;
	border-radius: 4px;
	@media only screen and (max-width: 500px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

const SideCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	@media only screen and (max-width: 500px) {
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;
const Cardcontainer = styled.div`
	background-image: url(${ImgBk1});
	background-repeat: no-repeat;
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 1;
`;
const Cardcontainer2 = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	background-image: url(${ImgBk2});
	background-repeat: no-repeat;
`;
const Cardcontainer3 = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	background-image: url(${ImgBk3});
	background-repeat: no-repeat;
`;
const Cardcontainer4 = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	background-image: url(${ImgBk4});
	background-repeat: no-repeat;
`;

const Overlay = styled.img`
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 1;
	z-index: 1;
	width: 100%;
	margin-top: 151px;
`;

const Subheader = styled.p`
	font-family: Roboto-Regular;
	font-size: 12px;
	color: #fafafa;
	letter-spacing: 0.16px;
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 1;
	z-index: 1;
	margin-top: 49%;
	margin-left: 4%;
`;
const Cardheader = styled.p`
	font-family: Campton-BoldDEMO;
	font-size: 24px;
	color: #fafafa;
	letter-spacing: 0.32px;
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 1;
	z-index: 1;
	margin-top: 54%;
	margin-left: 4%;
`;

const ImgHolder = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	@media only screen and (max-width: 500px) {
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;

class DiscoverCard extends Component {
	render() {
		return (
			<Cardlayout>
				<ImgHolder>
					<Cardcontainer />
					<Overlay src={require("./images/overlay.svg")} />
					<Subheader>Food deal</Subheader>
					<Cardheader>Nandos resturant 25% off</Cardheader>
				</ImgHolder>
				<SideCards>
					<Cardcontainer2 />
					<Cardcontainer3 />
					<Cardcontainer4 />
				</SideCards>
			</Cardlayout>
		);
	}
}

export default DiscoverCard;
