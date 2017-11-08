/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled, { css } from "styled-components";
import SearchImg from "./images/search.svg";
const Search = styled.div``;

const Searchitems = styled.input`
	width: 130px;
	height: 36px;
	box-sizing: border-box;
	border: 3px solid #5e8a1c;
	font-family: Roboto-Regular;
	font-size: 12px;
	color: #333333;
	border-top: none;
	border-left: none;
	border-right: none;
	background-color: white;
	background-image: url(${SearchImg});
	background-position: 10px 10px;
	background-repeat: no-repeat;
	padding: 12px 20px 12px 40px;
	-webkit-transition: width 0.4s ease-in-out;
	transition: width 0.4s ease-in-out;
	margin-top: 24px;
	margin-bottom: 22px;
	&:focus {
		width: 100%;
		outline-color: transparent;
		outline-style: none;
	}
`;

class SearchInput extends Component {
	render() {
		return (
			<Search>
				<Searchitems placeholder="Search" />
			</Search>
		);
	}
}

export default SearchInput;
