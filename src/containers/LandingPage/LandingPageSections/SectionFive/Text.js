import React from "react";
import styled from "styled-components";

const Text = styled.p`
  /* UNIQUE VISITORS: */
  font-family: Raleway-Bold;
  font-size: 20px;
  color: #212121;
  letter-spacing: 1.11px;
  line-height: 30px;
`;

class StatText extends React.Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}

export default StatText;