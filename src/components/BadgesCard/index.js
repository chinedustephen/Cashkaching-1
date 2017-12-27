import React, { Component } from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
  display: grid;
  background: #fafafa;
  border-radius: 4px;
  border-bottom: 8px solid #eee6e6;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
`;
const Cardlayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1em;
  margin-top: 28px;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const IconContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 6px solid #c1e190;
  background-color: #6ca516;
`;
const Icon = styled.img``;

class BadgesCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <div>
              <IconContainer>
                <Icon src={require("./images/star.svg")} />
              </IconContainer>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default BadgesCard;
