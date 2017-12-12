import React from "react";
import styled from "styled-components";

const Number = styled.p`
  font-family: Campton-Bold;
  font-size: 64px;
  color: #212121;
  letter-spacing: 0;
`;

class Stat extends React.Component {
  render() {
    return <Number>{this.props.number}</Number>;
  }
}

export default Stat;
