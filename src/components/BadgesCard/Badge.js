import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 6px solid #c1e190;
  background-color: #6ca516;
`;
const Icon = styled.img`
  margin-left: 15px;
  margin-top: 15px;
`;

const Badge = props => (
  <div>
    <IconContainer onClick={props.onClick}>
      <Icon src={require("./images/star.svg")} />
    </IconContainer>
  </div>
);

export default Badge;
