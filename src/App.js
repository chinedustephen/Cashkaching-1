import React, { Component } from "react";
import PersonalAccountApp from "./containers/App";
import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	top: 0;
	height: 100vh;
`;

class App extends Component {
	render() {
		return (
			<Wrapper>
				<PersonalAccountApp />
			</Wrapper>
		);
	}
}

export default App;
